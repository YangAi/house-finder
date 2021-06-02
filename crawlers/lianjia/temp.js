const _ = require('lodash')
const $db = require('../../lib/db')
const LianjiaCrawler = require('../../classes/lianjia/LianjiaCrawler')

const lianjia = new LianjiaCrawler('sh');

(async () => {
  const projects = await $db.houseProject.find().select('area')
  const areas = await $db.area.find().select('name spelling').limit(20).skip(140)
  const arr = _.groupBy(projects, 'area')
  for (const area of areas) {
    const res = await lianjia.getHouseProjectByUrl(`https://sh.lianjia.com/xiaoqu/${area.spelling}/`)
    if (parseInt(res.total) - arr[area.name]?.length > 2) {
      console.log(area.name, parseInt(res.total) === arr[area.name]?.length, res.total, arr[area.name]?.length || 0)
      await lianjia.getHouseProjects(area, 1)
    }
  }
  // for (const item in arr) {
  //   console.log(item, arr[item].length)
  // }
})()
