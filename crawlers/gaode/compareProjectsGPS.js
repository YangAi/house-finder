const GaodeLBS = require('../../classes/gaode/GaodeLBS.js')
const BaiduLBS = require('../../classes/baidu/BaiduLBS.js')
const Csv = require('../../classes/Csv')
const _ = require('lodash')
const $db = require('../../lib/db')

const baidu = new BaiduLBS()
const gaode = new GaodeLBS();

(async () => {
  const projects = await $db.houseProject.find()

  for (const project of projects) {
    const baiduRes = await baidu.getGeocode(project.name)
    console.log(baiduRes)
    const gps = baidu.toGaodeGPS(baiduRes.result.location.lng, baiduRes.result.location.lat)
    console.log(gps)
    const gaodeRes = await gaode.getGeocode(project.name)
    console.log(gaodeRes)
    const arr = gaodeRes.geocodes[0].location.split(',')
    console.log((gps.lng - arr[0]) * 111 * 1000 * Math.cos(gps.lat))
    console.log((gps.lat - arr[1]) * 111 * 1000)
    return
  }
  // await Csv.to('../../data/districts.csv', districts)
  console.log('================================================finished')
  process.exit(0)
})()
