const { sendSuccess, sendNotFound } = require('../../helpers')

const { operationsNotes } = require('../../repositories')

const listNotes = async (req, res) => {
  const result = await operationsNotes.listNotes()
  sendSuccess(res, { result })
}

const getNoteById = async (req, res) => {
  const { id } = req.params
  const result = await operationsNotes.getNoteById(id)
  if (!result) {
    sendNotFound(res, id)
    return
  }
  sendSuccess(res, { result })
}

const addNote = async (req, res) => {
  const result = await operationsNotes.addNote(req.body)
  sendSuccess(res, { result }, 201)
}

const removeNoteById = async (req, res, next) => {
  const { id } = req.params
  const result = await operationsNotes.removeNoteById(id)
  if (!result) {
    sendNotFound(res, id)
    return
  }
  sendSuccess(res, { message: 'Note deleted' })
}

const updateNoteById = async (req, res) => {
  const { id } = req.params

  const result = await operationsNotes.updateNoteById(id, req.body)
  if (!result) {
    sendNotFound(res, id)
    return
  }
  sendSuccess(res, { result })
}

module.exports = {
  listNotes,
  getNoteById,
  addNote,
  updateNoteById,
  removeNoteById,
}
