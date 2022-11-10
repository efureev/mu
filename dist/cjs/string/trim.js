"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toString_1 = __importDefault(require("../to/toString"));
const vars_1 = require("../core/vars");
/**
 * This function trim string
 *
 * @param {*} string
 * @returns {string}
 */
function trim(string) {
    string = (0, toString_1.default)(string);
    if (!string) {
        return string;
    }
    return string.replace(vars_1.reTrim, '');
}
exports.default = trim;
//# sourceMappingURL=trim.js.map