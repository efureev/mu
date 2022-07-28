"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrototype;

var _isFunction = _interopRequireDefault(require("./isFunction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (0, _isFunction.default)(Ctor) && Ctor.prototype || objectProto;
  return value === proto;
}
//# sourceMappingURL=isPrototype.js.map