import { ObjectId } from "mongodb";
import { client, db } from "../config/db.config";

class TaskModel {
    constructor() {
        this.collection = db.collection('tasks');
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
            return null;
        }
        return result;
    }
    async updateById(id, value) {
        let result = await this.collection.updateOne({ _id: new ObjectId(id) }, {
            $set: value
        });
        return result;
    }
}

export const taskModel = new TaskModel();