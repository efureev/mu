import { clear } from '~/array'

describe('checking basics', () => {
  it('create', () => {
    const array = [1, 2, 3, 4, 5]
    clear(array)
    expect(array).toEqual([])
  })
})
