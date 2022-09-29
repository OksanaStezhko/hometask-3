const express = require('express')
const controllerWrapper = require('../../services/controllerWrapper')
const reportsController = require('../../services/controllers/reports')

const router = express.Router()

router.get('/', controllerWrapper(reportsController.ctrReportStats))

module.exports = router
