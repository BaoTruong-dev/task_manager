import Joi from "joi";

export const userSchemaCreated = Joi.object({
    name: Joi.string().trim().required()
});

