import jwt from 'jsonwebtoken';
export class Token {
    static generateToken(payload, secret, expiresIn) {
        return jwt.sign(payload, secret, { expiresIn }, { algorithm: 'RS256' });
    }
    static accessToken(data) {
        return this.generateToken(data, process.env.ACCESS_TOKEN_SECRET, '1m');
    }
    static refreshToken(data) {
        return this.generateToken(data, process.env.REFRESH_TOKEN_SECRET, '7d');
    }
    static verifyToken(token, secret) {

        return jwt.verify(token, secret);
    };
}