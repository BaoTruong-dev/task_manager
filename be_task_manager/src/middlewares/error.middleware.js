import { HttpResponse } from "../utils/httpResponse";

export const wrapperErrorHandle = (cb) => (req, res, next) => {
    try {
        return cb(req, res);
    } catch (error) {
        next(error.message);
    }
};

export const handleCatchError = (error, req, res, next) => {
    return HttpResponse.error(res, error.message);
};