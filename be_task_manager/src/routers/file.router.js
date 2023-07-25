import { Router } from "express";
import { fileController } from "../controllers/file.controller";
import { wrapperErrorHandle } from "../middlewares/error.middleware";
import { upload } from "../middlewares/file.middleware";

export const fileRouter = Router();

fileRouter.post('/avatar', upload.single('avatar'), wrapperErrorHandle(fileController.avatar));