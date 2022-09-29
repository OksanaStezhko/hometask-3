import express from 'express'
const controllerWrapper = (ctrl: Function) => {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      await ctrl(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = controllerWrapper
