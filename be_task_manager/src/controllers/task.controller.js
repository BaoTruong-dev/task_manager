import { createFs, readFs } from "../utils/fsFile.js";
import { HttpResponse } from "../utils/httpResponse.js";
import { randomUUID } from 'crypto';
import { taskModel } from "../models/task.model.js";
import { log } from "console";

const taskController = {
    async get(req, res) {
        const result = await taskModel.get();
        return HttpResponse.get(res, result);
    },
    async getById(req, res) {
        const { id } = req.params;
        const result = await taskModel.getById(id);
        return HttpResponse.get(res, result);
    },
    async create(req, res) {
        const data = req.body;
        await taskModel.create(data);
        return HttpResponse.created(res);
    },
    async updateById(req, res, next) {
        const { id } = req.params;
        const data = req.body;

        const result = await taskModel.updateById(id, data);

        if (!result.matchedCount) {
            return next('Not found');
        }
        return HttpResponse.updated(res);
    }
    ,
    async deleteById(req, res, next) {
        const { id } = req.params;
        let result = await taskModel.deleteById(id);
        if (!result) {
            return next('Not found');
        }
        return HttpResponse.delete(res);
    },

};

export default taskController;