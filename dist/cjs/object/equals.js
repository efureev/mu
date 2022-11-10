"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Compares the contents of 2 or more objects using strict equality.
 */
const isObject_1 = __importDefault(require("../is/isObject"));
function equal(origin, ...list) {
    let i, l, leftChain, rightChain;
    if (!(0, isObject_1.default)(origin) || list.length === 0) {
        throw new Error('Need two or more arguments to compare');
    }
    function compare2Objects(x, y) {
        let p;
        // remember that NaN === NaN returns false
        // and isNaN(undefined) returns true
        // isNumeric(x,y)
        if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
            return true;
        }
        // Compare primitives and functions.
        // Check if both arguments link to the same object.
        // Especially useful on the step where we compare prototypes
        if (x === y) {
            return true;
        }
        // Works in case when functions are created in constructor.
        // Comparing dates is a common scenario. Another built-ins?
        // We can even handle functions passed across iframes
        if ((typeof x === 'function' && typeof y === 'function') ||
            (x instanceof Date && y instanceof Date) ||
            (x instanceof RegExp && y instanceof RegExp) ||
            (x instanceof String && y instanceof String) ||
            (x instanceof Number && y instanceof Number)) {
            return x.toString() === y.toString();
        }
        // At last checking prototypes as good as we can
        if (!(x instanceof Object && y instanceof Object)) {
            return false;
        }
        if (Object.prototype.isPrototypeOf.call(x, y) || Object.prototype.isPrototypeOf.call(y, x)) {
            return false;
        }
        if (x.constructor !== y.constructor) {
            return false;
        }
        if (x.prototype !== y.prototype) {
            return false;
        }
        // Check for infinitive linking loops
        if (leftChain.includes(x) || rightChain.includes(y)) {
            return false;
        }
        // Quick checking of one object being a subset of another.
        // todo: cache the structure of arguments[0] for performance
        for (p in y) {
            if (Object.prototype.isPrototypeOf.call(y, p) !== Object.prototype.isPrototypeOf.call(x, p)) {
                return false;
            }
            else if (typeof y[p] !== typeof x[p]) {
                return false;
            }
        }
        for (p in x) {
            if (Object.prototype.isPrototypeOf.call(y, p) !== Object.prototype.isPrototypeOf.call(x, p)) {
                return false;
            }
            else if (typeof y[p] !== typeof x[p]) {
                return false;
            }
            switch (typeof x[p]) {
                case 'object':
                case 'function':
                    leftChain.push(x);
                    rightChain.push(y);
                    if (!compare2Objects(x[p], y[p])) {
                        return false;
                    }
                    leftChain.pop();
                    rightChain.pop();
                    break;
                default:
                    if (x[p] !== y[p]) {
                        return false;
                    }
                    break;
            }
        }
        return true;
    }
    for (i = 0, l = list.length; i < l; i++) {
        leftChain = []; // @Todo: this can be cached
        rightChain = [];
        if (!compare2Objects(origin, list[i])) {
            return false;
        }
    }
    return true;
}
exports.default = equal;
//# sourceMappingURL=equals.js.map