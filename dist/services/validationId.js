var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pkg from 'http-errors';
const { BadRequest } = pkg;
import noteIdSchema from '../joiSchemas/noteId.js';
const validationId = () => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { error } = noteIdSchema.validate(req.params);
        if (error) {
            return next(new BadRequest(error.message));
        }
        next();
    });
};
export default validationId;
