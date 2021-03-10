/**
 * This function evaluates if all the parameters are boolean
 *
 * @memberof mu
 * @author efureev
 * @param {...*} parameters - One or more parameters.
 */
export default function isBoolean(...parameters) {
  const invalid = parameters.some((parameter) => {
    return !(
      parameter === true ||
      parameter === false ||
      Object.prototype.toString.call(parameter) === '[object Boolean]'
    )
  })

  return !invalid
}
