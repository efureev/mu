/**
 * This function evaluates if all the parameters are strings
 */
export function isStrings(...parameters: any[]): boolean {
  return !parameters.some(parameter => !isString(parameter))
}

export default function isString(value: any): boolean {
  return typeof value === 'string'
}
