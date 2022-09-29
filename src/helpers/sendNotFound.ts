import express = require('express')
const sendNotFound = (res: express.Response, id: StaticRange, status = 404) => {
  res.status(status).json({
    status: 'error',
    code: status,
    message: `Note with id=${id} not found!`,
  })
}

module.exports = { sendNotFound }
