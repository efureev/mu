"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBasicType;
exports.isAdvancedType = isAdvancedType;

var _isBoolean = _interopRequireDefault(require("./isBoolean"));

var _isNil = _interopRequireDefault(require("./isNil"));

var _isNumeric = _interopRequireDefault(require("./isNumeric"));

var _isString = _interopRequireDefault(require("./isString"));

var _isSymbol = _interopRequireDefault(require("./isSymbol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBasicType(value) {
  return !isAdvancedType(value);
}

function isAdvancedType(value) {
  return !(0, _isNil.default)(value) && ((0, _isSymbol.default)(value) || !(0, _isString.default)(value) && !(0, _isNumeric.default)(value) && !(0, _isBoolean.default)(value));
}
//# sourceMappingURL=isBasicType.js.map