"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBlob;
exports.isBlobs = isBlobs;

/**
 * This function evaluates whether all parameters are blobs
 */
function isBlobs() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isBlob.');
  }

  return !parameters.some(function (parameter) {
    return !isBlob(parameter);
  });
}

function isBlob(value) {
  return Object.prototype.toString.call(value) === '[object Blob]';
}
//# sourceMappingURL=isBlob.js.map