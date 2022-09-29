"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const noteAddSchema = Joi.object({
    id: Joi.string().min(4).required(),
    name: Joi.string().max(30).required(),
    created: Joi.date().required(),
    category: Joi.string()
        .allow('Task', 'Idea', 'Quote', 'Random Thought')
        .required(),
    content: Joi.string().max(300).required(),
    archived: Joi.boolean().required(),
});
module.exports = noteAddSchema;
