"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathToObject;

var _isEmpty = _interopRequireDefault(require("../is/isEmpty"));

var _isObject = _interopRequireDefault(require("../is/isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pathToObject() {
  var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var object = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var divider = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  var replaceOnExist = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  if ((0, _isEmpty.default)(paths)) {
    return object;
  }

  var pathsArray = paths.split(divider),
      pathsCount = pathsArray.length;
  var current = object;

  for (var i = 0; i < pathsCount; i++) {
    var k = pathsArray[i];

    if ((0, _isObject.default)(current)) {
      if ((0, _isObject.default)(current[k])) {
        if (pathsCount - 1 === i) {
          current[k] = value;
        }
      } else {
        if (current.hasOwnProperty(k) && replaceOnExist || !current.hasOwnProperty(k)) {
          current[k] = pathsCount - 1 === i ? value : {};
        }
      }
    }

    current = current[k];
  }

  return object;
}
//# sourceMappingURL=pathToObject.js.map