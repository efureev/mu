"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortByProperty;

var _isString = _interopRequireDefault(require("../is/isString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {string} property
 * @param {boolean} asc
 * @param {boolean} ignoreCase
 * @return {(function(*, *): (number))|*}
 */
function sortByProperty(property) {
  var asc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var ignoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (a, b) {
    var aProp = a[property];

    if (ignoreCase && (0, _isString.default)(aProp)) {
      aProp = aProp.toUpperCase();
    }

    var bProp = b[property];

    if (ignoreCase && (0, _isString.default)(bProp)) {
      bProp = bProp.toUpperCase();
    }

    if (aProp > bProp) {
      return asc ? 1 : -1;
    }

    if (aProp < bProp) {
      return asc ? -1 : 1;
    }

    return 0;
  };
}
//# sourceMappingURL=sortByProperty.js.map