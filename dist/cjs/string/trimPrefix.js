"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = trimPrefix;
const startsWith_1 = __importDefault(require("./startsWith"));
/**
 * Remove a prefix from a String
 *
 * @param {string} str
 * @param {string} prefix
 * @returns {string}
 */
function trimPrefix(str, prefix) {
    if (!str || !prefix || !(0, startsWith_1.default)(str, prefix)) {
        return str;
    }
    return str.substring(prefix.length);
}
//# sourceMappingURL=trimPrefix.js.map