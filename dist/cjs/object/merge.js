"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

var _clone = _interopRequireDefault(require("../core/clone"));

var _isObject = _interopRequireDefault(require("../is/isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Merge objects recursively
 *
 *     var js = {
 *         companyName: 'JS',
 *         products: ['JS', 'GWT', 'Designer'],
 *         isSuperCool: true,
 *         office: {
 *             size: 2000,
 *             location: 'Palo Alto',
 *             isFun: true
 *         }
 *     };
 *
 *     var newStuff = {
 *         companyName: 'Jacksonville',
 *         products: ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
 *         office: {
 *             size: 40000,
 *             location: 'Redwood City'
 *         }
 *     };
 *
 *     const result = merge(js, newStuff);
 *
 *     {
 *         companyName: 'Jacksonville',
 *         products: ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
 *         isSuperCool: true,
 *         office: {
 *             size: 40000,
 *             location: 'Redwood City',
 *             isFun: true
 *         }
 *     }
 */
function merge(original) {
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
        sourceKey = original[key];

        if (sourceKey && sourceKey.constructor === Object) {
          merge(sourceKey, value);
        } else {
          original[key] = (0, _clone.default)(value);
        }
      } else {
        original[key] = value;
      }
    }
  }

  return original;
}
//# sourceMappingURL=merge.js.map