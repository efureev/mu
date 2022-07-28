import equals from '../../src/object/equals'

describe('equal', () => {
  const errMsg = 'Need two or more arguments to compare'

  const first = {
    key: 0,
    label: 'Root',
    items: {
      one: {
        key: 1,
        label: 'One',
        val: 111,
        items: {
          two: {
            key: 2,
            label: 'Two',
            val: 111,
            items: {},
          },
          three: {
            key: 3,
            label: 'Three',
            val: 111,
            items: {},
          },
        },
      },
    },
  }

  const second = {
    key: 0,
    label: 'Root',
    items: {
      one: {
        key: 1,
        label: 'One',
        val: 111,
        items: {
          two: {
            key: 2,
            label: 'Two',
            val: 111,
            items: {},
          },
          three: {
            key: 3,
            label: 'Three',
            val: 111,
            items: {},
          },
        },
      },
    },
  }

  it('should throw an error if no parameters are provided', () => {
    // @ts-ignore
    expect(() => equals()).toThrowError(errMsg)
    // @ts-ignore
    expect(() => equals(NaN, NaN)).toThrowError(errMsg)
    // @ts-ignore
    expect(() => equals(1, 1)).toThrowError(errMsg)
  })

  it('should return true', () => {
    expect(equals({}, {})).toBeTruthy()
    expect(equals({ k: 1 }, { k: 1 })).toBeTruthy()
    expect(equals({ k: 1, v: 2 }, { k: 1, v: 2 })).toBeTruthy()
    expect(equals({ k: 1, v: [] }, { k: 1, v: [] })).toBeTruthy()
    expect(equals({ k: 1, v: [1, 2, 4] }, { k: 1, v: [1, 2, 4] })).toBeTruthy()
    expect(equals({ k: 1, v: [1, 2, '4'] }, { k: 1, v: [1, 2, '4'] })).toBeTruthy()
    expect(
      equals(
        {
          k: 1,
          v: [1, 2, '4'],
          fn: () => {},
        },
        {
          k: 1,
          v: [1, 2, '4'],
          fn: () => {},
        }
      )
    ).toBeTruthy()
    expect(equals({ k: 1, v: [1, 2, {}] }, { k: 1, v: [1, 2, {}] })).toBeTruthy()
    expect(equals({ k: 1, v: { k: 2 } }, { k: 1, v: { k: 2 } })).toBeTruthy()
    expect(
      equals({ k: 1, v: { k: 2, v: { k: 3, v: { k: 4 } } } }, { k: 1, v: { k: 2, v: { k: 3, v: { k: 4 } } } })
    ).toBeTruthy()

    expect(equals(first, second)).toBeTruthy()
    expect(equals(new Object(), new Object())).toBeTruthy()
    expect(equals(new Object(null), new Object(null))).toBeTruthy()
    expect(equals(new Object(null), new Object(null), new Object(null))).toBeTruthy()
  })

  it('should return false', () => {
    expect(equals({}, {})).toBeTruthy()
    expect(equals({ k: 1 }, { k: 1 })).toBeTruthy()
    expect(equals({ k: 1, v: 2 }, { k: 1, v: 2 })).toBeTruthy()
    expect(equals({ k: 1, v: [] }, { k: 1, v: [] })).toBeTruthy()
    expect(equals({ k: 1, v: { k: 2 } }, { k: 1, v: { k: 2 } })).toBeTruthy()
    expect(
      equals({ k: 1, v: { k: 2, v: { k: 3, v: { k: 4 } } } }, { k: 1, v: { k: 2, v: { k: 3, v: { k: 4 } } } })
    ).toBeTruthy()

    expect(equals(first, second)).toBeTruthy()

    expect(equals(new Object(), new Object(2))).toBeFalsy()
  })
})
