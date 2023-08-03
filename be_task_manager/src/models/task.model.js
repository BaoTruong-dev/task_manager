import { query } from "express";
import { ObjectId } from "mongodb";
import { db } from "../config/db.config";
import { paginatePlugin } from "../utils/paginate.plugin";

class TaskModel {
    constructor() {
        this.collection = db.collection('tasks');
        this.pipeline = [
            {
                $addFields: {
                    categoryObjectId: { $toObjectId: '$category' },
                    userObjectId: {
                        $map: {
                            input: '$users',
                            as: 'users',
                            in: { $toObjectId: '$$users' }
                        }
                    }
                }
            },
            {
                $lookup: {
                    from: 'category',
                    localField: 'categoryObjectId', // Use the newly added 'categoryObjectId' field
                    foreignField: '_id',
                    as: 'category'
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userObjectId', // Use the newly added 'categoryObjectId' field
                    foreignField: '_id',
                    as: 'users'
                }
            },
            {
                $unwind: '$category'
            },
            {
                $project: {
                    categoryObjectId: 0,
                    userObjectId: 0,
                    "users.password": 0,
                }
            }
        ];
    }
    async getList(query) {
        return await paginatePlugin(this.collection, query, this.pipeline);
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
        await this.collection.createIndex({ title: 'text' });
    }
}

export const taskModel = new TaskModel();
taskModel.createIndex();
