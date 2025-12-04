/**
 * Parse a date from a strict ISO 8601/RFC 3339 string or epoch milliseconds.
 * Returns `Date` on success, otherwise `null`.
 *
 * Accepted examples:
 * - 2025-12-04T22:58:00Z
 * - 2025-12-04T22:58:00.123Z
 * - 2025-12-04T22:58:00+03:00
 * - 2025-12-04 (treated as midnight UTC implicitly by JS engine)
 * - "1733353080000" (epoch ms as string)
 * - 1733353080000 (epoch ms as number) — use direct `new Date(ms)` instead of this helper
 *
 * Notes:
 * - Non-ISO human strings like "12/04/2025" are rejected to avoid ambiguous local vs UTC parsing.
 * - For strict timezone control, prefer passing/formatting in UTC (`toStringUTC`) or with `Intl`.
 */
export default function parseISO(input: string): Date | null {
  if (typeof input !== 'string') {
    return null
  }

  const trimmed = input.trim()
  if (trimmed.length === 0) {
    return null
  }

  // Epoch milliseconds in string form
  if (/^\d{13}$/.test(trimmed)) {
    const ms = Number(trimmed)

    return Number.isFinite(ms) ? new Date(ms) : null
  }

  // Strict ISO 8601/RFC3339 pattern (date + optional time + timezone)
  // yyyy-mm-dd
  const isoDate = /^(\d{4})-(\d{2})-(\d{2})$/
  // yyyy-mm-ddThh:mm:ss(.sss)?(Z|[+-]hh:mm)
  const isoDateTime = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d{1,3})?(Z|[+-]\d{2}:\d{2})$/

  if (isoDate.test(trimmed) || isoDateTime.test(trimmed)) {
    const d = new Date(trimmed)

    return Number.isNaN(d.getTime()) ? null : d
  }

  return null
}
