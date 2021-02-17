import removeEmpty from '../../src/object/removeEmpty'

describe('filter in basic object', () => {
  const object = {
    key: 1,
    label: 'Root',
    value: '',
    object: {},
    array: [],
    num: 0,
  }

  it('basic', () => {
    expect(removeEmpty(object)).toEqual({ key: 1, label: 'Root' })
    expect(removeEmpty({})).toEqual({})
    expect(removeEmpty({ num: 0 })).toEqual({})
  })
})

describe('deep', () => {
  expect(
    removeEmpty({
      key: 1,
      label: 'Root',
      children: [{ value: 12, key: 2 }, { value: 1, key: 0 }, {}],
      params: {
        k: 'test',
        k2: 0,
        k3: null,
        k4: {},
        k5: [],
        params: { params: {} },
      },
    })
  ).toEqual({
    key: 1,
    label: 'Root',
    children: [{ value: 12, key: 2 }, { value: 1 }],
    params: { k: 'test' },
  })
})
