import { isObjectLike } from './isObject';
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

export default function (...parameters) {
  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isInteger.');
  }

  return parameters.some(value => typeof value === 'symbol' || isObjectLike(value) && Object.prototype.toString.call(value) === '[object Symbol]');
}
//# sourceMappingURL=isSymbol.js.map