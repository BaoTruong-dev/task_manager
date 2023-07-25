import Joi from 'joi';


export const taskSchemaUpdate = Joi.object({
    title: Joi.string(''),
    description: Joi.string('').optional().allow(null)
});