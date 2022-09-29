import express = require('express')
const { noteIdSchema } = require('../joiSchemas')
const sendBadRequest = require('../../helpers/sendBadRequest')
const { isEmpty } = require('../helpers')
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
      const err = isEmpty(req.body) ? 'missing fields:  ' : '' + error.message

      sendBadRequest(req, res, error)
      return
    }
    next()
  }
}

module.exports = validation
