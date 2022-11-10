import type { TextNumber } from '../internal/types';
/**
 * Replace all entries in string according to map
 *
 * @param {string} str
 * @param {{}} map
 * @return {string}
 */
export declare function replaceByTemplate(str: string, map: Record<string, TextNumber>): string;
export default function strtr(str: string, from: string | Record<string, TextNumber>, to?: string): string;
//# sourceMappingURL=strtr.d.ts.map