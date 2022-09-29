"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendSuccess = require('../../helpers/sendSuccess');
const sendNotFound = require('../../helpers/sendNotFound');
const operationsNotes = require('../../repositories/operationsNotes');
const ctrListNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield operationsNotes.listNotes();
    sendSuccess(res, { result });
});
const ctrGetNoteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield operationsNotes.getNoteById(id);
    if (!result) {
        sendNotFound(res, id);
        return;
    }
    sendSuccess(res, { result });
});
const ctrAddNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield operationsNotes.addNote(req.body);
    sendSuccess(res, { result }, 201);
});
const ctrRemoveNoteById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield operationsNotes.removeNoteById(id);
    if (!result) {
        sendNotFound(res, id);
        return;
    }
    sendSuccess(res, { message: 'Note deleted' });
});
const ctrUpdateNoteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield operationsNotes.updateNoteById(id, req.body);
    if (!result) {
        sendNotFound(res, id);
        return;
    }
    sendSuccess(res, { result });
});
module.exports = {
    ctrListNotes,
    ctrGetNoteById,
    ctrAddNote,
    ctrUpdateNoteById,
    ctrRemoveNoteById,
};
