/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
export declare const reUnicode: RegExp;
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @param {string} value The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
export declare function hasUnicode(value: string): boolean;
declare const _default: {
    reUnicode: RegExp;
    hasUnicode: typeof hasUnicode;
};
export default _default;
//# sourceMappingURL=unicode.d.ts.map