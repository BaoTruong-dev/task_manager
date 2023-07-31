import Joi from 'joi';
import { ObjectId } from 'mongodb';
import { categoryModel } from '../models/category.model';
import { userModel } from '../models/user.model';




export const taskSchemaUpdate = Joi.object({
    title: Joi.string(),
    description: Joi.string().optional().allow(null),
    category: Joi.string().external(async (value, message) => {
        if (value) {
            const categoryList = await categoryModel.get();
            let checked = categoryList.some(e => e._id.equals(new ObjectId(value))
            );
            console.log(checked, '-----');
            if (!checked) {
                return message.message('CategoryId is wrong!');
            }
            return true;
        }
    }),
    users: Joi.array().items(Joi.string()).external(async (value, message) => {
        if (value) {
            const userList = await userModel.get();
            let checked = userList.filter(e => value.includes(e._id.toString()));
            if (checked.length === 0 || checked.length < value.length) {
                return message.message('UserId is wrong!');
            }
            return true;
        }
    })
});

export const taskSchemaCreated = taskSchemaUpdate.fork(['title', 'description', 'category', 'users'], (schema) => {
    return schema.required();
});