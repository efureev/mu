"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _isObject = require("./isObject");

/**
 * This function evaluates if all the parameters are empty
 */
function isEmpty() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  var invalid = parameters.some(function (parameter) {
    switch (Object.prototype.toString.call(parameter)) {
      case '[object String]':
        if (parameter.trim().length) return true;
        break;

      case '[object Number]':
        if (parameter !== 0) return true;
        break;

      case '[object Date]':
        return true;

      case '[object Array]':
        return parameter.length !== 0;

      case '[object Boolean]':
        return parameter === false;

      case '[object Object]':
        return !(0, _isObject.isEmptyObject)(parameter);
      // case '[object Function]':
      // case '[object AsyncFunction]':
      // case '[object Undefined]':
      // case '[object Null]':
    }

    return false;
  });
  return !invalid;
}
//# sourceMappingURL=isEmpty.js.map