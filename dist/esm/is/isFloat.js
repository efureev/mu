/**
 * This function evaluates whether all parameters are floats
 */
import { reIsFloat } from '../core/vars';
export function isFloats(...parameters) {
  if (parameters.length === 0) throw new Error('Please provide at least one number to evaluate isFloat.');
  if (parameters.some(parameter => Number.isNaN(Number.parseFloat(parameter)))) throw new Error('Please provide all numbers to evaluate isFloat.');
  return !parameters.some(parameter => !isFloat(Number.parseFloat(parameter)));
}
export default function isFloat(number) {
  const n = Number.parseFloat(number);
  return Number(n) === n && n % 1 !== 0;
}
/**
 * @example
 * TRUE:
 *  where `isFloat` === true && '2.0', '-2.0', -2.212, +2.212, '+2.212', '3.14'
 */

export function isFloatCanonical(number) {
  return reIsFloat.test(String(number));
}
//# sourceMappingURL=isFloat.js.map