import { createFs, readFs } from "../utils/fsFile.js";

const taskList = readFs('tasks');

const taskController = {
    get(req, res) {
        throw ('Loi roi');
        return res.status(200).json({
            message: 'Get task successfully',
            data: {
                taskList
            }
        });
    },
    post(req, res) {
        const data = req.body;
        taskList.push(data);
        createFs('tasks', taskList);
        return res.status(200).json({
            message: 'Create task successfully!'
        });
    }
};

export default taskController;