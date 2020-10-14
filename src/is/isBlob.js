/**
 * This function evaluates whether all parameters are blobs
 * @memberof µ.is
 * @author efureev
 * @param {...*} parameters - One or more parameters.
 */
export default function isBlob(...parameters) {
  if (parameters.length === 0) throw new Error('Please provide at least one number to evaluate isBlob.')

  return !parameters.some((parameter) => toString.call(parameter) !== '[object Blob]')
}
