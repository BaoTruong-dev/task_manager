import { categoryModel } from "../models/category.model.js";
import { HttpResponse } from "../utils/httpResponse.js";
const categoryController = {
    async get(req, res) {
        const result = await categoryModel.get();
        return HttpResponse.get(res, result);
    },

    async getById(req, res) {
        const { id } = req.params;
        const result = await categoryModel.getById(id);
        if (!result) {
            return next('Not found');
        }
        return HttpResponse.get(res, result);
    },
    async create(req, res) {
        const data = req.body;
        await categoryModel.create(data);
        return HttpResponse.created(res);
    },
    async updateById(req, res, next) {
        const { id } = req.params;
        const data = req.body;
        const result = await categoryModel.updateById(id, data);
        if (!result) {
            return next('Not found');
        }
        return HttpResponse.updated(res);
    }
    ,
    async deleteById(req, res, next) {
        const { id } = req.params;
        let result = await categoryModel.deleteById(id);
        if (!result) {
            return next('Not found');
        }
        return HttpResponse.delete(res);
    },

};

export default categoryController;