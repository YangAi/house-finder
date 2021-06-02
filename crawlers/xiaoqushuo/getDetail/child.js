const fs = require('fs-extra')
const _ = require('lodash')
const CSV = require('../../../classes/CsvFile')
const Crawler = require('../../../classes/Crawler')
const crawler = new Crawler()
const $db = require('../../../lib/db')

process.on('message', async (page = 0) => {
  console.time(`第${page}批数据`)
  const output = []
  const projects = await $db.project.find().limit(100).skip(page * 100)
  for (const project of projects) {
    await crawler.sleep()
    const res = await crawler.getJQuery(`https://xiaoqushuo.com/getyt?kw=${project.name}&cb=sh&callback=sh`, 'sh')
    console.log(project.name, res.s ? res.s[0].isb : null, project.followerCount)
    if (res.s === null) { res.s = [{}] }
    output.push({
      ...res.s[0],
      name: project.name,
      district: project.districtName,
      fLng: project.position.lng,
      fLat: project.position.lat,
      followerCount: project.followerCount
    })
  }
  console.timeEnd(`第${page}批数据`)
  process.send({
    page,
    data: output
  })
})
