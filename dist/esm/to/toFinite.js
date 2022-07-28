import toNumber from './toNumber';
/**
 * Converts `value` to a finite number.
 *
 * @example
 *
 * toFinite(3.2);
 * // => 3.2
 *
 * toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * toFinite('3.2');
 * // => 3.2
 */

export default function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }

  value = toNumber(value);

  if (value === Infinity || value === -Infinity) {
    return value < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
  }

  return value === value ? value : 0;
}
//# sourceMappingURL=toFinite.js.map