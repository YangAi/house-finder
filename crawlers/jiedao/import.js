const fs = require('fs-extra')
const _ = require('lodash')
const CSV = require('../../classes/CsvFile')
const Crawler = require('../../classes/Crawler')
const crawler = new Crawler()
const $db = require('../../lib/db');

(async () => {
  const list = await CSV.load('./jiedao.csv')
  const jiedao = list.list
  let j = 0
  for (let i = 0; i < jiedao.length; i++) {
    console.log(i)
    const project = await $db.project.findOne({ name: jiedao[i].project })
    if (project) {
      const res = await $db.project.updateOne({ _id: project._id }, {
        $set: {
          jiedaoName: jiedao[i].jiedao,
          juweiName: jiedao[i].juwei
        }
      })
      list.list[i].match = project._id
      j++
    }
  }
  await list.save()
  console.log('--------------------------------finished')
  console.log(j)
  process.exit(0)
})()
