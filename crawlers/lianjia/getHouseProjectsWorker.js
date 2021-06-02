const $db = require('../../lib/db')
const LianjiaCrawler = require('../../classes/lianjia/LianjiaCrawler')

const lianjia = new LianjiaCrawler('sh')

process.on('message', async (payload) => {
  console.log('开始进程：', payload.index)
  let count = 0
  for (const area of payload.chunks) {
    // const res = await lianjia.getHouseProjectByUrl(`https://sh.lianjia.com/xiaoqu/${area.spelling}/`)
    // if (parseInt(res.total) - payload.arr[area.name]?.length > 0) {
    //   console.log(area.name, parseInt(res.total) === payload.arr[area.name]?.length, res.total, payload.arr[area.name]?.length || 0)
      await lianjia.getHouseProjects(area, 1)
    // } else {
    //   count++
      // console.log(area.name, parseInt(res.total) === payload.arr[area.name]?.length, res.total, payload.arr[area.name]?.length || 0)
    // }
    // await $db.area.updateOne({ spelling: area.spelling }, { available: payload.arr[area.name]?.length })
  }
  console.log('============finished: ', payload.index, payload.chunks.length - count, count)
  process.exit(0)
})
