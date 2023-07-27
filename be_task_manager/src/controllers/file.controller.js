import { unlink } from "fs";
import { HttpResponse } from "../utils/httpResponse";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);


export const fileController = {
    avatar(req, res) {
        const data = req.file;
        const link = `${process.env.BE_URL}/upload/image/${data.filename}`.replace(/ /g, '%20');
        return HttpResponse.success(res, {
            fileName: link,
            size: data.size,
            mimetype: data.mimetype
        });
    },
    updateAvatar(req, res, next) {

        const newAvatar = req.file;
        const { oldAvatar } = req.body;
        let linkOldAvatar = oldAvatar.replace(process.env.BE_URL, '').replace(/%20/g, ' ');
        unlink(join(__dirname, `..${linkOldAvatar}`), (err) => {
            if (!err) {
                const linkNewAvatar = `${process.env.BE_URL}/upload/image/${newAvatar.filename}`.replace(/ /g, '%20');
                return HttpResponse.success(res, {
                    fileName: linkNewAvatar,
                    size: newAvatar.size,
                    mimetype: newAvatar.mimetype
                });
            } else {
                next(err);
            };
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