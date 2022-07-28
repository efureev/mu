"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSize;

var _isObject = _interopRequireDefault(require("./../is/isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns count of properties of the object
 *
 * @param {object} object
 * @returns {int}
 */
function getSize(object) {
  if (!(0, _isObject.default)(object)) {
    throw new Error('Param is not object');
  }

  var size = 0;
  var property;

  for (property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      size++;
    }
  }

  return size;
}
//# sourceMappingURL=getSize.js.map