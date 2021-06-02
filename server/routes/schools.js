const { Router } = require('express')
const $db = require('../../lib/db')
const { apiResponse } = require('../utils/response')

const router = Router()

router.get('/schools', async (req, res, next) => {
  try {
    const output = await $db.project.find().limit(10)
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})
router.get('/schools/:id', async (req, res, next) => {
  try {
    const output = await $db.project.findOne({ _id: req.params.id })
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})

module.exports = router
