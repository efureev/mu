import parseISO from '~/date/parseISO'

describe('date/parseISO', () => {
  it('parses ISO 8601/RFC3339 variants', () => {
    expect(parseISO('2025-12-04T22:58:00Z')?.toISOString()).toBe('2025-12-04T22:58:00.000Z')
    expect(parseISO('2025-12-04T22:58:00.123Z')?.toISOString()).toBe('2025-12-04T22:58:00.123Z')
    expect(parseISO('2025-12-04T22:58:00+03:00') instanceof Date).toBe(true)
    expect(parseISO('2025-12-04') instanceof Date).toBe(true)
  })

  it('parses epoch milliseconds string', () => {
    const ms = Date.UTC(2020, 0, 2, 3, 4, 5)
    expect(parseISO(String(ms))?.getTime()).toBe(ms)
  })

  it('rejects non-ISO human strings', () => {
    expect(parseISO('12/04/2025')).toBeNull()
    expect(parseISO('Thu, 01 Jan 1970 00:00:00 GMT')).toBeNull()
    // @ts-ignore
    expect(parseISO(null)).toBeNull()
    expect(parseISO('')).toBeNull()
    expect(parseISO(' ')).toBeNull()
  })
})
