import fs = require('fs')
import path = require('path')
const notesInitPath = path.join(__dirname, './notesInit.json')
const notesPath = path.join(__dirname, './notes.json')
import notesArray from '../repositories/notes.json'
import notesInitArray from '../repositories/notesInit.json'

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
    const data = fs.readFileSync(notesInitPath)
    fs.writeFileSync(notesPath, data)
  } catch (error) {
    throw console.error()
  }
}

module.exports = initNotes
