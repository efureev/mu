"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = forEach;
const arrayEach_1 = __importDefault(require("../array/arrayEach"));
const keys_1 = __importDefault(require("./keys"));
const isArrayLike_1 = __importDefault(require("../is/isArrayLike"));
function forEach(collection, iterateFn) {
    if (Array.isArray(collection)) {
        return (0, arrayEach_1.default)(collection, iterateFn);
    }
    const baseEach = (object, iterateFn) => {
        return object && createBaseFor()(object, iterateFn, keys_1.default);
    };
    const func = createBaseEach(baseEach);
    return func(collection, iterateFn);
}
function createBaseFor(fromRight = false) {
    return function (object, iterateFn, keysFunc) {
        let index = -1, iterable = new Object(object), properties = keysFunc(object), length = properties.length, key;
        while (length--) {
            key = properties[fromRight ? length : ++index];
            if (iterateFn(iterable[key], key, iterable) === false) {
                break;
            }
        }
        return object;
    };
}
function createBaseEach(eachFunc, fromRight = false) {
    return function (collection, iterateFn) {
        if (collection == null) {
            return collection;
        }
        if (!(0, isArrayLike_1.default)(collection)) {
            return eachFunc(collection, iterateFn);
        }
        const length = collection.length;
        const iterable = new Object(collection);
        let index = fromRight ? length : -1;
        while (fromRight ? index-- : ++index < length) {
            if (iterateFn(iterable[index], index, iterable) === false) {
                break;
            }
        }
        return collection;
    };
}
//# sourceMappingURL=forEach.js.map