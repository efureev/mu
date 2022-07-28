import { TextNumberNullable } from '../internal/types';
/**
 * This function add symbols to string in start or end
 *
 * @param {string | number | undefined} value
 * @param {int} targetLength
 * @param {string} padString
 * @param {boolean} leading If TRUE add symbols before string, else - after
 * @returns {string}
 */
export default function pad(value: TextNumberNullable, targetLength: number, padString?: string, leading?: boolean): string;
/**
 * This function add leading symbols
 */
export declare function padStart(value: TextNumberNullable, targetLength: number, padString?: string): string;
/**
 * This function add ending symbols
 */
export declare function padEnd(value: TextNumberNullable, targetLength: number, padString?: string): string;
//# sourceMappingURL=pad.d.ts.map