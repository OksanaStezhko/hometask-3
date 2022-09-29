import express = require('express')
const sendSuccess = require('../../helpers/sendSuccess')
const sendNotFound = require('../../helpers/sendNotFound')

const { operationsNotes } = require('../../repositories/operationsNotes')

const ctrListNotes = async (req: express.Request, res: express.Response) => {
  const result = await operationsNotes.listNotes()
  sendSuccess(res, { result })
}

const ctrGetNoteById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params
  const result = await operationsNotes.getNoteById(id)
  if (!result) {
    sendNotFound(res, id)
    return
  }
  sendSuccess(res, { result })
}

const ctrAddNote = async (req: express.Request, res: express.Response) => {
  const result = await operationsNotes.addNote(req.body)
  sendSuccess(res, { result }, 201)
}

const ctrRemoveNoteById = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { id } = req.params
  const result = await operationsNotes.removeNoteById(id)
  if (!result) {
    sendNotFound(res, id)
    return
  }
  sendSuccess(res, { message: 'Note deleted' })
}

const ctrUpdateNoteById = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params

  const result = await operationsNotes.updateNoteById(id, req.body)
  if (!result) {
    sendNotFound(res, id)
    return
  }
  sendSuccess(res, { result })
}

module.exports = {
  ctrListNotes,
  ctrGetNoteById,
  ctrAddNote,
  ctrUpdateNoteById,
  ctrRemoveNoteById,
}
