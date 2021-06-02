const childProcess = require('child_process')
const _ = require('lodash')
const $db = require('../../lib/db')
const LianjiaCrawler = require('../../classes/lianjia/LianjiaCrawler')

const lianjia = new LianjiaCrawler('sh');

(
  async () => {
    const projects = await $db.houseProject.find({ developer: undefined })

    const chunks = _.chunk(projects, 10)

    for (const i in chunks) {
      const worker = childProcess.fork('./worker.js')
      worker.on('message', function (m) {
        console.log('消息：', m)
      })
      setTimeout(() => {
        worker.send({
          chunks: chunks[i],
          index: i
        })
      }, 200)
    }
  }
)()
