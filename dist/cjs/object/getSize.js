"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isObject_1 = __importDefault(require("../is/isObject"));
/**
 * Returns count of properties of the object
 *
 * @param {object} object
 * @returns {int}
 */
function getSize(object) {
    if (!(0, isObject_1.default)(object)) {
        throw new Error('Param is not object');
    }
    let size = 0;
    let property;
    for (property in object) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
            size++;
        }
    }
    return size;
}
exports.default = getSize;
//# sourceMappingURL=getSize.js.map