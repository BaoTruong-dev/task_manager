import { Token } from "../models/token.model";

export const jwtMiddleware = (req, res, next) => {
    try {
        const access_token = req.headers.authorization.split(' ')[1];
        let { uid } = Token.verifyToken(access_token, process.env.ACCESS_TOKEN_SECRET);
        req.uid = uid;
        next();
    } catch (error) {
        next(error);
    }
};