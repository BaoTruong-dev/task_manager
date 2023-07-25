import Joi from 'joi';
import { readFs } from '../utils/fsFile';

const categoryList = readFs('category');
const userList = readFs('user');



export const taskSchemaUpdate = Joi.object({
    title: Joi.string(),
    description: Joi.string().optional().allow(null),
    category: Joi.string().custom((value, message) => {
        let checked = categoryList.findIndex(e => e.id === value);
        if (checked < 0) {
            return message.message('CategoryId is wrong!');
        }
        return true;
    }),
    users: Joi.array().items(Joi.string()).custom((value, message) => {
        let checked = userList.filter(e => value.includes(e.id));
        if (checked.length < value.length) {
            return message.message('UserId is wrong!');
        }
        return true;
    })

});

export const taskSchemaCreated = taskSchemaUpdate.fork(['title', 'description', 'category', 'users'], (schema) => {
    return schema.required();
});