import toFinite from './toFinite.mjs';
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @example
 *
 * toInteger(3.2);
 * // => 3
 *
 * toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2');
 * // => 3
 */
export default function toInteger(value) {
    const result = toFinite(value);
    let remainder = result % 1;
    return result === result ? (remainder ? result - remainder : result) : 0;
}
//# sourceMappingURL=toInteger.mjs.map