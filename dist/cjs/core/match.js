"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isObject_1 = __importDefault(require("../is/isObject"));
/**
 * @param {*} expr
 * @param {object|array} cases
 * @param {matchOptions} options
 * @return {*}
 */
function match(expr, cases, options) {
    const opt = Object.assign({ strict: true }, ((0, isObject_1.default)(options) ? options : {}));
    for (const [pattern, action] of Array.isArray(cases) ? cases : Object.entries(cases)) {
        const prn = typeof pattern === 'function' ? pattern() : pattern;
        if (opt.strict ? expr === prn : expr == prn) {
            return typeof action === 'function' ? action() : action;
        }
    }
    return typeof opt.default === 'function' ? opt.default() : opt.default;
}
exports.default = match;
//# sourceMappingURL=match.js.map