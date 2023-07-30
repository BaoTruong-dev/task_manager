import { HttpResponse } from "../utils/httpResponse";

export const wrapperErrorHandle = (cb) => (req, res, next) => {
    try {
        return cb(req, res, next);
    } catch (error) {
        console.log('maaaa', error);
        next(error);
    }
};

export const handleCatchError = (error, req, res, next) => {
    return HttpResponse.error(res, error);
};