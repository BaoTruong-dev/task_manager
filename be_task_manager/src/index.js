import { config } from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
// import { connectDb } from './config/db.config.js';
import { handleCatchError, NotMatchedRoute } from './middlewares/error.middleware.js';
import { loggerMiddleware } from './middlewares/log.middleware.js';
import categoryRouter from './routers/category.router.js';
import { fileRouter } from './routers/file.router.js';
import taskRouter from './routers/task.router.js';
import userRouter from './routers/user.router.js';
import './config/db.config';
config();
const app = express();
const PORT = process.env.PORT || 800;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(loggerMiddleware);
app.use(express.json());
app.use(helmet());
app.use('/tasks', taskRouter);
app.use('/category', categoryRouter);
app.use('/users', userRouter);
app.use('/file', fileRouter);

app.use('/upload', express.static(join(__dirname, 'upload')));
app.use(NotMatchedRoute);
app.use(handleCatchError);


app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});