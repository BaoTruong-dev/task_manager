import { client, db } from "../config/db.config";

class CategoryModel {
    constructor() {
        this.collection = db.collection('category');
    }
    async get() {
        return await this.collection.find().toArray();
    }
    async create(data) {
        return await this.collection.insertOne(data);
    }
}

export const categoryModel = new CategoryModel();