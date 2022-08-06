"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

var _clone = _interopRequireDefault(require("../core/clone"));

var _isObject = _interopRequireDefault(require("../is/isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
          ;
          original[key] = (0, _clone.default)(value);
        }
      } else {
        ;
        original[key] = value;
      }
    }
  }

  return original;
}
//# sourceMappingURL=merge.js.map