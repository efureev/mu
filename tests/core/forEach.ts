import forEach from '../../src/core/forEach'
import { isArray } from '../../src/is'

describe('forEach', () => {
  it('array', () => {
    const data = [1, 2, 3, 4]
    let result = 0

    forEach(data, item => {
      result += item
    })

    expect(result).toEqual(10)
  })

  it('object', () => {
    const result = {}

    const data = {
      id: 1,
      name: 'Name',
      list: [1, 2, 3],
      params: { k1: 'v1', k2: 'v2' },
    }

    forEach(data, (item, propertyName) => {
      if (isArray(item) && item.length > 0) {
        result[propertyName] = item
      }
      if (!isArray(item) && item && propertyName !== 'id') {
        result[propertyName] = item
      }
    })

    expect(result).toEqual({
      name: 'Name',
      list: [1, 2, 3],
      params: { k1: 'v1', k2: 'v2' },
    })
  })
})
