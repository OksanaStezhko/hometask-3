import express = require('express')

const { noteAddSchema, noteUpdateSchema } = require('../../joiSchemas')
const {
  controllerWrapper,
  validation,
  validationId,
  notesController,
} = require('../../services')

const router = express.Router()

router.get('/', controllerWrapper(notesController.listNotes))

router.get(
  '/:id',
  validationId(),
  controllerWrapper(notesController.getNoteById)
)

router.post(
  '/',
  validation(noteAddSchema),
  controllerWrapper(notesController.addNote)
)

router.delete(
  '/:id',
  validationId(),

  controllerWrapper(notesController.removeNoteById)
)

router.patch(
  '/:id',

  [(validationId(), validation(noteUpdateSchema))],
  controllerWrapper(notesController.updateNoteById)
)

module.exports = router
