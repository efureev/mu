/**
 * This function evaluates whether all parameters are blobs
 */
export function isBlobs(...parameters: any[]): boolean {
  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isBlob.')
  }

  return !parameters.some(parameter => !isBlob(parameter))
}

export default function isBlob(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Blob]'
}
