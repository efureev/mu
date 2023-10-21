import { isObject } from '~/is.mjs';
/**
 * @param {*} expr
 * @param {object|array} cases
 * @param {matchOptions} options
 * @return {*}
 */
export default function match(expr, cases, options) {
    const opt = Object.assign({ strict: true }, (isObject(options) ? options : {}));
    for (const [pattern, action] of Array.isArray(cases) ? cases : Object.entries(cases)) {
        const prn = typeof pattern === 'function' ? pattern() : pattern;
        if (opt.strict ? expr === prn : expr == prn) {
            return typeof action === 'function' ? action() : action;
        }
    }
    return typeof opt.default === 'function' ? opt.default() : opt.default;
}
//# sourceMappingURL=match.mjs.map