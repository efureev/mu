import { times } from '~/utils'

describe('times', () => {
  it('basic', () => {
    expect(times(3)).toEqual([0, 1, 2])
  })

  it('string', () => {
    expect(times(1, 'test')).toEqual(['test'])
    expect(times(2, 'test')).toEqual(['test', 'test'])
    expect(times(3, 4)).toEqual([4, 4, 4])
  })

  it('function', () => {
    expect(times(1, () => 'test')).toEqual(['test'])
    expect(times(2, () => 'test')).toEqual(['test', 'test'])
    expect(times(3, String)).toEqual(['0', '1', '2'])
  })
})
