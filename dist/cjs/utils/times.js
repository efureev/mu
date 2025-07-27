"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = times;
const isFunction_1 = __importDefault(require("../is/isFunction"));
function times(n = 1, iteratee) {
    const result = new Array(n);
    let index = -1;
    const isFn = (0, isFunction_1.default)(iteratee);
    while (++index < n) {
        const iterValue = isFn ? iteratee(index) : null;
        result[index] = iterValue || iteratee || index;
    }
    return result;
}
//# sourceMappingURL=times.js.map