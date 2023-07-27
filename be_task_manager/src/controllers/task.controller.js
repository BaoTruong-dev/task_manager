import { createFs, readFs } from "../utils/fsFile.js";
import { HttpResponse } from "../utils/httpResponse.js";
import { randomUUID } from 'crypto';
import { taskModel } from "../models/task.model.js";
const taskList = readFs('tasks');
const userList = readFs('user');
const categoryList = readFs('category');
const taskController = {
    get(req, res) {
        return HttpResponse.get(res, taskList);
    },
    getById(req, res) {
        const { id } = req.params;
        const data = taskList.find(e => e.id === id);
        if (!data) {
            return HttpResponse.error(res);
        }
        const cloneData = JSON.parse(JSON.stringify(data));
        const userDetail = userList.filter(e => cloneData.users.includes(e.id));
        const categoryDetail = categoryList.find(e => e.id === cloneData.category);
        cloneData.category = categoryDetail;
        cloneData.users = userDetail;
        return HttpResponse.get(res, cloneData);
    },
    updateById(req, res) {
        const { id } = req.params;
        const { title, description, category, users } = req.body;
        const data = taskList.find(e => e.id === id);
        if (!data) {
            return HttpResponse.error(res);
        }
        data.title = title;
        data.description = description;
        createFs('tasks', taskList);
        return HttpResponse.updated(res);
    }
    ,
    deleteById(req, res) {
        const { id } = req.params;
        const data = taskList.findIndex(e => e.id === id);
        if (data < 0) {
            return HttpResponse.error(res);
        }
        taskList.splice(data, 1);
        createFs('tasks', taskList);
        return HttpResponse.delete(res);
    },
    async post(req, res) {
        const data = req.body;
        let result = await taskModel.create(data);
        console.log(result);
        return HttpResponse.created(res);
    }
};

export default taskController;