'use strict'

/**
 * This function add leading zero
 *
 * @memberof µ.number
 * @author efureev
 *
 * @param {number|string} num
 * @returns {string}
 */
export function pad(num) {
    const n = Number.parseFloat(num)
    if (isNaN(n))
        throw Error('Please provide at least one number.')

    return n < 10 ? '0' + n.toString(10) : n.toString(10)
}
