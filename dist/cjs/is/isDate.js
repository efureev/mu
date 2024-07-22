"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDates = isDates;
exports.default = isDate;
/**
 * This function evaluates if all the parameters are dates
 *
 * @param {...*} parameters - One or more parameters.
 */
function isDates(...parameters) {
    return !parameters.some(parameter => !isDate(parameter));
}
function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}
//# sourceMappingURL=isDate.js.map