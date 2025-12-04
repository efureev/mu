import dateToStringUTC from '~/date/toStringUTC'
import dateToString from '~/date/toString'

describe('date/toStringUTC and date/toString', () => {
  it('formats UTC with Z suffix', () => {
    const d = new Date(Date.UTC(2020, 0, 2, 3, 4, 5))
    expect(dateToStringUTC(d)).toBe('2020-01-02T03:04:05Z')
  })

  it('local formatter returns YYYY-MM-DDTHH:mm:SS without timezone', () => {
    const d = new Date(1609459200000) // 2021-01-01T00:00:00.000Z
    const s = dateToString(d)
    expect(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(s)).toBe(true)
  })
})
