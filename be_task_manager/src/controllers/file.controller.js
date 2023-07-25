import { HttpResponse } from "../utils/httpResponse";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);


export const fileController = {
    avatar(req, res) {
        const data = req.file;
        // const urlImage = join(__dirname, '../upload', data.filename);
        return HttpResponse.success(res, {
            fileName: data.filename,
            size: data.size,
            mimetype: data.mimetype
        });
    }
};