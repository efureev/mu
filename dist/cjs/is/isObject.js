"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
exports.isEmptyObject = isEmptyObject;
exports.isObjectLike = isObjectLike;
exports.isObjects = isObjects;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var isO = Object.prototype.toString.call(null) === '[object Object]' ? function (value) {
  // check ownerDocument here as well to exclude DOM nodes
  return value != null && Object.prototype.toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
} : function (value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};
/**
 * This function evaluates whether all parameters are objects
 */

function isObjects() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isObject.');
  }

  var invalid = parameters.some(function (parameter) {
    return !isO(parameter);
  });
  return !invalid;
}

function isObject(value) {
  return isO(value);
}

function isEmptyObject() {
  for (var _len2 = arguments.length, parameters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    parameters[_key2] = arguments[_key2];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isObject.');
  }

  var invalid = parameters.some(function (parameter) {
    if (!isObject(parameter)) return true;

    for (var key in parameter) {
      return true;
    }
  });
  return !invalid;
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @example
 *
 * isObjectLike({}); // => true
 *
 * isObjectLike([]); // => true
 *
 * isObjectLike([1, 2, 3]); // => true
 *
 * isObjectLike(new Function()); // => false
 *
 * isObjectLike(null); // => false
 */


function isObjectLike(value) {
  return value !== null && _typeof(value) === 'object';
}
//# sourceMappingURL=isObject.js.map