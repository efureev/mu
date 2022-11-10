"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.padEnd = exports.padStart = void 0;
const isNil_1 = __importDefault(require("../is/isNil"));
/**
 * This function add symbols to string in start or end
 *
 * @param {string | number | undefined} value
 * @param {int} targetLength
 * @param {string} padString
 * @param {boolean} leading If TRUE add symbols before string, else - after
 * @returns {string}
 */
function pad(value, targetLength, padString = ' ', leading = true) {
    targetLength = Math.trunc(targetLength); //floor if number or convert non-number to 0;
    if ((0, isNil_1.default)(value)) {
        return '';
    }
    value = String(value);
    if (value.length > targetLength) {
        return value;
    }
    targetLength = targetLength - value.length;
    if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
    }
    return leading ? padString.slice(0, targetLength) + value : value + padString.slice(0, targetLength);
}
exports.default = pad;
/**
 * This function add leading symbols
 */
function padStart(value, targetLength, padString = ' ') {
    return pad(value, targetLength, padString);
}
exports.padStart = padStart;
/**
 * This function add ending symbols
 */
function padEnd(value, targetLength, padString = ' ') {
    return pad(value, targetLength, padString, false);
}
exports.padEnd = padEnd;
//# sourceMappingURL=pad.js.map