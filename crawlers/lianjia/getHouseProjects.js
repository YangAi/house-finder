const childProcess = require('child_process')
const _ = require('lodash')
const $db = require('../../lib/db')
const LianjiaCrawler = require('../../classes/lianjia/LianjiaCrawler')

const lianjia = new LianjiaCrawler('sh');

(
  async () => {
    const projects = await $db.houseProject.find().select('area')
    const arr = _.groupBy(projects, 'area')

    const areas = await $db.area.find()

    // for (const area of areas) {
    //   if (area.total !== area.available) {
    //     console.log(area.name, area.total, area.available)
    //   }
    // }
    //
    // return
    const chunks = _.chunk(areas.filter((item) => item.total - item.available > 3), 2)

    for (const i in chunks) {
      const worker = childProcess.fork('./getHouseProjectsWorker.js')
      worker.on('message', function (m) {
        console.log('消息：', m)
      })
      setTimeout(() => {
        worker.send({
          arr,
          chunks: chunks[i],
          index: i
        })
      }, 200)
    }

    return

    for (const project of projects) {
      if (typeof project.developer === 'undefined') {
        await lianjia.getHouseProjectDetail(project)
      }
    }
    console.log('================================================finished')
    process.exit(0)
  }
)()
