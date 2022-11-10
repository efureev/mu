"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const root_1 = __importDefault(require("../root"));
const getRawTag_1 = __importDefault(require("../getRawTag"));
const nullTag = '[object Null]';
const undefinedTag = '[object Undefined]';
const symToStringTag = root_1.default.Symbol ? root_1.default.Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {TagTypeNullable|string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in new Object(value)
        ? (0, getRawTag_1.default)(value)
        : Object.prototype.toString.call(value);
}
exports.default = baseGetTag;
//# sourceMappingURL=baseGetTag.js.map