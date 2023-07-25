import { createFs, readFs } from "../utils/fsFile.js";
import { HttpResponse } from "../utils/httpResponse.js";
import { randomUUID } from 'crypto';
const categoryList = readFs('category');
const categoryController = {
    get(req, res) {
        return HttpResponse.get(res, categoryList);
    },
    getById(req, res) {
        const { id } = req.params;
        const data = categoryList.find(e => e.id === id);
        if (!data) {
            return HttpResponse.error(res);
        }
        return HttpResponse.get(res, data);
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
    post(req, res) {
        const { name } = req.body;
        let id = randomUUID();
        categoryList.push({
            id,
            name
        });
        createFs('category', categoryList);
        return HttpResponse.created(res);
    }
};

export default categoryController;