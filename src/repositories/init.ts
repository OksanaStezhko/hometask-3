import fs = require('fs')
import path = require('path')

const notesPath = path.join(__dirname, './notes.json')
import notesInitArray from '../repositories/notesInit.json'

const initNotes = () => {
  try {
    fs.writeFileSync(notesPath, JSON.stringify(notesInitArray))
  } catch (error) {
    throw console.error()
  }
}

module.exports = initNotes
