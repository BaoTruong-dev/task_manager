import { ObjectId } from "mongodb";
import { db } from "../config/db.config";
import { sendMail } from "../config/mail.config";
import { generateRandomSalt, hashPassword } from "../utils/crypto";
import { paginatePlugin } from "../utils/paginate.plugin";
import { Token } from "./token.model";
class UserModel {
    constructor() {
        this.collection = db.collection('users');
        this.pipeline = [
            {
                $project: {
                    password: 0
                }
            }
        ];
    }
    async getList(query) {
        return await paginatePlugin(this.collection, query, this.pipeline);
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
        console.log(afterHashedPassword, '----');
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
    async forgotPassword(data) {
        const { email, url } = data;
        const codeForgotPassword = generateRandomSalt(64);
        const { value } = await this.collection.findOneAndUpdate({ email }, {
            $set: {
                codeForgotPassword
            }
        });
        if (value) {
            let newUrl = `${url}?code=${codeForgotPassword}`;
            return await sendMail({ email, url: newUrl });
        }
        return null;
    }
    async resetPassword(data) {
        const { code: codeForgotPassword, password } = data;
        const encryptPassword = hashPassword(password);
        const { value } = await this.collection.findOneAndUpdate({ codeForgotPassword }, {
            $unset: {
                codeForgotPassword: ""
            },
            $set: {
                password: encryptPassword
            }
        });
        if (!value) {
            return null;
        }
        return true;
    }
    async createIndex() {
        await this.collection.createIndex({ name: 'text' });
    }
}
export const userModel = new UserModel();
userModel.createIndex();
