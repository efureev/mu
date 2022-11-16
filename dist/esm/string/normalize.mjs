import { reNonAlpha } from '../core/vars.mjs';
import { trimAny } from './trim.mjs';
import { removeConsecutiveDuplicates } from './replace.mjs';
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
export default function normalizeName(str, replace = '-', round = ['-', '_']) {
    return normalizeCustom(str.trim(), replace, reNonAlpha, round);
}
export function normalizeCustom(str, replace = '-', re, round) {
    return removeConsecutiveDuplicates(trimAny(str.trim().replace(re, replace), round), round);
}
//# sourceMappingURL=normalize.mjs.map