"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("../core/keys"));
/**
 * The base implementation of `values`
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} properties The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, properties) {
    return properties.map((key) => object[key]);
}
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
function values(object) {
    return object == null ? [] : baseValues(object, (0, keys_1.default)(object));
}
exports.default = values;
//# sourceMappingURL=values.js.map