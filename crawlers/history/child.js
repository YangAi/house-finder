const fs = require('fs-extra')
const _ = require('lodash')
const CSV = require('../../classes/CsvFile')
const Crawler = require('../../classes/Crawler')
const crawler = new Crawler()
const $db = require('../../lib/db')

process.on('message', async (area) => {
  for (let i = 1; i <= 5; i++) {
    let maxPage = 1
    let page = 1
    while (page <= maxPage) {
      console.time(`${area.text} 第${page}页`)
      // await crawler.sleep(_.random(1000, 2000))
      const res = await crawler.postJson('https://m.fangdd.com/api/data/fetchChengjiaoList',
        {
          cityId: 121,
          condition: `p${page}_i20_${area.url}_f${i}`
        })
      if (res.code === 200) {
        if (maxPage === 1) {
          console.log(`开始: ${area.district} ${area.text}, 共${res.data.total}条`)
          process.send({ area: area.text, count: res.data.total, maxPage })
        }
        maxPage = Math.ceil(res.data.total / 20) || 1
        for (const item of res.data.list) {
          delete item.cellId
          delete item.cityId
          delete item.sectionId
          item.geo = item.geo.split(',')
          await $db.transaction.findOneAndUpdate({ id: item.id, geo: item.geo, tradeDate: item.tradeDate, title: item.title, source: item.source }, item, {
            upsert: true
          })
        }
        page++
      } else {
        console.log(res)
      }
      console.timeEnd(`${area.text} 第${res.code === 200 ? page - 1 : page}页`)
      process.send({
        page: res.code === 200 ? page - 1 : page,
        text: area.text,
        url: area.url,
        code: res.code,
        count: res?.data?.list?.length || -1,
        timestamp: Date.now(),
        finished: (res.code === 200 ? page - 1 : page) === maxPage
      })
    }
  }
})
