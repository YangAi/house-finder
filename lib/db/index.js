require('../env')
const dotenv = require('dotenv')
dotenv.config({ path: '../../.env' })
dotenv.config({ path: '../../../.env' })
const mongoose = require('mongoose')
const district = require('./model/district')
const area = require('./model/area')
const project = require('./model/project')
const unit = require('./model/unit')
const transaction = require('./model/transaction')

mongoose.connect(process.env.VUE_APP_MONDO_DB_PATH, {
  auth: { authSource: 'admin' },
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

module.exports = {
  district,
  area,
  project,
  unit,
  transaction
}
