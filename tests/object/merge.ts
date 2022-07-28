import merge from '../../src/object/merge'

describe('merge', () => {
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
        val: 222,
        items: {
          two: {
            key: 2,
            label: 'Two',
            val: 222,
            items: {},
          },
        },
      },
    },
  }

  const result = {
    key: 0,
    label: 'Root',
    items: {
      one: {
        key: 1,
        label: 'One',
        val: 222,
        items: {
          two: {
            key: 2,
            label: 'Two',
            val: 222,
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

  it('should return RESULT', () => {
    expect(merge(first, second)).toEqual(result)
  })

  it('should return first', () => {
    // @ts-ignore
    expect(merge(first, 1, NaN, {}, [])).toEqual(first)
  })

  const js = {
    companyName: 'JS',
    products: ['JS', 'GWT', 'Designer'],
    isSuperCool: true,
    office: {
      size: 2000,
      location: 'Palo Alto',
      isFun: true,
    },
  }

  const newStuff = {
    companyName: 'Jacksonville',
    products: ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
    office: {
      size: 40000,
      location: 'Redwood City',
    },
  }

  it('should return RESULT 2', () => {
    expect(merge(js, newStuff)).toEqual({
      companyName: 'Jacksonville',
      products: ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
      isSuperCool: true,
      office: {
        size: 40000,
        location: 'Redwood City',
        isFun: true,
      },
    })
  })
})
