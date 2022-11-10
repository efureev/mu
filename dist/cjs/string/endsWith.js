"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toString_1 = __importDefault(require("../to/toString"));
/**
 * Checks if string ends with the given target string
 *
 * @param {string} str
 * @param {string} target
 * @returns {boolean}
 */
function endsWith(str, target) {
    str = (0, toString_1.default)(str);
    target = (0, toString_1.default)(target);
    let position = str.length;
    const end = position;
    position -= target.length;
    return position >= 0 && str.slice(position, end) === target;
}
exports.default = endsWith;
//# sourceMappingURL=endsWith.js.map