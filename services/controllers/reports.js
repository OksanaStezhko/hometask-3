const { sendSuccess } = require('../../helpers')

const { operationsReports } = require('../../repositories/')

const reportStats = async (req, res) => {
  const result = await operationsReports.reportStats()
  sendSuccess(res, { result })
}

module.exports = {
  reportStats,
}
