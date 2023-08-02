import { Router } from 'express';
import categoryController from '../controllers/category.controller.js';
import { wrapperErrorHandle } from '../middlewares/error.middleware.js';
import { validateMiddleware } from '../middlewares/validate.middleware.js';
import { categorySchemaCreated } from '../schema/category.schema.js';

const categoryRouter = Router();

categoryRouter.get('', wrapperErrorHandle(categoryController.get));
categoryRouter.get('/:id', wrapperErrorHandle(categoryController.getById));
categoryRouter.post('', validateMiddleware(categorySchemaCreated), wrapperErrorHandle(categoryController.create));
categoryRouter.patch('/:id', validateMiddleware(categorySchemaCreated), wrapperErrorHandle(categoryController.updateById));
categoryRouter.delete('/:id', wrapperErrorHandle(categoryController.deleteById));



export default categoryRouter

