const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  platformId: Number,
  addressList: Array,
  areaName: String,
  averagePrice: Number,
  buildYear: Number,
  buildingCount: Number,
  cityName: String,
  displayPropertyList: Array,
  districtName: String,
  jiedaoName: String,
  juweiName: String,
  followerCount: Number,
  historicalTransactionCount: Number,
  houseUnitCount: Number,
  isValid: Boolean,
  name: String,
  onRentCount: Number,
  onSaleCount: Number,
  platformName: String,
  platformUrl: String,
  position: { lng: Number, lat: Number, cycleLine: String },
  referenceDocument: Object,
  tagList: Array,
  schoolList: Array
}, { strict: false, timestamps: true })

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project
