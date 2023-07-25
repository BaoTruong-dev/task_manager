import express from 'express';
import { config } from 'dotenv';
import taskRouter from './routers/task.router.js';
import { handleCatchError } from './middlewares/error.middleware.js';
config();
const app = express();

const PORT = process.env.PORT || 800;

app.use(express.json());

app.use('/tasks', taskRouter);
app.use(handleCatchError);
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});