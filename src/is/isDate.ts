/**
 * This function evaluates if all the parameters are dates
 *
 * @param {...*} parameters - One or more parameters.
 */
export default function isDate(...parameters: any[]): boolean {
  const invalid = parameters.some(parameter => {
    return Object.prototype.toString.call(parameter) !== '[object Date]'
  })

  return !invalid
}
