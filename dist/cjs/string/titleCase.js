"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const upperFirst_1 = __importDefault(require("./upperFirst"));
const clearSpaces_1 = __importDefault(require("./clearSpaces"));
/**
 * Converts the first character of every word into string to upper case
 *
 * @param {string} string
 * @returns {string}
 */
function titleCase(string) {
    return (0, clearSpaces_1.default)(string).replace(/\w\S*/g, txt => (0, upperFirst_1.default)(txt));
}
exports.default = titleCase;
//# sourceMappingURL=titleCase.js.map