"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFunction;
exports.isFunctions = isFunctions;
var symToStringTag = Symbol.toStringTag;
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    nullTag = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag = '[object Undefined]';
/**
 * This function evaluates whether all parameters are function
 */

function isFunctions() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isInteger.');
  }

  var invalid = parameters.some(function (parameter) {
    return !isFunction(parameter);
  });
  return !invalid;
}

function isFunction(parameter) {
  var tag = baseGetTag(parameter);
  return tag === funcTag || tag === genTag || tag === asyncTag || tag === proxyTag;
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 */


function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag in new Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 */


function getRawTag(value) {
  var isOwn = Object.prototype.hasOwnProperty.call(value, symToStringTag);
  var tag = value[symToStringTag];
  var unmasked = false;

  try {
    value[symToStringTag] = undefined;
    unmasked = true;
  } catch (error) {}

  var result = objectToString(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}
/**
 * @private
 */


function objectToString(value) {
  return Object.prototype.toString.call(value);
}
//# sourceMappingURL=isFunction.js.map