"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = toFinite;
const toNumber_1 = __importDefault(require("./toNumber"));
/**
 * Converts `value` to a finite number.
 *
 * @example
 *
 * toFinite(3.2);
 * // => 3.2
 *
 * toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = (0, toNumber_1.default)(value);
    if (value === Infinity || value === -Infinity) {
        return value < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
    }
    return value === value ? value : 0;
}
//# sourceMappingURL=toFinite.js.map