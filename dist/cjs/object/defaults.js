"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clone_1 = __importDefault(require("../core/clone"));
const isObject_1 = __importDefault(require("../is/isObject"));
/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @example
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
function defaults(origin, ...destinations) {
    const ln = destinations.length;
    let i = 0, object, key, value, sourceKey;
    for (; i < ln; i++) {
        object = destinations[i];
        if (!(0, isObject_1.default)(object)) {
            continue;
        }
        for (key in object) {
            value = object[key];
            if (value && value.constructor === Object) {
                sourceKey = origin[key];
                if (sourceKey && sourceKey.constructor === Object) {
                    defaults(sourceKey, value);
                }
                else {
                    origin[key] = (0, clone_1.default)(value);
                }
            }
            else {
                if (!Object.prototype.hasOwnProperty.call(origin, key)) {
                    origin[key] = value;
                }
            }
        }
    }
    return origin;
}
exports.default = defaults;
//# sourceMappingURL=defaults.js.map