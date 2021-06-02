const Crawler = require('../Crawler')
const dotenv = require('dotenv')
dotenv.config({ path: '../../.env' })
const crawler = new Crawler()

const API_KEY = process.env.VUE_APP_GAODE_MAP_AK

class GaodeLBS {
  constructor () {
    this.city = process.env.VUE_APP_TARGET_CITY
  }

  async getGeocode (address) {
    const url = encodeURI(`https://restapi.amap.com/v3/geocode/geo?key=${API_KEY}&address=${address}&city=${this.city}`)
    return await crawler.getJson(url)
  }

  toBaiduGPS (gaodeLng, gaodeLat) {
    const X_PI = Math.PI * 3000.0 / 180.0
    const x = gaodeLng
    const y = gaodeLat
    const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * X_PI)
    const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * X_PI)
    const lng = z * Math.cos(theta) + 0.0065
    const lat = z * Math.sin(theta) + 0.006
    return {
      lng, lat
    }
  }
}

module.exports = GaodeLBS
