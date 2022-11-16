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
export default function normalizeName(str: string, replace?: string, round?: string | string[]): string;
export declare function normalizeCustom(str: string, replace: string | undefined, re: RegExp, round: string | string[]): string;
//# sourceMappingURL=normalize.d.ts.map