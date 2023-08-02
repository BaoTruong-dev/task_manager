import crypto from 'crypto';
export const hashPassword = (password) => {
    const hash = crypto.createHash('sha256');
    hash.update(password + process.env.PASSWORD_SALT);
    return hash.digest('hex');
};

export const generateRandomSalt = () => {
    return crypto.randomBytes(parseInt(process.env.LENGTH_SALT)).toString('hex');
};