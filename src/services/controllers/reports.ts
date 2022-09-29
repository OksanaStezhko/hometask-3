import express = require('express')
const operationsReports = require('../../repositories/operationsReports')
const sendSuccess = require('../../helpers/sendSuccess')

const ctrReportStats = async (req: express.Request, res: express.Response) => {
  const result = await operationsReports.reportStats()
  sendSuccess(res, { result })
}

module.exports = {
  ctrReportStats,
}
