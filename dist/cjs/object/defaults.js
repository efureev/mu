"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaults;

var _clone = _interopRequireDefault(require("../core/clone"));

var _isObject = _interopRequireDefault(require("../is/isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @example
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
function defaults(origin) {
  var ln = arguments.length <= 1 ? 0 : arguments.length - 1;
  var i = 0,
      object,
      key,
      value,
      sourceKey;

  for (; i < ln; i++) {
    object = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];

    if (!(0, _isObject.default)(object)) {
      continue;
    }

    for (key in object) {
      value = object[key];

      if (value && value.constructor === Object) {
        sourceKey = origin[key];

        if (sourceKey && sourceKey.constructor === Object) {
          defaults(sourceKey, value);
        } else {
          origin[key] = (0, _clone.default)(value);
        }
      } else {
        if (!Object.prototype.hasOwnProperty.call(origin, key)) {
          origin[key] = value;
        }
      }
    }
  }

  return origin;
}
//# sourceMappingURL=defaults.js.map