"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("../is");
/**
 * @param {*} expr
 * @param {object|array} cases
 * @param {matchOptions} options
 * @return {*}
 */
function match(expr, cases, options) {
    const opt = Object.assign({ strict: true }, ((0, is_1.isObject)(options) ? options : {}));
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