import { categoryModel } from "../models/category.model.js";
import { createFs, readFs } from "../utils/fsFile.js";
import { HttpResponse } from "../utils/httpResponse.js";
import { randomUUID } from 'crypto';
const categoryList = readFs('category');
const categoryController = {
    async get(req, res) {
        const result = await categoryModel.get();
        return HttpResponse.get(res, result);
    },
    getById(req, res) {
        const { id } = req.params;
        const data = categoryList.find(e => e.id === id);
        if (!data) {
            return HttpResponse.error(res);
        }
        return HttpResponse.get(res, data);
    },
    async create(req, res) {
        const data = req.body;
        await categoryModel.create(data);
        return HttpResponse.created(res);
    },
    updateById(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const data = categoryList.find(e => e.id === id);
        if (!data) {
            return HttpResponse.error(res);
        }
        data.name = name;
        createFs('category', categoryList);
        return HttpResponse.updated(res);
    }
    ,
    deleteById(req, res) {
        const { id } = req.params;
        const data = categoryList.findIndex(e => e.id === id);
        if (data < 0) {
            return HttpResponse.error(res);
        }
        categoryList.splice(data, 1);
        createFs('category', categoryList);
        return HttpResponse.delete(res);
    },

};

export default categoryController;