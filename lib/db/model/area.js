const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AreaSchema = new Schema({
  district: String,
  name: String,
  spelling: String,
  url: String,
  available: Number,
  total: Number
}, { strict: false, timestamps: true })

const Area = mongoose.model('Area', AreaSchema)

module.exports = Area
