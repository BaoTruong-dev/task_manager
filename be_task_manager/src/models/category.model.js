import { ObjectId } from "mongodb";
import { client, db } from "../config/db.config";
import { paginatePlugin } from "../utils/paginate.plugin";

class CategoryModel {
    constructor() {
        this.collection = db.collection('category');
    }
    async getList(query) {
        return paginatePlugin(this.collection, query);
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
    async createIndex() {
        await this.collection.createIndex({ name: 'text' });
    }
}

export const categoryModel = new CategoryModel();
categoryModel.createIndex();