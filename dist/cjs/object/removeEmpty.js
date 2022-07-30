"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeEmpty;

var _isObject = _interopRequireDefault(require("../is/isObject"));

var _isString = _interopRequireDefault(require("../is/isString"));

var _isEmpty = _interopRequireDefault(require("../is/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Remove all empty values in object
 *
 * @param {{}} object
 * @return {{}}
 */
function removeEmpty(object) {
  var result = {},
      key;

  for (key in object) {
    if (object.hasOwnProperty(key) && !(0, _isEmpty.default)(object[key])) {
      if ((0, _isObject.default)(object[key])) {
        var r = removeEmpty(object[key]);

        if (!(0, _isEmpty.default)(r)) {
          result[key] = r;
        }

        continue;
      }

      if (Array.isArray(object[key])) {
        var _ret = function () {
          var a = [];
          object[key].forEach(function (v) {
            if ((0, _isString.default)(v)) {
              a.push(v);
            } else {
              var _r = removeEmpty(v);

              if (!(0, _isEmpty.default)(_r)) {
                a.push(_r);
              }
            }
          });

          if (!(0, _isEmpty.default)(a)) {
            result[key] = a;
          }

          return "continue";
        }();

        if (_ret === "continue") continue;
      }

      result[key] = object[key];
    }
  }

  return result;
}
//# sourceMappingURL=removeEmpty.js.map