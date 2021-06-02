const Crawler = require('../Crawler')
const _ = require('lodash')
const $db = require('../../lib/db/index.js')

const crawler = new Crawler()

class LianjiaCrawler {
  constructor (city = 'sh') {
    this.city = city
  }

  async getDistricts (updateDatabase = true) {
    console.log('开始行政区爬虫')
    console.time('运行时间：')
    const domain = `https://${this.city}.lianjia.com`
    const output = []
    const $ = await crawler.getDom(`${domain}/ershoufang/`, 'utf8')
    $('.m-filter .position dd div:first-child div:first-child a').each(async function () {
      const url = domain + $(this).attr('href')
      const arr = url.split('/')
      const item = {
        name: $(this).text(),
        url,
        spelling: arr[arr.length - 2]
      }
      output.push(item)
    })
    if (updateDatabase) {
      for (const item of output) {
        await $db.district.findOneAndUpdate({ url: item.url }, item, { upsert: true, new: true })
      }
    }

    console.timeEnd('运行时间：')
    return output
  }

  async getUniqueAreasByDistricts (districts) {
    const output = await this.getAreasByDistricts(districts)
    return _.uniqBy(output, 'url')
  }

  async getAreasByDistricts (districts = [], updateDatabase = true) {
    if (districts === []) {
      districts = await $db.district.find()
    }
    if (typeof districts[0].name === 'undefined') {
      console.error('数据错误')
      return
    }
    let output = []
    for (const district of districts) {
      output = output.concat(await this.getAreasByDistrict(district, updateDatabase))
    }
    return output
  }

  async getAreasByDistrict (district, updateDatabase = true) {
    if (typeof district.name === 'undefined') {
      console.error('数据错误', district)
      return
    }
    console.log('开始区域爬虫', district.name)
    console.time('运行时间：')
    const domain = `https://${this.city}.lianjia.com`
    const output = []
    const $ = await crawler.getDom(district.url, 'utf8')
    $('.m-filter .position dd div:first-child div:last-child a').each(function () {
      const url = domain + $(this).attr('href')
      const arr = url.split('/')
      output.push({
        district: district.name,
        name: $(this).text(),
        url,
        spelling: arr[arr.length - 2]
      })
    })
    if (updateDatabase) {
      for (const item of output) {
        await $db.area.findOneAndUpdate({ district: district.name, url: item.url }, item, { upsert: true, new: true })
      }
    }
    console.timeEnd('运行时间：')
    return output
  }

  async getHouseProjects (area, startingPage = 1) {
    let count = 0
    console.log('开始小区爬虫: ', area.district, area.name)
    console.time('运行时间：')
    const url = `https://${this.city}.lianjia.com/xiaoqu/${area.spelling}/`
    // 抓取和保存第一页
    const firstPage = await this.getHouseProjectByUrl(startingPage === 1 ? `${url}` : `${url}/pg${startingPage}`)
    let output = firstPage.data
    // 获取页面总数据量，并从第二页继续
    const pendingTotal = firstPage.total - 30 * (startingPage - 1)
    console.log(`共${firstPage.total}条数据, 从第${startingPage}页开始，预计抓取 ${pendingTotal} 条，共 ${Math.ceil(firstPage.total / 30) - startingPage + 1} 页`)
    for (let i = startingPage + 1; i <= Math.ceil(firstPage.total / 30); i++) {
      console.time(`${area.name} 第${i}页`)
      const pageOutput = await this.getHouseProjectByUrl(`${url}/pg${i}`)
      output = output.concat(pageOutput.data)

      console.timeEnd(`${area.name} 第${i}页`)
      console.log(`本页共${pageOutput.data.length}条数据, 累计${output.length}条`)
    }
    if (output.length !== pendingTotal) {
      console.error(`数据长度不匹配，共${pendingTotal}条数据，获取到${output.length}条`)
    }
    console.timeEnd('运行时间：')
    return output
  }

  async getHouseProjectByUrl (url) {
    const data = []
    const $ = await crawler.getDom(url, 'utf8')
    const total = $('.resultDes .total span').text()
    $('.listContent .xiaoquListItem').each(function () {
      const lianjiaId = $(this).attr('data-housecode')
      const name = $(this).find('.title').text().trim()
      const averagePrice = $(this).find('.totalPrice span').text().replace('未知', -1).replace('暂无', -1)
      const recentTransaction = $(this).find('.houseInfo a:nth-child(2)').text().replace('90天成交', '').replace('套', '')
      const currentOnRent = $(this).find('.houseInfo a:last-child').text().replace('套正在出租', '')
      const currentOnSale = $(this).find('.xiaoquListItemSellCount a span').text()
      const position = $(this).find('.positionInfo').text().trim().replace(' ', '').split('\n')
      const district = position[0].trim()
      const area = position[1].trim()
      const year = position[2].replace('年建成', '').replace('/', '').trim().replace('未知', -1)
      const tag = []
      $(this).find('.tagList span').each(function () {
        tag.push($(this).text())
      })
      const hasTag = !!tag.length
      const item = {
        lianjiaId,
        name,
        averagePrice,
        recentTransaction,
        currentOnRent,
        currentOnSale,
        district,
        area,
        year,
        tag,
        hasTag
      }
      data.push(item)
    })
    for (const item of data) {
      const res = await $db.houseProject.findOneAndUpdate({ lianjiaId: item.lianjiaId }, item, { upsert: true, new: true })
      if (typeof res?.name !== 'string') {
        console.error('!!!!!数据没保存：', item.lianjiaId, item.name)
        console.error(res)
      }
    }

    return {
      data,
      total
    }
  }

