import express = require('express')
const { operationsReports } = require('../../repositories/operationsReports')
const sendSuccess = require('../../helpers/sendSuccess')

const reportStats = async (req: express.Request, res: express.Response) => {
  const result = await operationsReports.reportStats()
  sendSuccess(res, { result })
}

module.exports = {
  reportStats,
}
