/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * values('hi');
 * // => ['h', 'i']
 */
export default function values(object?: any): any[];
//# sourceMappingURL=values.d.ts.map