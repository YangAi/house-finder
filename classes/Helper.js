class Helper {
  static standardizeStockCode (code) {
    return parseInt(code) < 600000 ? `${code}.SZ` : `${code}.SH`
  }
}

module.exports = Helper
