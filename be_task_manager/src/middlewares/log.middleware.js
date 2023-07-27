import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import rfs from 'rotating-file-stream';
import morgan from 'morgan';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: join(__dirname, '../logs'),
});

const logToTerminal = (log) => {
    console.log(log);
};


export const loggerMiddleware = morgan('combined', {
    stream: {
        write: (log) => {
            // Ghi log vào file
            accessLogStream.write(log);

            // Ghi log ra terminal bằng hàm logToTerminal
            logToTerminal(log);
        },
    },
});
