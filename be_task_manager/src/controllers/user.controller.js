import { userModel } from "../models/user.model.js";
import { HttpResponse } from "../utils/httpResponse.js";
const userController = {
    async get(req, res) {
        const result = await userModel.get();
        return HttpResponse.get(res, result);
    },
    async getById(req, res, next) {
        const { id } = req.params;
        const result = await userModel.getById(id);
        if (!result) {
            return next('Not found');
        }
        return HttpResponse.get(res, result);
    },
    async create(req, res) {
        const data = req.body;
        await userModel.create(data);
        return HttpResponse.created(res);
    },
    async updateById(req, res, next) {
        const { id } = req.params;
        const data = req.body;

        const result = await userModel.updateById(id, data);

        if (!result) {
            return next('Not found');
        }
        return HttpResponse.updated(res);
    }
    ,
    async deleteById(req, res, next) {
        const { id } = req.params;
        let result = await userModel.deleteById(id);
        if (!result) {
            return next('Not found');
        }
        return HttpResponse.delete(res);
    },

};

export default userController;