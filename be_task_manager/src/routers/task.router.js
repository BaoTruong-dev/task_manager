import { Router } from 'express';
import taskController from '../controllers/task.controller.js';
import { wrapperErrorHandle } from '../middlewares/error.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { taskSchemaCreated, taskSchemaUpdate } from '../schema/task.schema..js';

const taskRouter = Router();

taskRouter.get('', wrapperErrorHandle(taskController.get));
taskRouter.get('/:id', wrapperErrorHandle(taskController.getById));

taskRouter.post('', validate(taskSchemaCreated), wrapperErrorHandle(taskController.create));
taskRouter.patch('/:id', validate(taskSchemaUpdate), wrapperErrorHandle(taskController.updateById));
taskRouter.delete('/:id', wrapperErrorHandle(taskController.deleteById));

export default taskRouter

