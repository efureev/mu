"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = normalizeName;
exports.normalizeKebab = normalizeKebab;
exports.normalizeCustom = normalizeCustom;
const vars_1 = require("../core/vars");
const trim_1 = require("./trim");
const replace_1 = require("./replace");
/**
 * Removing non-alphanumeric chars
 *
 * [^0-9a-zA-Z_]
 *
 * @param {string} str
 * @param {string} replace
 * @param {string|string[]} round
 * @returns {string}
 */
function normalizeName(str, replace = '-', round = ['-', '_']) {
    return normalizeCustom(str, replace, vars_1.reNonAlpha, round);
}
function normalizeKebab(str) {
    return normalizeCustom(str, '-', /[^0-9a-zA-Z\-]/g, '-');
}
function normalizeCustom(str, replace = '-', re, round) {
    return (0, replace_1.removeConsecutiveDuplicates)((0, trim_1.trimAny)(str.trim().replace(re, replace), round), round);
}
//# sourceMappingURL=normalize.js.map