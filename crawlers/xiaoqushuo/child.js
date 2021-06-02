
const fs = require('fs-extra')
const _ = require('lodash')
const CSV = require('../../classes/CsvFile')
const Crawler = require('../../classes/Crawler')
const crawler = new Crawler()
const $db = require('../../lib/db');

(async () => {
  const $ = await crawler.getDom('https://xiaoqushuo.com/KENJN3WD79')
  console.log($('.jjp .itm').text())
})()
