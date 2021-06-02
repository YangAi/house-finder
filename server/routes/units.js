const { Router } = require('express')
const $db = require('../../lib/db')
const { apiResponse } = require('../utils/response')

const router = Router()

router.get('/units', async (req, res, next) => {
  try {
    const output = await $db.unit.find().limit(10)
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})
router.get('/units/project/:projectName', async (req, res, next) => {
  try {
    const output = await $db.unit.find({ houseProjectName: req.params.projectName })
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})
router.get('/units/:id', async (req, res, next) => {
  try {
    const output = await $db.unit.findOne({ _id: req.params.id })
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})

module.exports = router
