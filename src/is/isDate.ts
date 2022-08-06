/**
 * This function evaluates if all the parameters are dates
 *
 * @param {...*} parameters - One or more parameters.
 */
export function isDates(...parameters: any[]): boolean {
  return !parameters.some(parameter => !isDate(parameter))
}

export default function isDate(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Date]'
}
