import { ObjectId } from "mongodb";
import { db } from "../config/db.config";

class UserModel {
    constructor() {
        this.collection = db.collection('users');
    }
    async get() {
        return await this.collection.find().toArray();
    }
    async create(data) {
        return await this.collection.insertOne(data);
    }
    async getById(id) {
        return await this.collection.findOne({ _id: new ObjectId(id) });

    }
    async deleteById(id) {
        let result = await this.collection.deleteOne({ _id: new ObjectId(id) });
        if (!result.deletedCount > 0) {
            return undefined;
        }
        return result;
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