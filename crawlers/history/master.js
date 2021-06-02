const cluster = require('cluster')
const os = require('os')
const _ = require('lodash')
const cpuCount = 6 || os.cpus().length
const $db = require('../../lib/db')
const CsvFile = require('../../classes/CsvFile')
let currentPage = 0;

(async () => {
  if (cluster.isMaster) {
    const districts = require('./area.json')
    const log = await CsvFile.load('./log.csv')
    const count = await CsvFile.load('./count.csv')
    const areas = []
    // districts.forEach((district) => {
    //   district.children.forEach((area) => {
    //     area.district = district.text
    //     if (area.text !== '不限' && !count.list.find(item => area.text === item.area)) {
    //       areas.push(area)
    //     }
    //   })
    // })
    count.list.forEach((area) => {
      if (area.count > 10000) { areas.push(log.list.find(item => item.text === area.area)) }
    })
    // currentPage = Math.max(...log.list.filter(item => item.code === 200).map(item => item.page))
    console.time('总时间')
    for (let i = 0; i < cpuCount; i++) {
      const worker = cluster.fork()
      setTimeout(() => {
        worker.send(areas[currentPage])
        currentPage++
      })

      worker.on('message', async (payload) => {
        if (payload.area && payload.count >= 0) {
          count.push(payload)
          return
        }
        if (payload.finished) {
          if (currentPage >= areas.length) {
            console.timeEnd('总时间')
            // process.exit(0)
          } else {
            // setTimeout(() => {
            //   worker.send(areas[currentPage])
            //   currentPage++
            // }, 100)
          }
        }
        if (payload.code !== 200) {
          console.log(payload)
        }
        await log.push(payload)
      })
    }
  } else {
    require('./child.js')
  }
})()
