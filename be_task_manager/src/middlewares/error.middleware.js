import { HttpResponse } from "../utils/httpResponse";

export const wrapperErrorHandle = (cb) => async (req, res, next) => {
    try {
        await cb(req, res, next);
    } catch (error) {
        next(error);
    }
};
export const NotMatchedRoute = (req, res, next) => {
    next('Route not matched');
};
export const handleCatchError = (error, req, res, next) => {
    return HttpResponse.error(res, error);
};