import Joi from "joi";

export const categorySchemaCreated = Joi.object({
    name: Joi.string().trim().required()
});

