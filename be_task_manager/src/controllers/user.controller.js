import { createFs, readFs } from "../utils/fsFile.js";
import { HttpResponse } from "../utils/httpResponse.js";
import { randomUUID } from 'crypto';
const userList = readFs('user');
const userController = {
    get(req, res) {
        return HttpResponse.get(res, userList);
    },
    getById(req, res) {
        const { id } = req.params;
        const data = userList.find(e => e.id === id);
        if (!data) {
            return HttpResponse.error(res);
        }
        return HttpResponse.get(res, data);
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
    post(req, res) {
        const { name } = req.body;
        let id = randomUUID();
        userList.push({
            id,
            name
        });
        createFs('user', userList);
        return HttpResponse.created(res);
    }
};

export default userController;