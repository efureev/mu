/**
 * This function evaluates whether all parameters are floats
 */
import { reIsFloat } from '~/core/vars'
import type { TextNumber } from '~/internal/types'

export function isFloats(...parameters: any[]): boolean {
  if (parameters.length === 0) throw new Error('Please provide at least one number to evaluate isFloat.')
  if (parameters.some(parameter => Number.isNaN(Number.parseFloat(parameter))))
    throw new Error('Please provide all numbers to evaluate isFloat.')

  return !parameters.some(parameter => !isFloat(Number.parseFloat(parameter)))
}

export default function isFloat(number: any): boolean {
  const n = Number.parseFloat(number)
  return Number(n) === n && n % 1 !== 0
}

/**
 * @example
 * TRUE:
 *  where `isFloat` === true && '2.0', '-2.0', -2.212, +2.212, '+2.212', '3.14'
 */
export function isFloatCanonical(number: TextNumber): boolean {
  return reIsFloat.test(String(number))
}
