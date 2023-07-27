import { client, db } from "../config/db.config";

class TaskModel {
    constructor() {
        this.collection = db.collection('tasks');
    }
    async create(data) {
        return await this.collection.insertOne(data);
    }
}

export const taskModel = new TaskModel();