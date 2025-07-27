"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = equals;
const equals_1 = __importDefault(require("../object/equals"));
const equals_2 = __importDefault(require("../array/equals"));
const isObject_1 = __importDefault(require("../is/isObject"));
const isString_1 = __importDefault(require("../is/isString"));
const isBoolean_1 = __importDefault(require("../is/isBoolean"));
const isNumeric_1 = __importDefault(require("../is/isNumeric"));
const isFunction_1 = __importDefault(require("../is/isFunction"));
/**
 * @param {*} first
 * @param {*} second
 * @returns {boolean}
 */
function equals(first, second) {
    if (first === second) {
        return true;
    }
    if ((0, isString_1.default)(first) || (0, isNumeric_1.default)(first) || (0, isBoolean_1.default)(first)) {
        return first === second;
    }
    if ((first instanceof Date && second instanceof Date) || (first instanceof RegExp && second instanceof RegExp)) {
        return first.toString() === second.toString();
    }
    if (Array.isArray(first) && Array.isArray(second)) {
        return (0, equals_2.default)(first, second);
    }
    if ((0, isObject_1.default)(first) && (0, isObject_1.default)(second)) {
        return (0, equals_1.default)(first, second);
    }
    if ((0, isFunction_1.default)(first) && (0, isFunction_1.default)(second)) {
        return ('' + first).valueOf() === ('' + second).valueOf();
    }
    return false;
}
//# sourceMappingURL=equals.js.map