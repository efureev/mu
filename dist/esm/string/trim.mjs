import toString from '../to/toString.mjs';
import { reTrim } from '../core/vars.mjs';
/**
 * This function trim string
 *
 * @param {*} string
 * @returns {string}
 */
export default function trim(string) {
    string = toString(string);
    if (!string) {
        return string;
    }
    return string.replace(reTrim, '');
}
/**
 * Trim any characters
 * @param {string} str
 * @param {string|string[]} chars
 */
export function trimAny(str, chars) {
    let start = 0, end = str.length;
    const charsArray = typeof chars === 'string' ? [chars] : chars;
    while (start < end && charsArray.indexOf(str[start]) >= 0)
        ++start;
    while (end > start && charsArray.indexOf(str[end - 1]) >= 0)
        --end;
    return start > 0 || end < str.length ? str.substring(start, end) : str;
}
//# sourceMappingURL=trim.mjs.map