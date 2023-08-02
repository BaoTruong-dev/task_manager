import Joi from "joi";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const rulesRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+~`[\]{}|:;"'<>,.?/\\])/;
export const userSchemaRegister = Joi.object({
    name: Joi.string().trim().required(),
    age: Joi.number().required(),
    email: Joi.string().regex(emailRegex).required(),
    password: Joi.string().min(6).max(32).custom((value, helpers) => {
        let name = helpers.state.ancestors[0].name;
        if (value.includes(name)) {
            return helpers.message('Your password\'s not allowed includes name');
        }
        if (!rulesRegex.test(value)) {
            return helpers.message('Your password must include uppercase letters, lowercase letters, special characters, and number');
        }
        return true;
    }).required()
});


export const userSchemaLogin = Joi.object({
    email: userSchemaRegister.extract('email'),
    password: userSchemaRegister.extract('password'),
})

