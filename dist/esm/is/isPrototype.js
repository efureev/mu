/** Used for built-in method references. */
import isFunction from './isFunction';
const objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 */

export default function isPrototype(value) {
  const Ctor = value && value.constructor,
        proto = isFunction(Ctor) && Ctor.prototype || objectProto;
  return value === proto;
}
//# sourceMappingURL=isPrototype.js.map