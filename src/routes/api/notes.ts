import express = require('express')
const noteAddSchema = require('../../joiSchemas/noteAdd')
const noteUpdateSchema = require('../../joiSchemas/noteUpdate')
const controllerWrapper = require('../../services/controllerWrapper')
const validation = require('../../services/validation')
const validationId = require('../../services/validationId')
const notesController = require('../../services/controllers/notes')

const router = express.Router()

router.get('/', controllerWrapper(notesController.ctrListNotes))

router.get(
  '/:id',
  validationId(),
  controllerWrapper(notesController.ctrGetNoteById)
)

router.post(
  '/',
  validation(noteAddSchema),
  controllerWrapper(notesController.ctrAddNote)
)

router.delete(
  '/:id',
  validationId(),

  controllerWrapper(notesController.ctrRemoveNoteById)
)

router.patch(
  '/:id',

  [(validationId(), validation(noteUpdateSchema))],
  controllerWrapper(notesController.ctrUpdateNoteById)
)

module.exports = router
