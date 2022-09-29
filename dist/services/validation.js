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
import { isEmpty } from '../helpers/index.js';
const validation = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { error } = schema.validate(req.body);
        if (error) {
            const err = isEmpty(req.body) ? 'missing fields:  ' : '' + error.message;
            return next(new BadRequest(err));
        }
        next();
    });
};
export default validation;
