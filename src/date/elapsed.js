'use strict'

import { now } from '.'

/**
 * Returns difference in milliseconds between dates
 *
 * @param {Date} dateA The first date.
 * @param {Date} [dateB=new Date()] (optional) The second date.
 * @return {Number} The difference in milliseconds
 *
 * @memberof µ.date
 * @author efureev
 */
export function elapsed(dateA, dateB) {
  return Math.abs(dateA - (dateB || now()))
}
