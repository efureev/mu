import equals from '../../src/object/equals.js'

describe('equals', () => {
  it('compare string', () => {
    expect(equals('[1, 2, 3, 4]', '[1, 2, 3, 4]')).toBeTruthy()
    expect(equals('', '')).toBeTruthy()
    expect(equals(' ', ' ')).toBeTruthy()
    expect(equals('\t', '\t')).toBeTruthy()
    expect(equals('\n', '\n')).toBeTruthy()
    expect(equals('124 123', '124 123')).toBeTruthy()

    expect(equals('[1, 2, 3, 4]', '[1, 2, 3, 4 ]')).toBeFalsy()
    expect(equals('', ' ')).toBeFalsy()
    expect(equals(' ', ' - ')).toBeFalsy()
    expect(equals('\t', '\n')).toBeFalsy()
    expect(equals('\n', '\n\n')).toBeFalsy()
    expect(equals('124 123', ' 124 123')).toBeFalsy()
  })

  it('compare number', () => {
    expect(equals(1, 1)).toBeTruthy()
    expect(equals(0, 0)).toBeTruthy()
    expect(equals(0, -0)).toBeTruthy()
    expect(equals(-12, -12)).toBeTruthy()
    expect(equals(-12.21, -12.21)).toBeTruthy()
    expect(equals(2.21, 2.21)).toBeTruthy()

    expect(equals(1, 2)).toBeFalsy()
    expect(equals(0, 2)).toBeFalsy()
    expect(equals(12, -12)).toBeFalsy()
    expect(equals(-12.21, -12.212)).toBeFalsy()
    expect(equals(2.211, 2.21)).toBeFalsy()
  })

  it('compare object', () => {
    expect(equals({}, {})).toBeTruthy()
    expect(equals({ k: 1 }, { k: 1 })).toBeTruthy()
    expect(equals({ k: 1, v: [] }, { k: 1, v: [] })).toBeTruthy()
    expect(equals({ k: 1, v: null }, { k: 1, v: null })).toBeTruthy()
    expect(!equals({ k: 1, v: null }, { k: 1, v: undefined })).toBeTruthy()
    expect(equals({ k: 1, v: [12, 3] }, { k: 1, v: [12, 3] })).toBeTruthy()
    expect(equals({ k: 1, v: [12, 3], items: { k: 3 } }, { k: 1, v: [12, 3], items: { k: 3 } })).toBeTruthy()
  })

  it('compare arrays', () => {
    expect(equals([1, 2, 3, 4], [1, 2, 3, 4])).toBeTruthy()
    expect(equals([], [])).toBeTruthy()
    expect(equals([null], [null])).toBeTruthy()
    expect(equals([undefined], [undefined])).toBeTruthy()

    expect(equals([1, 2, 3, []], [1, 2, 3, []])).toBeTruthy()
    expect(equals([1, 2, 3, [5, 6]], [1, 2, 3, [5, 6]])).toBeTruthy()
  })

  it('compare bool', () => {
    expect(equals(true, true)).toBeTruthy()
    expect(equals(false, false)).toBeTruthy()
    expect(!equals(false, true)).toBeTruthy()
    expect(!equals(true, false)).toBeTruthy()
  })

  it('compare functions', () => {
    const dFn = new Date()
    expect(
      equals(
        () => {},
        () => {}
      )
    ).toBeTruthy()
    expect(equals(dFn, dFn)).toBeTruthy()
    expect(
      equals(new Date(Date.parse('1970-01-01T00:00:00')), new Date(Date.parse('1970-01-01T00:00:00')))
    ).toBeTruthy()
    expect(equals(new Date(123), new Date(123))).toBeTruthy()
    expect(equals(new Function(), new Function())).toBeTruthy()
    expect(!equals(() => {}, new Function())).toBeTruthy()
  })
})
