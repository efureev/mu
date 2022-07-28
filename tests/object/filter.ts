import { filter } from '../../src/object'

describe('filter', () => {
  const scores = {
    John: 2,
    Sarah: 3,
    Janet: 1,
  }

  it('Filter by value', () => {
    expect(filter(scores, ([key, value]) => value > 1)).toEqual({ John: 2, Sarah: 3 })
    expect(filter(scores, ([name, score]) => score > 3)).toEqual({})
    expect(filter(scores, ([name, score]) => score > 1 && score < 3)).toEqual({ John: 2 })
  })

  it('Filter by key', () => {
    expect(filter(scores, ([name, value]) => name === 'John')).toEqual({ John: 2 })
  })
})
