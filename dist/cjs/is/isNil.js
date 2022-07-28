"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNil;
exports.isNils = isNils;
exports.isNull = isNull;
exports.isNulls = isNulls;

/**
 * This function evaluates whether all parameters are null
 */
function isNulls() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one param to evaluate isNull.');
  }

  return !parameters.some(function (parameter) {
    return !isNull(parameter);
  });
}

function isNils() {
  for (var _len2 = arguments.length, parameters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    parameters[_key2] = arguments[_key2];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one param to evaluate isNull.');
  }

  return !parameters.some(function (parameter) {
    return !isNil(parameter);
  });
}

function isNil(value) {
  return value == null;
}

function isNull(value) {
  return value === null;
}
//# sourceMappingURL=isNil.js.map