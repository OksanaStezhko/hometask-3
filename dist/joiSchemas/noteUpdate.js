import Joi from 'joi';
const nodeUpdateSchema = Joi.object({
    name: Joi.string().max(30).optional(),
    created: Joi.date().optional(),
    category: Joi.string()
        .valid('Task', 'Idea', 'Quote', 'Random Thought')
        .optional(),
    content: Joi.string().max(300).optional(),
    archived: Joi.boolean().optional(),
});
export default nodeUpdateSchema;
