import { reNonAlpha } from '~/core/vars'
import { trimAny } from './trim'
import { removeConsecutiveDuplicates } from './replace'

/**
 * Removing non-alphanumeric chars
 *
 * [^0-9a-zA-Z_]
 *
 * @param {string} str
 * @param {string} replace
 * @param {string|string[]} round
 * @returns {string}
 */
export default function normalizeName(
  str: string,
  replace: string = '-',
  round: string | string[] = ['-', '_']
): string {
  return normalizeCustom(str.trim(), replace, reNonAlpha, round)
}

export function normalizeCustom(str: string, replace: string = '-', re: RegExp, round: string | string[]): string {
  return removeConsecutiveDuplicates(trimAny(str.trim().replace(re, replace), round), round)
}
