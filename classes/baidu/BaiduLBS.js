const Crawler = require('../Crawler')
const dotenv = require('dotenv')
dotenv.config({ path: '../../.env' })
const crawler = new Crawler()

const API_KEY = process.env.VUE_APP_BAIDU_MAP_AK
class BaiduLBS {
  constructor () {
    this.city = process.env.VUE_APP_TARGET_CITY
  }

  async getGeocode (address) {
    const url = encodeURI(`http://api.map.baidu.com/geocoding/v3/?city=${this.city}&address=${address}&output=json&ak=${API_KEY}`)
    return await crawler.getJson(url)
  }

  async searchPOI ({ lat, lng, query } = {}) {
    const url = encodeURI(`http://api.map.baidu.com/place/v2/search?query=${query}&page_size=20&page_num=0&scope=2&ak=${API_KEY}&output=json&location=${lat},${lng}`)
    return await crawler.getJson(url)
  }

  toGaodeGPS (baiduLng, baiduLat) {
    const X_PI = Math.PI * 3000.0 / 180.0
    const x = baiduLng - 0.0065
    const y = baiduLat - 0.006
    const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * X_PI)
    const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * X_PI)
    const lng = z * Math.cos(theta)
    const lat = z * Math.sin(theta)
    return { lng, lat }
  }
}

module.exports = BaiduLBS
