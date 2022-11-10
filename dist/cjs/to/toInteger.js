"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toFinite_1 = __importDefault(require("./toFinite"));
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @example
 *
 * toInteger(3.2);
 * // => 3
 *
 * toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
    const result = (0, toFinite_1.default)(value);
    let remainder = result % 1;
    return result === result ? (remainder ? result - remainder : result) : 0;
}
exports.default = toInteger;
//# sourceMappingURL=toInteger.js.map