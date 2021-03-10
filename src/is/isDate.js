/**
 * This function evaluates if all the parameters are dates
 *
 * @memberof mu
 * @author efureev
 * @param {...*} parameters - One or more parameters.
 */
export default function isDate(...parameters) {
  const invalid = parameters.some((parameter) => {
    return Object.prototype.toString.call(parameter) !== '[object Date]'
  })

  return !invalid
}
