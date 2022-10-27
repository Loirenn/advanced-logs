import { Colors } from '../utils/colors';
import { IConfig } from '../interfaces';

declare global {
    interface Console {
        success(message: string, title?: string): void;
        error(message: string, title?: string): void;
        info(message: string, title?: string): void;
        warn(message: string, title?: string): void;
        debug(message: string, title?: string): void;
        setConfig(config: IConfig): void;
        getConfig(): IConfig;
    }
};

let config!: IConfig;

const setConfig = function (conf: IConfig) {
    config = conf;
};

const getConfig = function () {
    return config;
};

const success = function (message: string, title?: string) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');

    title = title || 'SUCCESS';
    if (config?.background) {
        console.log(`${config?.timestamp || true ? `${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.bg.green}${Colors.fg.white}${Colors.bright} ${title} ${Colors.reset} ${message}` : `${Colors.bg.green}${Colors.fg.black}${Colors.bright}${title} ${Colors.reset}${message}`}`)
    } else {
        console.log(`${config?.timestamp || true ? `${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.fg.green}${Colors.bright}${title} ${Colors.reset}${message}` : `${Colors.fg.green}${Colors.bright}${title} ${Colors.reset}${message}`}`)
    };
};

const error = function (message: string, title?: string) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');

    title = title || 'ERROR';
    if (config?.background) {
        console.log(`${config?.timestamp || true ? `${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.bg.red}${Colors.fg.white}${Colors.bright} ${title} ${Colors.reset} ${message}` : `${Colors.bg.red}${Colors.fg.black}${Colors.bright}${title} ${Colors.reset}${message}`}`)
    } else {
        console.log(`${config?.timestamp || true ? `${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.fg.red}${Colors.bright}${title} ${Colors.reset}${message}` : `${Colors.fg.red}${Colors.bright}${title} ${Colors.reset}${message}`}`)
    };
   
};

const info = function (message: string, title?: string) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');

    title = title || 'INFO';
    if (config?.background) {
        console.log(`${config?.timestamp || true ? `${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.bg.blue}${Colors.fg.white}${Colors.bright} ${title} ${Colors.reset} ${message}` : `${Colors.bg.blue}${Colors.fg.black}${Colors.bright}${title} ${Colors.reset}${message}`}`)
    } else {
        console.log(`${config?.timestamp || true ? `${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.fg.blue}${Colors.bright}${title} ${Colors.reset}${message}` : `${Colors.fg.blue}${Colors.bright}${title} ${Colors.reset}${message}`}`)
    };
};

const warn = function (message: string, title?: string) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');

    title = title || 'WARN';
    if (config?.background) {
        console.log(`${config?.timestamp || true ? `${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.bg.yellow}${Colors.fg.white}${Colors.bright} ${title} ${Colors.reset} ${message}` : `${Colors.bg.yellow}${Colors.fg.black}${Colors.bright}${title} ${Colors.reset}${message}`}`)
    } else {
        console.log(`${config?.timestamp || true ? `${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.fg.yellow}${Colors.bright}${title} ${Colors.reset}${message}` : `${Colors.fg.yellow}${Colors.bright}${title} ${Colors.reset}${message}`}`)
    };
};

const debug = function (message: string, title?: string) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');

    title = title || 'DEBUG';
    if (config?.background) {
        console.log(`${config?.timestamp || true ? `${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.bg.magenta}${Colors.fg.white}${Colors.bright} ${title} ${Colors.reset} ${message}` : `${Colors.bg.magenta}${Colors.fg.black}${Colors.bright}${title} ${Colors.reset}${message}`}`)
    } else {
        console.log(`${config?.timestamp || true ? `${Colors.fg.black}${Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${Colors.fg.magenta}${Colors.bright}${title} ${Colors.reset}${message}` : `${Colors.fg.magenta}${Colors.bright}${title} ${Colors.reset}${message}`}`)
    };
};

console.success = success;
console.error = error;
console.info = info;
console.warn = warn;
console.debug = debug;
console.setConfig = setConfig;
console.getConfig = getConfig;