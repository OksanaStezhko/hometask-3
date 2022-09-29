import express = require('express')
const noteIdSchema = require('../joiSchemas/noteId')
const sendBadRequest = require('../helpers/sendBadRequest')

const validationId = () => {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { error } = noteIdSchema.validate(req.params)
    if (error) {
      sendBadRequest(req, res, error)
      return
    }
    next()
  }
}

module.exports = validationId
