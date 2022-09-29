import { Router } from 'express';
import controllerWrapper from '../../services/controllerWrapper.js';
import * as reportsController from '../../services/controllers/reports.js';
const router = Router();
router.get('/', controllerWrapper(reportsController.reportStats));
export default router;
