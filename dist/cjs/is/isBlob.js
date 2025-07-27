"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBlobs = isBlobs;
exports.default = isBlob;
/**
 * This function evaluates whether all parameters are blobs
 */
function isBlobs(...parameters) {
    if (parameters.length === 0) {
        throw new Error('Please provide at least one number to evaluate isBlob.');
    }
    return !parameters.some(parameter => !isBlob(parameter));
}
function isBlob(value) {
    return Object.prototype.toString.call(value) === '[object Blob]';
}
//# sourceMappingURL=isBlob.js.map