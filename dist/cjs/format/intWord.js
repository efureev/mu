"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = intWord;
const number_1 = __importDefault(require("./number"));
const UnitsDefault = ['', 'K', 'M', 'B', 'T'];
/**
 * Format
 * @param {Number|String} value
 * @param {Array} units
 * @param {Number} kilo
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSeparator
 * @param {String} suffixSeparator
 * @returns {string}
 */
function intWord(value, units = UnitsDefault, kilo = 1000, decimals = 2, decPoint = '.', thousandsSeparator = ',', suffixSeparator = '') {
    let unit = units.length - 1;
    decimals = isNaN(decimals) ? 2 : Math.abs(decimals);
    const num = +value;
    for (let i = 0; i < units.length; i++) {
        if (num < kilo ** (i + 1)) {
            unit = i;
            break;
        }
    }
    const humanized = num / kilo ** unit;
    const suffix = units[unit] ? suffixSeparator + units[unit] : '';
    return (0, number_1.default)(humanized, decimals, decPoint, thousandsSeparator) + suffix;
}
//# sourceMappingURL=intWord.js.map