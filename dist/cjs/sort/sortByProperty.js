"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param {string} property
 * @param {boolean} asc
 * @param {boolean} ignoreCase
 * @return {(function(*, *): (number))|*}
 */
const isString_1 = __importDefault(require("../is/isString"));
function sortByProperty(property, asc = true, ignoreCase = true) {
    return function (a, b) {
        let aProp = a[property];
        if (ignoreCase && (0, isString_1.default)(aProp)) {
            aProp = aProp.toUpperCase();
        }
        let bProp = b[property];
        if (ignoreCase && (0, isString_1.default)(bProp)) {
            bProp = bProp.toUpperCase();
        }
        if (aProp > bProp) {
            return asc ? 1 : -1;
        }
        if (aProp < bProp) {
            return asc ? -1 : 1;
        }
        return 0;
    };
}
exports.default = sortByProperty;
//# sourceMappingURL=sortByProperty.js.map