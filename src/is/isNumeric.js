import isArray from './isArray.js'

/**
 * This function evaluates if all the parameters are Numeric
 *
 * @memberof mu
 * @author efureev
 * @param {...*} parameters - One or more parameters.
 */
export default function isNumeric(...parameters) {
  const invalid = parameters.some((parameter) => {
    return isArray(parameter) || isNaN(parseFloat(parameter)) || !isFinite(parameter)
  })

  return !invalid
}
