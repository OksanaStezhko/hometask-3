import express = require('express')
const sendSuccess = (
  res: express.Response,
  data: express.Request,
  status = 200
) => {
  res.status(status).json({
    status: 'success',
    code: status,
    data,
  })
}

module.exports = { sendSuccess }