  async getHouseProjectDetail (project) {
    await crawler.sleep(1000)
    console.time(`${project.lianjiaId} ${project.district} ${project.area} ${project.name}`)
    const $ = await crawler.getDom(`https://m.lianjia.com/${this.city}/xiaoqu/${project.lianjiaId}`)

    let currentOnSale = 0
    let currentOnRent = 0
    let historicalTransactions = 0
    let developer = ''
    let totalBuildingCount = -1
    let totalPropertyCount = -1
    let yearBuiltStart = -1
    let yearBuiltEnd = -1
    let propertyFee = -1
    let propertyMaintainer = ''
    let propertyMaintainerPhone = ''
    let heatingService = ''
    let parkingLotText = ''
    let parkingLotUpperGround = -1
    let parkingLotUnderGround = -1
    let parkingLotTotal = -1
    let parkingFee = -1
    let carPeopleSeparation = false
    const ringArea = $('.xiaoqu_head_title .xiaoqu_head_address').text().split('-')[1]
    const follower = $('.xiaoqu_head_title .follow span').text()

    $('.xiaoqu_sell_info p.num').each(function (index) {
      if (index === 0) currentOnSale = $(this).text().replace('套', '')
      if (index === 1) historicalTransactions = $(this).text().replace('套', '')
      if (index === 2) currentOnRent = $(this).text().replace('套', '')
    })

    const address = $('.resblock_address').text().replace('地址：', '').split(',')

    $('.worth_list .worth_guide li').each(function () {
      const targetContent = $(this).text().split('：')[1].replace('暂无信息', '')
      switch ($(this).find('.sub_title').text()) {
        case '开发商：':
          developer = targetContent
          break
        case '建筑年代：':
          yearBuiltStart = Math.max(targetContent.replace('年', '').split('-')[0], 999)
          yearBuiltEnd = Math.max(targetContent.replace('年', '').split('-')[1] || yearBuiltStart, 999)
          break
        case '楼栋总数：':
          totalBuildingCount = targetContent.replace('栋', '')
          break
        case '房屋总数：':
          totalPropertyCount = targetContent.replace('户', '')
          break
        case '物业公司：':
          propertyMaintainer = targetContent.replace('--', '')
          break
        case '物业电话：':
          propertyMaintainerPhone = targetContent.replace('--', '')
          break
        case '物业费：':
          propertyFee = targetContent.replace('元/平米/月', '').replace('元/㎡/月', '').replace('--', '')
          if (propertyFee.includes('~')) {
            const tempArr = propertyFee.split('至').map((item) => parseFloat(item))
            propertyFee = _.round(_.mean(tempArr), 2)
          }
          break
        case '供暖类型：':
          heatingService = targetContent.replace('--', '')
          break
        case '车位数：':
          parkingLotUnderGround = parkingLotUpperGround = 0
          parkingLotText = targetContent
          for (const item of targetContent.split(' ')) {
            if (item.includes('地上')) {
              parkingLotUpperGround = parseInt(item.replace('地上', '').replace('个', ''))
            }
            if (item.includes('地下')) {
              parkingLotUnderGround = parseInt(item.replace('地下', '').replace('个', ''))
            }
            parkingLotTotal = parkingLotUpperGround + parkingLotUnderGround
          }
          break
        case '停车费：':
          parkingFee = parseFloat(targetContent.replace('元/月/位', '')) || -1
          break
        case '是否人车分流：':
          carPeopleSeparation = (targetContent === '是')
          break
      }
    })
    const item = {
      ringArea,
      follower,
      currentOnSale,
      currentOnRent,
      historicalTransactions,
      address,
      developer,
      totalBuildingCount,
      totalPropertyCount,
      propertyFee,
      propertyMaintainer,
      propertyMaintainerPhone,
      yearBuiltStart,
      yearBuiltEnd,
      heatingService,
      parkingLotText,
      parkingLotUpperGround,
      parkingLotUnderGround,
      parkingLotTotal,
      parkingFee,
      carPeopleSeparation
    }
    await $db.houseProject.findOneAndUpdate({ lianjiaId: project.lianjiaId }, item, { upsert: true, new: true })
    console.timeEnd(`${project.lianjiaId} ${project.district} ${project.area} ${project.name}`)
    console.log('开发商：', developer)
    return item
  }
}

module.exports = LianjiaCrawler
