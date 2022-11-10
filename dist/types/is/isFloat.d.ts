import type { TextNumber } from '../internal/types';
export declare function isFloats(...parameters: any[]): boolean;
export default function isFloat(number: any): boolean;
/**
 * @example
 * TRUE:
 *  where `isFloat` === true && '2.0', '-2.0', -2.212, +2.212, '+2.212', '3.14'
 */
export declare function isFloatCanonical(number: TextNumber): boolean;
//# sourceMappingURL=isFloat.d.ts.map