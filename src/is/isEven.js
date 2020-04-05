/**
 * This function evaluates whether all parameters are even
 * @memberof µ.is
 * @author scottwestover
 * @param {...*} parameters - One or more parameters.
 */
export default function isEven(...parameters) {
  for (const parameter of parameters) {
    // Only accept finite numbers
    if (Number.isNaN(parseFloat(parameter)) || !Number.isFinite(Number(parameter))) return false
    // Only accept evens
    else if (parameter % 2 !== 0) {
      return false
    }
  }
  return true
}
