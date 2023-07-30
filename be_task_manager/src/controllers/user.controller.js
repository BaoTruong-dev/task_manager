import { userModel } from "../models/user.model.js";
import { createFs, readFs } from "../utils/fsFile.js";
import { HttpResponse } from "../utils/httpResponse.js";
import { randomUUID } from 'crypto';
const userList = readFs('user');
const userController = {
    async get(req, res) {
        const result = await userModel.get();
        return HttpResponse.get(res, result);
    },
    getById(req, res) {
        const { id } = req.params;
        const data = userList.find(e => e.id === id);
        if (!data) {
            return HttpResponse.error(res);
        }
        return HttpResponse.get(res, data);
    },
    async post(req, res) {
        await userModel.create(req.body);
        return HttpResponse.created(res);
    },
    updateById(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const data = userList.find(e => e.id === id);
        if (!data) {
            return HttpResponse.error(res);
        }
        data.name = name;
        createFs('user', userList);
        return HttpResponse.updated(res);
    }
    ,
    deleteById(req, res) {
        const { id } = req.params;
        const data = userList.findIndex(e => e.id === id);
        if (data < 0) {
            return HttpResponse.error(res);
        }
        userList.splice(data, 1);
        createFs('user', userList);
        return HttpResponse.delete(res);
    },

};

export default userController;