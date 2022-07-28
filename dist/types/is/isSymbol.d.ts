/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @example
 *
 * isSymbol(Symbol.iterator); // => true
 *
 * isSymbol('abc'); // => false
 *
 * isSymbol('abc', Symbol.iterator); // => false
 *
 * isSymbol(Symbol.iterator, Symbol.iterator); // => true
 */
export default function (...parameters: any[]): boolean;
//# sourceMappingURL=isSymbol.d.ts.map