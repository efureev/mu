import { hasUnicode, reUnicode } from './unicode.mjs';
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} value The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(value) {
    return value.match(reUnicode) || [];
}
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} value The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(value) {
    return value.split('');
}
/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} value The string to convert.
 * @returns {Array} Returns the converted array.
 */
export default function stringToArray(value) {
    return hasUnicode(value) ? unicodeToArray(value) : asciiToArray(value);
}
//# sourceMappingURL=stringToArray.mjs.map