"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("./utils/colors");
;
const success = function (message, title) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');
    title = title || 'SUCCESS';
    console.log(`${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.fg.green}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}`);
};
const error = function (message, title) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');
    title = title || 'ERROR';
    console.log(`${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.fg.red}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}`);
};
const info = function (message, title) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');
    title = title || 'INFO';
    console.log(`${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.fg.cyan}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}`);
};
const warn = function (message, title) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');
    title = title || 'WARN';
    console.log(`${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.fg.yellow}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}`);
};
const debug = function (message, title) {
    const getHours = new Date().getHours().toString().padStart(2, '0');
    const getMinutes = new Date().getMinutes().toString().padStart(2, '0');
    const getSeconds = new Date().getSeconds().toString().padStart(2, '0');
    title = title || 'DEBUG';
    console.log(`${colors_1.Colors.fg.black}${colors_1.Colors.bright}${getHours}:${getMinutes}:${getSeconds} ${colors_1.Colors.fg.blue}${colors_1.Colors.bright}${title} ${colors_1.Colors.reset}${message}`);
};
console.success = success;
console.error = error;
console.info = info;
console.warn = warn;
console.debug = debug;
