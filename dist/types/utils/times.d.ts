import type { TextNumber } from '../internal/types';
/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument; (index).
 *
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} [iteratee] The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * times(3); // => ['0', '1', '2']
 */
type F = (idx: number) => TextNumber;
export default function times(n?: number, iteratee?: TextNumber | F): TextNumber[];
export {};
//# sourceMappingURL=times.d.ts.map