var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const notesInitPath = join(__dirname, './notesInit.json');
const notesPath = join(__dirname, './notes.json');
const initNotes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fs.readFile(notesInitPath);
        yield fs.writeFile(notesPath, data);
    }
    catch (error) {
        throw console.error();
    }
});
export default initNotes;
