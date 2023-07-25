import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import { wrapperErrorHandle } from '../middlewares/error.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { userSchemaCreated } from '../schema/user.schema.js';

const userRouter = Router();

userRouter.get('', wrapperErrorHandle(userController.get));
userRouter.get('/:id', wrapperErrorHandle(userController.getById));
userRouter.post('', validate(userSchemaCreated), wrapperErrorHandle(userController.post));
userRouter.patch('/:id', validate(userSchemaCreated), wrapperErrorHandle(userController.updateById));
userRouter.delete('/:id', wrapperErrorHandle(userController.deleteById));



export default userRouter

