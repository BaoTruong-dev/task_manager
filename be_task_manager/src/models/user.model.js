import { client, db } from "../config/db.config";

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
}

export const userModel = new UserModel();