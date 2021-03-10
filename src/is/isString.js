/**
 * This function evaluates if all the parameters are strings
 *
 * @memberof µ.is
 * @author efureev
 * {...*} params - One or more parameters.
 */

export default function isString(...parameters) {
  const invalid = parameters.some((parameter) => {
    return typeof parameter !== 'string'
  })

  return !invalid
}
