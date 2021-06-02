const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TransactionSchema = new Schema({
  id: String,
  title: String,
  cityPinYin: String,
  cellName: String,
  amount: Number,
  shi: Number,
  ting: Number,
  wei: Number,
  chu: Number,
  area: Number,
  onFloor: Number,
  allFloor: Number,
  floor: String,
  hasElevator: Boolean,
  direction: String,
  propertyYear: Number,
  buildingType: String,
  buildingStructure: String,
  tradeDate: Date,
  price: Number,
  decoration: String,
  source: String,
  geo: [Number]

}, { strict: false, timestamps: true })

const Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = Transaction
