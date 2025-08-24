import { elapsed } from '~/date/elapsed'

describe('elapsed function', () => {
  it('should return 0 when both dates are the same', () => {
    const date = new Date()
    expect(elapsed(date, date)).toBe(0)
  })

  it('should return correct milliseconds difference when dateA is after dateB', () => {
    const dateB = new Date('2023-08-24T10:00:00Z')
    const dateA = new Date('2023-08-24T10:00:01Z')
    expect(elapsed(dateA, dateB)).toBe(1000)
  })

  it('should return correct milliseconds difference when dateA is before dateB', () => {
    const dateA = new Date('2023-08-24T10:00:00Z')
    const dateB = new Date('2023-08-24T10:00:01Z')
    expect(elapsed(dateA, dateB)).toBe(1000)
  })
})
