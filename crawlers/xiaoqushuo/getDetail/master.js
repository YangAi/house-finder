const cluster = require('cluster')
const os = require('os')
const _ = require('lodash')
const cpuCount = 6 || os.cpus().length
const $db = require('../../../lib/db')
const CsvFile = require('../../../classes/CsvFile')
const maxPage = Math.ceil(21021 / 100)
let currentPage = 0;

(async () => {
  if (cluster.isMaster) {
    const log = await CsvFile.load('./log.csv')
    console.time('总时间')
    for (let i = 0; i < cpuCount; i++) {
      const worker = cluster.fork()
      setTimeout(() => {
        worker.send(currentPage)
        currentPage++
      })

      worker.on('message', async (payload) => {
        for (const item of payload.data) {
          await log.push(item)
        }

        if (payload.page === maxPage) {
          console.timeEnd('总时间')
          process.exit(0)
        } else {
          worker.send(currentPage)
          currentPage++
        }
      })
    }
  } else {
    require('./child.js')
  }
})()
