"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = forEach;

var _isArray = _interopRequireDefault(require("../is/isArray"));

var _arrayEach = _interopRequireDefault(require("../array/arrayEach"));

var _keys = _interopRequireDefault(require("./keys"));

var _isArrayLike = _interopRequireDefault(require("../is/isArrayLike"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function forEach(collection, iterateFn) {
  if ((0, _isArray.default)(collection)) {
    return (0, _arrayEach.default)(collection, iterateFn);
  }

  var baseEach = function baseEach(object, iterateFn) {
    return object && createBaseFor()(object, iterateFn, _keys.default);
  };

  var func = createBaseEach(baseEach);
  return func(collection, iterateFn);
}

function createBaseFor() {
  var fromRight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (object, iterateFn, keysFunc) {
    var index = -1,
        iterable = new Object(object),
        properties = keysFunc(object),
        length = properties.length,
        key;

    while (length--) {
      key = properties[fromRight ? length : ++index];

      if (iterateFn(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

function createBaseEach(eachFunc) {
  var fromRight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (collection, iterateFn) {
    if (collection == null) {
      return collection;
    }

    if (!(0, _isArrayLike.default)(collection)) {
      return eachFunc(collection, iterateFn);
    }

    var length = collection.length;
    var iterable = new Object(collection);
    var index = fromRight ? length : -1;

    while (fromRight ? index-- : ++index < length) {
      if (iterateFn(iterable[index], index, iterable) === false) {
        break;
      }
    }

    return collection;
  };
}
//# sourceMappingURL=forEach.js.map