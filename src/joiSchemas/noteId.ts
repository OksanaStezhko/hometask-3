import Joi = require('joi')

const noteIdSchema = Joi.object({
  id: Joi.string().min(4).required(),
})

module.exports = noteIdSchema
