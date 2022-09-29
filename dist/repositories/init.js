"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const notesInitPath = path.join(__dirname, './notesInit.json');
const notesPath = path.join(__dirname, './notes.json');
// const initNotes = async () => {
//   try {
//     // const data = await fs.readFile(notesInitPath)
//     // await fs.writeFile(notesPath, data)
//   } catch (error) {
//     throw console.error()
//   }
// }
const initNotes = () => {
    try {
        const data = fs.readFileSync(notesInitPath);
        fs.writeFileSync(notesPath, data);
    }
    catch (error) {
        throw console.error();
    }
};
module.exports = initNotes;
