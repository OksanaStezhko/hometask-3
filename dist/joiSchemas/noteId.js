import Joi from 'joi';
const noteIdSchema = Joi.object({
    id: Joi.string().min(4).required(),
});
export default noteIdSchema;
