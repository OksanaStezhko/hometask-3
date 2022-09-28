const express = require('express')

const { controllerWrapper, reportsController } = require('../../services')

const router = express.Router()

router.get('/', controllerWrapper(reportsController.reportStats))

module.exports = router
