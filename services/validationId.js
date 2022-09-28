const { BadRequest } = require('http-errors')
const { noteIdSchema } = require('../joiSchemas')

const validationId = () => {
  return async (req, res, next) => {
    const { error } = noteIdSchema.validate(req.params)
    if (error) {
      return next(new BadRequest(error.message))
    }
    next()
  }
}

module.exports = validationId
