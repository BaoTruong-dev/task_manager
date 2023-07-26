import { HttpResponse } from "../utils/httpResponse";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);


export const fileController = {
    avatar(req, res) {
        const data = req.file;
        const link = `${process.env.BE_URL}/upload/image/${e.filename}`.replace(/ /g, '%20');
        return HttpResponse.success(res, {
            fileName: link,
            size: data.size,
            mimetype: data.mimetype
        });
    },
    listImage(req, res) {
        const data = req.files;
        const listImage = data.map(e => {
            const link = `${process.env.BE_URL}/upload/image/${e.filename}`.replace(/ /g, '%20');
            return {
                fileName: link,
                size: e.size,
                mimetype: e.mimetype
            };
        });
        return HttpResponse.success(res, listImage);
    }
};