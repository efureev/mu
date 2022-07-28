"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;
exports.isNumerics = isNumerics;

var _isArray = _interopRequireDefault(require("./isArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function evaluates if all the parameters are Numeric
 */
function isNumeric(value) {
  return !((0, _isArray.default)(value) || isNaN(parseFloat(value)) || !isFinite(value));
}

function isNumerics() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  var invalid = parameters.some(function (parameter) {
    return !isNumeric(parameter);
  });
  return !invalid;
}
//# sourceMappingURL=isNumeric.js.map