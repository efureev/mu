"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunctions = isFunctions;
exports.default = isFunction;
const symToStringTag = Symbol.toStringTag;
const asyncTag = '[object AsyncFunction]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', nullTag = '[object Null]', proxyTag = '[object Proxy]', undefinedTag = '[object Undefined]';
/**
 * This function evaluates whether all parameters are function
 */
function isFunctions(...parameters) {
    if (parameters.length === 0) {
        throw new Error('Please provide at least one number to evaluate isInteger.');
    }
    const invalid = parameters.some(parameter => !isFunction(parameter));
    return !invalid;
}
function isFunction(parameter) {
    const tag = baseGetTag(parameter);
    return tag === funcTag || tag === genTag || tag === asyncTag || tag === proxyTag;
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag in new Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 */
function getRawTag(value) {
    const isOwn = Object.prototype.hasOwnProperty.call(value, symToStringTag);
    const tag = value[symToStringTag];
    let unmasked = false;
    try {
        value[symToStringTag] = undefined;
        unmasked = true;
    }
    catch (error) { }
    const result = objectToString(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        }
        else {
            delete value[symToStringTag];
        }
    }
    return result;
}
/**
 * @private
 */
function objectToString(value) {
    return Object.prototype.toString.call(value);
}
//# sourceMappingURL=isFunction.js.map