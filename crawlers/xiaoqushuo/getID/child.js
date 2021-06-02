const fs = require('fs-extra')
const _ = require('lodash')
const stringSimilarity = require('string-similarity')
const CSV = require('../../../classes/CsvFile')
const Crawler = require('../../../classes/Crawler')
const crawler = new Crawler()
const $db = require('../../../lib/db')

process.on('message', async (page = 0) => {
  console.time(`第${page}批数据`)
  const output = []
  const projects = await $db.project.find({ districtName: '黄浦' }).limit(10).skip(page * 10)
  for (const project of projects) {
    let res = []
    let keyword = project.name.replace('(', '').replace(')', '')
    while (keyword.length > 1 && res.length === 0) {
      res = await get(keyword)
      if (res.length === 0) { keyword = keyword.substring(0, keyword.length - 1) }
    }
    if (res.length === 0) {
      res = [{
        isb: '____',
        title: '______'
      }]
    }

    const pairs = stringSimilarity.findBestMatch(`[${project.districtName}]`, res.map((item) => {
      return item.title.includes(`[${project.districtName}]`) ? item.title : '________'
    }))
    console.log(project.name, res ? res[0].isb : null, project.followerCount)
    output.push({
      ...res[pairs.bestMatchIndex],
      similarity: pairs.bestMatch.rating,
      name: project.name,
      district: project.districtName,
      fLng: project.position.lng,
      fLat: project.position.lat,
      followerCount: project.followerCount,
      _id: project._id,
      fAddress: project.addressList.join(',')
    })
  }
  console.timeEnd(`第${page}批数据`)
  process.send({
    page,
    data: output
  })
})

async function get (keyword) {
  await crawler.sleep()
  const res = await crawler.getJQuery(`https://xiaoqushuo.com/getyt?kw=${keyword}&cb=sh&callback=sh`, 'sh')
  return res.s || []
}
