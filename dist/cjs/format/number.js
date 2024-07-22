"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = number;
exports.numberRus = numberRus;
const isInteger_1 = __importDefault(require("../is/isInteger"));
/**
 * Formatting number
 * @param {String|Number} value
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSeparator
 * @param {Boolean} clearDecimals
 * @returns {string}
 */
function number(value, decimals = 2, decPoint = '.', thousandsSeparator = ',', clearDecimals = false) {
    decimals = isNaN(decimals) ? 2 : Math.abs(decimals);
    const num = Number(value);
    const sign = num < 0 ? '-' : '';
    value = Math.abs(+num || 0);
    const intPart = parseInt(num.toFixed(decimals), 10) + '';
    // const intPartStr = intPart + ''
    const j = intPart.length > 3 ? intPart.length % 3 : 0;
    return (sign +
        (j ? intPart.slice(0, j) + thousandsSeparator : '') +
        intPart.slice(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSeparator) +
        (decimals
            ? clearDecimals && (0, isInteger_1.default)(num)
                ? ''
                : decPoint +
                    Math.abs(num - +intPart)
                        .toFixed(decimals)
                        .slice(2)
            : ''));
}
function numberRus(value, decimals = 2) {
    return number(value, decimals, '.', ' ', true);
}
//# sourceMappingURL=number.js.map