"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = trim;
exports.trimAny = trimAny;
const toString_1 = __importDefault(require("../to/toString"));
const vars_1 = require("../core/vars");
/**
 * This function trim string
 *
 * @param {*} string
 * @returns {string}
 */
function trim(string) {
    string = (0, toString_1.default)(string);
    if (!string) {
        return string;
    }
    return string.replace(vars_1.reTrim, '');
}
/**
 * Trim any characters
 * @param {string} str
 * @param {string|string[]} chars
 */
function trimAny(str, chars) {
    let start = 0, end = str.length;
    const charsArray = typeof chars === 'string' ? [chars] : chars;
    while (start < end && charsArray.indexOf(str[start]) >= 0)
        ++start;
    while (end > start && charsArray.indexOf(str[end - 1]) >= 0)
        --end;
    return start > 0 || end < str.length ? str.substring(start, end) : str;
}
//# sourceMappingURL=trim.js.map