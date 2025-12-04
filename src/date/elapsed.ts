/**
 * Returns difference in milliseconds between dates
 *
 * @param {Date} dateA The first date.
 * @param {Date} [dateB=new Date()] (optional) The second date. Evaluated in the same time basis as `dateA`.
 * @return {Number} The difference in milliseconds
 */
export function elapsed(dateA: Date, dateB: Date = new Date()): number {
  return Math.abs(dateA.getTime() - dateB.getTime())
}
