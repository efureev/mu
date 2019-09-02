'use strict'

import {isObject} from './../is/isObject'
import {isArray} from '../is/isArray'

/**
 * Converts a `name` - `value` pair to an array of objects with support for nested structures.
 * Useful to construct query strings. For example:
 *
 *     var objects = toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);
 *
 *     // objects then equals:
 *     [
 *         { name: 'hobbies', value: 'reading' },
 *         { name: 'hobbies', value: 'cooking' },
 *         { name: 'hobbies', value: 'swimming' },
 *     ];
 *
 *     var objects = toQueryObjects('dateOfBirth', {
 *         day: 3,
 *         month: 8,
 *         year: 1987,
 *         extra: {
 *             hour: 4
 *             minute: 30
 *         }
 *     }, true); // Recursive
 *
 *     // objects then equals:
 *     [
 *         { name: 'dateOfBirth[day]', value: 3 },
 *         { name: 'dateOfBirth[month]', value: 8 },
 *         { name: 'dateOfBirth[year]', value: 1987 },
 *         { name: 'dateOfBirth[extra][hour]', value: 4 },
 *         { name: 'dateOfBirth[extra][minute]', value: 30 },
 *     ];
 *
 * @param {String} name
 * @param {Object/Array} value
 * @param {Boolean} [recursive=false] True to traverse object recursively
 * @return {Object[]}
 * @todo write tests
 */
export default function toQueryObjects(name, value, recursive = false) {
    const self = toQueryObjects
    let objects = [], i, ln

    if (isArray(value)) {
        for (i = 0, ln = value.length; i < ln; i++) {
            if (recursive) {
                objects = objects.concat(self(name + '[' + i + ']', value[i], true))
            } else {
                objects.push({
                    name : name,
                    value: value[i],
                })
            }
        }
        return objects
    }
    if (isObject(value)) {
        for (i in value) {
            if (Object.prototype.hasOwnProperty.call(value, i)) {
                if (recursive) {
                    objects = objects.concat(self(name + '[' + i + ']', value[i], true))
                } else {
                    objects.push({
                        name : name,
                        value: value[i],
                    })
                }
            }
        }
        return objects
    }

    objects.push({
        name : name,
        value: value,
    })

    return objects
}
