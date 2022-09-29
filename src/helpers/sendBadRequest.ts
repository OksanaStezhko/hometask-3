import express = require('express')
const { isEmpty } = require('./isEmpty')

const sendBadRequest = (
  req: express.Request,
  res: express.Response,
  error: any
) => {
  const err = isEmpty(req.body) ? 'missing fields: ' : ''

  res.status(400).json({
    status: 'error',
    code: 400,
    message: err + error.message,
  })
}

module.exports = { sendBadRequest }
