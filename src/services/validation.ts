import express = require('express')
const sendBadRequest = require('../helpers/sendBadRequest')
type TSchema = {
  validate: Function
}
const validation = (schema: TSchema) => {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { error } = schema.validate(req.body)
    if (error) {
      sendBadRequest(req, res, error)
      return
    }
    next()
  }
}

module.exports = validation
