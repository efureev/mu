"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = trimSuffix;
const endsWith_1 = __importDefault(require("./endsWith"));
/**
 * Remove a suffix from a String
 *
 * @param {string} str
 * @param {string} suffix
 * @returns {string}
 */
function trimSuffix(str, suffix) {
    if (!str || !suffix || !(0, endsWith_1.default)(str, suffix)) {
        return str;
    }
    return str.substring(0, str.length - suffix.length);
}
//# sourceMappingURL=trimSuffix.js.map