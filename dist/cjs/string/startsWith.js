"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = startsWith;
const toString_1 = __importDefault(require("../to/toString"));
/**
 * Checks if string starts with the given target string
 *
 * @param {string} str
 * @param {string} target
 * @returns {boolean}
 */
function startsWith(str, target) {
    target = (0, toString_1.default)(target);
    return (0, toString_1.default)(str).slice(0, target.length) === target;
}
//# sourceMappingURL=startsWith.js.map