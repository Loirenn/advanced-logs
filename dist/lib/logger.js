"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("../utils/colors");
;
let config;
const setConfig = function (conf) {
    config = conf;
};
const getConfig = function () {
    return config;
};
const success = function (message, title) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');
    title = title || 'SUCCESS';
    if (config?.background) {
        console.log(`${config?.timestamp ?? true ? `${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.bg.green}${colors_1.Colors.fg.white}${colors_1.Colors.bright} ${title} ${colors_1.Colors.reset} ${message}` : `${colors_1.Colors.bg.green}${colors_1.Colors.fg.white}${colors_1.Colors.bright} ${title} ${colors_1.Colors.reset} ${message}`}`);
    }
    else {
        console.log(`${config?.timestamp ?? true ? `${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.fg.green}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}` : `${colors_1.Colors.fg.green}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}`}`);
    }
    ;
};
const error = function (message, title) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');
    title = title || 'ERROR';
    if (config?.background) {
        console.log(`${config?.timestamp ?? true ? `${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.bg.red}${colors_1.Colors.fg.white}${colors_1.Colors.bright} ${title} ${colors_1.Colors.reset} ${message}` : `${colors_1.Colors.bg.red}${colors_1.Colors.fg.white}${colors_1.Colors.bright} ${title} ${colors_1.Colors.reset} ${message}`}`);
    }
    else {
        console.log(`${config?.timestamp ?? true ? `${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.fg.red}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}` : `${colors_1.Colors.fg.red}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}`}`);
    }
    ;
};
const info = function (message, title) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');
    title = title || 'INFO';
    if (config?.background) {
        console.log(`${config?.timestamp ?? true ? `${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.bg.blue}${colors_1.Colors.fg.white}${colors_1.Colors.bright} ${title} ${colors_1.Colors.reset} ${message}` : `${colors_1.Colors.bg.blue}${colors_1.Colors.fg.white}${colors_1.Colors.bright} ${title} ${colors_1.Colors.reset} ${message}`}`);
    }
    else {
        console.log(`${config?.timestamp ?? true ? `${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.fg.blue}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}` : `${colors_1.Colors.fg.blue}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}`}`);
    }
    ;
};
const warn = function (message, title) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');
    title = title || 'WARN';
    if (config?.background) {
        console.log(`${config?.timestamp ?? true ? `${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.bg.yellow}${colors_1.Colors.fg.white}${colors_1.Colors.bright} ${title} ${colors_1.Colors.reset} ${message}` : `${colors_1.Colors.bg.yellow}${colors_1.Colors.fg.white}${colors_1.Colors.bright} ${title} ${colors_1.Colors.reset} ${message}`}`);
    }
    else {
        console.log(`${config?.timestamp ?? true ? `${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.fg.yellow}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}` : `${colors_1.Colors.fg.yellow}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}`}`);
    }
    ;
};
const debug = function (message, title) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');
    title = title || 'DEBUG';
    if (config?.background) {
        console.log(`${config?.timestamp ?? true ? `${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.bg.magenta}${colors_1.Colors.fg.white}${colors_1.Colors.bright} ${title} ${colors_1.Colors.reset} ${message}` : `${colors_1.Colors.bg.magenta}${colors_1.Colors.fg.white}${colors_1.Colors.bright} ${title} ${colors_1.Colors.reset} ${message}`}`);
    }
    else {
        console.log(`${config?.timestamp ?? true ? `${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.fg.magenta}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}` : `${colors_1.Colors.fg.magenta}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}`}`);
    }
    ;
};
console.success = success;
console.error = error;
console.info = info;
console.warn = warn;
console.debug = debug;
console.setConfig = setConfig;
console.getConfig = getConfig;
