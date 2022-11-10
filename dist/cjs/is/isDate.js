"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDates = void 0;
/**
 * This function evaluates if all the parameters are dates
 *
 * @param {...*} parameters - One or more parameters.
 */
function isDates(...parameters) {
    return !parameters.some(parameter => !isDate(parameter));
}
exports.isDates = isDates;
function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}
exports.default = isDate;
//# sourceMappingURL=isDate.js.map