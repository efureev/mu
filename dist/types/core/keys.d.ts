/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * keys('hi');
 * // => ['0', '1']
 */
export default function keys(object: any): string[];
//# sourceMappingURL=keys.d.ts.map