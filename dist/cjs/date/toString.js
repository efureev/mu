"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pad_1 = require("../format/pad");
/**
 * Date to string
 * @param {Date|null} date
 * @returns {string}
 */
function toString(date = new Date()) {
    return (date.getFullYear() +
        '-' +
        (0, pad_1.padDateTime)(date.getMonth() + 1) +
        '-' +
        (0, pad_1.padDateTime)(date.getDate()) +
        'T' +
        (0, pad_1.padDateTime)(date.getHours()) +
        ':' +
        (0, pad_1.padDateTime)(date.getMinutes()) +
        ':' +
        (0, pad_1.padDateTime)(date.getSeconds()));
}
exports.default = toString;
//# sourceMappingURL=toString.js.map