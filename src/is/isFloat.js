/**
 * This function evaluates whether all parameters are floats
 * @memberof µ.is
 * @author efureev
 * @param {...*} parameters - One or more parameters.
 */
import { reIsFloat } from '../core/vars'

export default function isFloats(...parameters) {
  if (parameters.length === 0) throw new Error('Please provide at least one number to evaluate isFloat.')
  if (parameters.some((parameter) => Number.isNaN(Number.parseFloat(parameter))))
    throw new Error('Please provide all numbers to evaluate isFloat.')

  return !parameters.some((parameter) => !isFloat(Number.parseFloat(parameter)))
}

export function isFloat(number) {
  const n = Number.parseFloat(number)
  return Number(n) === n && n % 1 !== 0
}

/**
 * @param number
 * @return {boolean}
 *
 * @example
 * TRUE:
 *  where `isFloat` === true && '2.0', '-2.0', -2.212, +2.212, '+2.212', '3.14'
 */
export function isFloatCanonical(number) {
  return reIsFloat.test(number)
}
