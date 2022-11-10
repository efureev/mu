/**
 * Converts the first character of string to upper case
 *
 * @param {string} string
 * @returns {string}
 */
export default function upperFirst(string) {
    const stringTrim = string.trim();
    return stringTrim.charAt(0).toUpperCase() + stringTrim.slice(1).toLowerCase();
}
//# sourceMappingURL=upperFirst.js.map