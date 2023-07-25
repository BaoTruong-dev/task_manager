import { Router } from 'express';
import taskController from '../controllers/task.controller.js';
import { wrapperErrorHandle } from '../middlewares/error.middleware.js';

const taskRouter = Router();

taskRouter.get('', wrapperErrorHandle(taskController.get));
taskRouter.post('', wrapperErrorHandle(taskController.post));

export default taskRouter

