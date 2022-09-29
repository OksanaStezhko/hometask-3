"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const notesPath = path.join(__dirname, './notes.json');
const notesInit_json_1 = __importDefault(require("../repositories/notesInit.json"));
const initNotes = () => {
    try {
        fs.writeFileSync(notesPath, JSON.stringify(notesInit_json_1.default));
    }
    catch (error) {
        throw console.error();
    }
};
module.exports = initNotes;
