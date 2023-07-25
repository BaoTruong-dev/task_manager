import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, '../data');



export const readFs = (fileName) => {
    try {
        if (!fs.existsSync(`${filePath}/${fileName}.json`)) {
            fs.writeFileSync(`${filePath}/${fileName}.json`, JSON.stringify([]));
        }
        return JSON.parse(fs.readFileSync(`${filePath}/${fileName}.json`, 'utf-8'));

    } catch (error) {
        throw error;
    }
};

export const createFs = (fileName, data) => {
    try {
        return fs.writeFileSync(`${filePath}/${fileName}.json`, JSON.stringify(data));
    } catch (error) {
        throw error;
    }
};