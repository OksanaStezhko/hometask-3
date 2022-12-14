const fs = require('fs').promises
const path = require('path')
const { v4 } = require('uuid')
const notesPath = path.join(__dirname, './notes.json')
type TNote = {
  id: string
}

const readNotes = async () => {
  try {
    const data = await fs.readFile(notesPath)
    const notesList = JSON.parse(data.toString('utf8'))

    return notesList
  } catch (error) {
    throw console.error()
  }
}

const listNotes = async () => {
  try {
    return await readNotes()
  } catch (error) {
    throw console.error()
  }
}

const getNoteById = async (noteId: string) => {
  try {
    const notesList = await readNotes()
    const note = notesList.find((note: TNote) => note.id === noteId)
    if (!note) {
      throw Error(`Note with id= ${noteId} not found`)
    }

    return note
  } catch (error) {
    console.error()
  }
}

const removeNoteById = async (noteId: string) => {
  try {
    const notesList = await readNotes()
    const noteForRemove = notesList.find((note: TNote) => note.id === noteId)
    if (!noteForRemove) {
      throw Error(`Note with id= ${noteId} not found`)
    }
    const notesListAfterRemove = notesList.filter(
      (note: TNote) => note.id !== noteId
    )
    await fs.writeFile(notesPath, JSON.stringify(notesListAfterRemove))
    return noteForRemove
  } catch (error) {
    console.error()
  }
}

const addNote = async (body: Object) => {
  try {
    const notesList = await readNotes()
    const newNote = { id: v4(), ...body }
    const newNotesList = [...notesList, newNote]
    await fs.writeFile(notesPath, JSON.stringify(newNotesList))
    return newNote
  } catch (error) {
    console.error()
  }
}

const updateNoteById = async (noteId: string, body: Object) => {
  try {
    const notesList = await readNotes()
    const noteForUpdate = notesList.find((note: TNote) => note.id === noteId)
    if (!noteForUpdate) {
      throw Error(`Note with id= ${noteId} not found`)
    }
    const updatedNote = { ...noteForUpdate, ...body }
    const updatedNotesList = notesList.map((note: TNote) => {
      if (note.id === noteId) {
        return updatedNote
      }
      return note
    })

    await fs.writeFile(notesPath, JSON.stringify(updatedNotesList))
    return updatedNote
  } catch (error) {
    console.error()
  }
}

module.exports = {
  listNotes,
  getNoteById,
  removeNoteById,
  addNote,
  updateNoteById,
}
