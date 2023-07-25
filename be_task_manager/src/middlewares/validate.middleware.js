export const validate = (cb) => async (req, res, next) => {
    try {
        await cb.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        next({ message: error });
    }
};