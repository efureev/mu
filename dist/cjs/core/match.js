"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {*} expr
 * @param {object|array} cases
 * @param {boolean} strict Strict comparison (===) or (==). For example, it should be used for digit case-keys.
 * @return {*}
 */
function match(expr, cases, strict = true) {
    for (const [pattern, action] of Array.isArray(cases) ? cases : Object.entries(cases)) {
        const prn = typeof pattern === 'function' ? pattern() : pattern;
        if (strict ? expr === prn : expr == prn) {
            return typeof action === 'function' ? action() : action;
        }
    }
    return Array.isArray(cases) ? undefined : cases.default;
}
exports.default = match;
//# sourceMappingURL=match.js.map