import fs = require('fs/promises')
import path = require('path')
const notesInitPath = path.join(__dirname, './notesInit.json')
const notesPath = path.join(__dirname, './notes.json')

const initNotes = async () => {
  try {
    const data = await fs.readFile(notesInitPath)
    await fs.writeFile(notesPath, data)
  } catch (error) {
    throw console.error()
  }
}

module.exports = {
  initNotes,
}
