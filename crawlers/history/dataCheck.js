const fs = require('fs-extra')
const _ = require('lodash')
const CsvFile = require('../../classes/CsvFile')
const Crawler = require('../../classes/Crawler')
const crawler = new Crawler()
const $db = require('../../lib/db');

(async () => {
  const log = await CsvFile.load('./log.csv')
  const count = await CsvFile.load('./count.csv')
  for (const area of count.list) {
    // if (area.count > 10000) {
    //   console.log(area)
    // }
    for (let i = 1; i <= Math.min(Math.ceil(area.count / 20), 500); i++) {
      if (!log.findOne({ text: area.area, page: i })) {
        console.log(area.area, i)
      } else {
        // console.log(Math.min(Math.ceil(area.count / 20), 500), i)
      }
    }
  }
})()
