'use strict'


/**
 * @method
 * Shallow compares the contents of 2 objects using strict equality. Objects are
 * considered equal if they both have the same set of properties and the
 * value for those properties equals the other in the corresponding object.
 *
 *     // Returns true
 *     equals({
 *         foo: 1,
 *         bar: 2
 *     }, {
 *         foo: 1,
 *         bar: 2
 *     });
 *
 * @param {Object} object1
 * @param {Object} object2
 * @return {Boolean} `true` if the objects are equal.
 * @todo write tests
 */
export default (function () {
    const check = function (o1, o2) {
        let key

        for (key in o1) {
            if (Object.prototype.hasOwnProperty.call(o1, key)) {
                if (o1[key] !== o2[key]) {
                    return false
                }
            }
        }

        return true
    }

    return function (object1, object2) {
        // Short circuit if the same object is passed twice
        if (object1 === object2) {
            return true
        }

        if (object1 && object2) {
            // Do the second check because we could have extra keys in
            // object2 that don't exist in object1.
            return check(object1, object2) && check(object2, object1)
        } else if (!object1 && !object2) {
            return object1 === object2
        } else {
            return false
        }
    }
})()
