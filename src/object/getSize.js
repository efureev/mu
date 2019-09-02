'use strict'

import {isObject} from './../is/isObject'

/**
 * Возвращает количество свойств объекта
 *
 * @memberof µ.object
 *
 * @param {object} object
 * @returns {int}
 */
export default function getSize(object) {
    if (!isObject(object)) {
        throw Error('Param is not object')
    }

    let size = 0
    let property

    for (property in object) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
            size++
        }
    }

    return size
}
