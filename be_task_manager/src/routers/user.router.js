import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import { wrapperErrorHandle } from '../middlewares/error.middleware.js';
import { jwtMiddleware } from '../middlewares/jwt.middleware.js';
import { validateMiddleware } from '../middlewares/validate.middleware.js';
import { userSchemaForgotPassword, userSchemaLogin, userSchemaRegister, userSchemaResetPassword } from '../schema/user.schema.js';

const userRouter = Router();
userRouter.get('', wrapperErrorHandle(userController.getList));
userRouter.get('/get-me', jwtMiddleware, wrapperErrorHandle(userController.getMe));
userRouter.post('/register', validateMiddleware(userSchemaRegister), wrapperErrorHandle(userController.register));
userRouter.post('/forgot-password', validateMiddleware(userSchemaForgotPassword), wrapperErrorHandle(userController.forgotPassword));
userRouter.post('/reset-password', validateMiddleware(userSchemaResetPassword), wrapperErrorHandle(userController.resetPassword));


userRouter.post('/login', validateMiddleware(userSchemaLogin), wrapperErrorHandle(userController.login));
userRouter.patch('/update-info', wrapperErrorHandle(userController.updateById));



export default userRouter

