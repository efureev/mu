"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeEmpty;

var _is = require("../is");

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
    if (object.hasOwnProperty(key) && !(0, _is.isEmpty)(object[key])) {
      if ((0, _is.isObject)(object[key])) {
        var r = removeEmpty(object[key]);

        if (!(0, _is.isEmpty)(r)) {
          result[key] = r;
        }

        continue;
      }

      if ((0, _is.isArray)(object[key])) {
        var _ret = function () {
          var a = [];
          object[key].forEach(function (v) {
            if ((0, _is.isString)(v)) {
              a.push(v);
            } else {
              var _r = removeEmpty(v);

              if (!(0, _is.isEmpty)(_r)) {
                a.push(_r);
              }
            }
          });

          if (!(0, _is.isEmpty)(a)) {
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