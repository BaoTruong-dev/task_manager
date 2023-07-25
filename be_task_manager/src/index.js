import express from 'express';
import { config } from 'dotenv';
import taskRouter from './routers/task.router.js';
import { handleCatchError } from './middlewares/error.middleware.js';
import categoryRouter from './routers/category.router.js';
import userRouter from './routers/user.router.js';
import { fileRouter } from './routers/file.router.js';
config();
const app = express();

const PORT = process.env.PORT || 800;
app.use('/upload', express.static('./upload/image'));
app.use(express.json());
app.use('/tasks', taskRouter);
app.use('/category', categoryRouter);
app.use('/users', userRouter);
app.use('/file', fileRouter);



app.use('*', (req, res, next) => {
    next({ message: 'Not found' });
});
app.use(handleCatchError);
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});