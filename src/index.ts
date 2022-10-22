import { Colors } from './utils/colors';

declare global {
    interface Console {
        success(message: string, title?: string): void;
        error(message: string, title?: string): void;
        info(message: string, title?: string): void;
        warn(message: string, title?: string): void;
        debug(message: string, title?: string): void;
    }
};

const success = function (message: string, title?: string) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');

    title = title || 'SUCCESS';
    console.log(`${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.fg.green}${Colors.bright}${title} ${Colors.reset}${message}`);
};

const error = function (message: string, title?: string) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');

    title = title || 'ERROR';
    console.log(`${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.fg.red}${Colors.bright}${title} ${Colors.reset}${message}`);
};

const info = function (message: string, title?: string) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');

    title = title || 'INFO';
    console.log(`${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.fg.cyan}${Colors.bright}${title} ${Colors.reset}${message}`);
};

const warn = function (message: string, title?: string) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');

    title = title || 'WARN';
    console.log(`${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.fg.yellow}${Colors.bright}${title} ${Colors.reset}${message}`);
};

const debug = function (message: string, title?: string) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');

    title = title || 'DEBUG';
    console.log(`${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.fg.blue}${Colors.bright}${title} ${Colors.reset}${message}`);
};

console.success = success;
console.error = error;
console.info = info;
console.warn = warn;
console.debug = debug;