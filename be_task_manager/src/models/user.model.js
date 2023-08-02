import { ObjectId } from "mongodb";
import { db } from "../config/db.config";
import crypto from 'crypto';
import { hashPassword } from "../utils/crypto";
import { Token } from "./token.model";
class UserModel {
    constructor() {
        this.collection = db.collection('users');
    }
    async getList(query) {
        return await this.collection.find().toArray();
    }
    async register(data) {
        let existedEmail = await this.collection.findOne({ email: data.email });
        if (!existedEmail) {
            let afterHashedPassword = hashPassword(data.password);
            return await this.collection.insertOne({
                ...data,
                password: afterHashedPassword
            });
        }
        return undefined;
    }
    async login(data) {
        let { email, password } = data;
        let afterHashedPassword = hashPassword(password);
        const user = await this.collection.findOne({ email, password: afterHashedPassword });
        if (user) {
            const refresh_token = Token.refreshToken({ uid: 1 });
            const access_token = Token.accessToken({ uid: user._id });
            return {
                access_token,
                refresh_token
            };
        }
        return null;
    }
    async getMe(id) {
        return await this.collection.findOne({ _id: new ObjectId(id) });
    }
    async updateById(id, value) {
        let { matchedCount } = await this.collection.updateOne({ _id: new ObjectId(id) }, {
            $set: value
        });
        if (!matchedCount) {
            return undefined;
        }
        return true;
    }
}

export const userModel = new UserModel();