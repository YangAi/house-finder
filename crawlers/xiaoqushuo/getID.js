const fs = require('fs-extra')
const _ = require('lodash')

const Cluster = require('../../classes/Cluster')
const cluster = new Cluster()

const districtName = '黄浦'

// cluster.chunkSize = 2
cluster.prepare = async () => {
  cluster.log = await cluster.CSV.load(`./${districtName}.csv`)
}
cluster.input = () => {
  return cluster.$db.project.find({ districtName }).limit(100)
}
cluster.worker.process = async ({ page, chunkSize }) => {
  const output = []
  const projects = await cluster.$db.project.find({ districtName }).limit(chunkSize).skip(page * chunkSize)
  for (const project of projects) {
    const res = { q: 0 }
    let keyword = project.name.replace('(', '').replace(')', '')
    console.log(res, keyword)
    // return
    while (keyword.length > 2 && res.q === 0) {
      await cluster.crawler.sleep()
      const res = await cluster.crawler.getJQuery(`https://xiaoqushuo.com/getyt?kw=${keyword}&cb=sh&callback=sh`, 'sh')
      if (res.q === 0) { keyword = keyword.substring(0, keyword.length - 1) }
    }

    const pairs = cluster.similarity.findBestMatch(`[${project.districtName}]`, res.map((item) => {
      return item.title.includes(`[${project.districtName}]`) ? item.title : '________'
    }))
  }
  cluster.worker.send(page, { output })
}
cluster.worker.callback = async (payload) => {
  for (const item of payload.output) {
    await cluster.log.push(item)
  }
}
cluster.start()

async function get (keyword) {
  await crawler.sleep()
  const res = await crawler.getJQuery(`https://xiaoqushuo.com/getyt?kw=${keyword}&cb=sh&callback=sh`, 'sh')
  return res.s || []
}
