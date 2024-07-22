"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = toNumber;
exports.stringToNumber = stringToNumber;
exports.booleanToNumber = booleanToNumber;
const isObject_1 = __importDefault(require("../is/isObject"));
const isSymbol_1 = __importDefault(require("../is/isSymbol"));
const vars_1 = require("../core/vars");
/**
 * Converts `value` to a number.

 * @example
 *
 * toNumber(3.2);
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * toNumber(Infinity);
 * // => Infinity
 *
 * toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    if ((0, isSymbol_1.default)(value)) {
        return NaN;
    }
    if ((0, isObject_1.default)(value)) {
        const other = typeof value.valueOf === 'function' ? value.valueOf() : value;
        value = (0, isObject_1.default)(other) ? other + '' : other;
    }
    if (typeof value !== 'string') {
        return value === 0 ? value : +value;
    }
    return stringToNumber(value);
}
function stringToNumber(value) {
    value = value.replace(vars_1.reTrim, '');
    const isBinary = vars_1.reIsBinary.test(value);
    return isBinary || vars_1.reIsOctal.test(value)
        ? parseInt(value.slice(2), isBinary ? 2 : 8)
        : vars_1.reIsBadHex.test(value)
            ? NaN
            : +value;
}
function booleanToNumber(value) {
    return +value;
}
//# sourceMappingURL=toNumber.js.map