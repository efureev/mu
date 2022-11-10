"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.elapsed = void 0;
const now_1 = __importDefault(require("./now"));
/**
 * Returns difference in milliseconds between dates
 *
 * @param {Date} dateA The first date.
 * @param {Date} [dateB=new Date()] (optional) The second date.
 * @return {Number} The difference in milliseconds
 *
 * @memberof µ.date
 * @author efureev
 */
function elapsed(dateA, dateB) {
    return Math.abs(+dateA - (+dateB || (0, now_1.default)()));
}
exports.elapsed = elapsed;
//# sourceMappingURL=elapsed.js.map