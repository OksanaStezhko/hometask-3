var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
import { promises as fs } from 'fs'
import { join } from 'path'
import { v4 } from 'uuid'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const notesPath = join(__dirname, './notes.json')
const readNotes = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const data = yield fs.readFile(notesPath)
      const notesList = JSON.parse(data.toString('utf8'))
      return notesList
    } catch (error) {
      throw console.error()
    }
  })
const listNotes = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      return yield readNotes()
    } catch (error) {
      throw console.error()
    }
  })
const getNoteById = (noteId) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const notesList = yield readNotes()
      const note = notesList.find((note) => note.id === noteId)
      if (!note) {
        throw Error(`Note with id= ${noteId} not found`)
      }
      return note
    } catch (error) {
      console.error()
    }
  })
const removeNoteById = (noteId) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const notesList = yield readNotes()
      const noteForRemove = notesList.find((note) => note.id === noteId)
      if (!noteForRemove) {
        throw Error(`Note with id= ${noteId} not found`)
      }
      const notesListAfterRemove = notesList.filter(
        (note) => note.id !== noteId
      )
      yield fs.writeFile(notesPath, JSON.stringify(notesListAfterRemove))
      return noteForRemove
    } catch (error) {
      console.error()
    }
  })
const addNote = (body) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const notesList = yield readNotes()
      const newNote = Object.assign({ id: v4() }, body)
      const newNotesList = [...notesList, newNote]
      yield fs.writeFile(notesPath, JSON.stringify(newNotesList))
      return newNote
    } catch (error) {
      console.error()
    }
  })
const updateNoteById = (noteId, body) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const notesList = yield readNotes()
      const noteForUpdate = notesList.find((note) => note.id === noteId)
      if (!noteForUpdate) {
        throw Error(`Note with id= ${noteId} not found`)
      }
      const updatedNote = Object.assign(Object.assign({}, noteForUpdate), body)
      const updatedNotesList = notesList.map((note) => {
        if (note.id === noteId) {
          return updatedNote
        }
        return note
      })
      yield fs.writeFile(notesPath, JSON.stringify(updatedNotesList))
      return updatedNote
    } catch (error) {
      console.error()
    }
  })
export default {
  listNotes,
  getNoteById,
  removeNoteById,
  addNote,
  updateNoteById,
}
