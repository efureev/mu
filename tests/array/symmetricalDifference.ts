import { symmetricalDifference } from '../../src/array'

describe('symmetricalDifference', () => {
  it('Base', () => {
    expect(symmetricalDifference([1, 2, 3, 4, 5], [1, 4, 8])).toEqual([2, 3, 5, 8])
  })
})
