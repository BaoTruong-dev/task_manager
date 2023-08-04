import { userModel } from "../models/user.model.js";
import { HttpResponse } from "../utils/httpResponse.js";
const userController = {
    async getMe(req, res, next) {
        const uid = req.uid;
        const result = await userModel.getMe(uid);
        if (!result) {
            return next('Not found');
        }
        delete result.password;
        return HttpResponse.get(res, result);
    },
    async getList(req, res, next) {
        const query = req.query;
        let result = await userModel.getList(query);
        return HttpResponse.get(res, result);
    },
    async login(req, res, next) {
        const data = req.body;
        let result = await userModel.login(data);
        if (!result) {
            return next('Email or Password is wrong!');
        }
        return HttpResponse.success(res, result);
    },
    async register(req, res, next) {
        const data = req.body;
        let result = await userModel.register(data);
        if (result) {
            return HttpResponse.created(res);
        }
        return HttpResponse.error(res, 'Email\'s already existed!');
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
    async forgotPassword(req, res, next) {
        const result = await userModel.forgotPassword(req.body);
        if (!result) {
            return next('Email isn\'t existed');
        }
        return HttpResponse.success(res);
    },
    async resetPassword(req, res, next) {
        const result = await userModel.resetPassword(req.body);
        if (!result) {
            return next('Code is wrong!');
        }
        return HttpResponse.success(res);
    },



};

export default userController;