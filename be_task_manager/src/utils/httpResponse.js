import { httpStatus } from "../constant/httpStatus";


export class HttpResponse {
    static get(res, data) {
        return res.status(httpStatus.success).json({
            status: "success",
            code: httpStatus.success,
            message: "Lấy dữ liệu thành công.",
            data,
        });
    }

    static created(res, data) {
        return res.status(httpStatus.created).json({
            status: "success",
            code: httpStatus.created,
            message: "Dữ liệu đã được tạo thành công.",
            data,
        });
    }

    static error(res, errors) {
        return res.status(httpStatus.badRequest).json({
            status: "error",
            code: httpStatus.badRequest,
            message: "Dữ liệu không hợp lệ.",
            error_code: "ERR123456",
            errors,
        });
    }

    static updated(res, data) {
        return res.status(httpStatus.success).json({
            status: "success",
            code: httpStatus.success,
            message: "Dữ liệu đã được cập nhật thành công.",
            data,
        });
    }
    static delete(res, data) {
        return res.status(httpStatus.success).json({
            status: "success",
            code: httpStatus.success,
            message: "Dữ liệu đã được xoá thành công.",
            data,
        });
    }

    static count(res, data) {
        return res.status(httpStatus.success).json({
            status: "success",
            code: httpStatus.success,
            message: "Điếm số lượng dữ liệu thành công.",
            data
        });
    }
    static success(res, data) {
        return res.status(httpStatus.success).json({
            status: "success",
            code: httpStatus.success,
            message: "Thao tác thành công.",
            data
        });
    }
}