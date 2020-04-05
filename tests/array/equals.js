import {equals} from '../../src/array'

describe('equals', () => {

  it('should return true', () => {
    expect(equals([1, 2, 3, 4], [1, 2, 3, 4])).toBeTruthy()
    expect(equals([], [])).toBeTruthy()
    expect(equals([null], [null])).toBeTruthy()
    expect(equals([undefined], [undefined])).toBeTruthy()

    expect(equals([1, 2, 3, []], [1, 2, 3, []])).toBeTruthy()
    expect(equals([1, '2', {}, []], [1, '2', {}, []])).toBeTruthy()
    expect(equals([1, 2, 3, [5, 6]], [1, 2, 3, [5, 6]])).toBeTruthy()
    expect(equals([1, 2, 3, [5, 6], [5, 6]], [1, 2, 3, [5, 6], [5, 6]])).toBeTruthy()
    expect(equals([1, 2, 3, [5, 6], [5, [5, 6]]], [1, 2, 3, [5, 6], [5, [5, 6]]])).toBeTruthy()

    expect(equals([1, 2, 3, [5, 6], [5, [{}, {t: 2}]]],
      [1, 2, 3, [5, 6], [5, [{}, {t: 2}]]])).toBeTruthy()
    expect(equals([1, 2, 3, [5, 6], [5, [{}, {t: [1, 3]}]]],
      [1, 2, 3, [5, 6], [5, [{}, {t: [1, 3]}]]])).toBeTruthy()
    expect(equals([1, 2, 3, [5, 6], [5, [{}, {t: [1, {k: 1, v: {k: 2}}]}]]],
      [1, 2, 3, [5, 6], [5, [{}, {t: [1, {k: 1, v: {k: 2}}]}]]])).toBeTruthy()
  })

  it('should return false', () => {
    expect(equals([undefined], [null])).toBeFalsy()
    expect(equals([NaN], [NaN])).toBeFalsy()

    expect(equals([1, 2, 3, []], [1, 2, 3, [], []])).toBeFalsy()
    expect(equals([1, 2, 3, []], [1, 2, 3, [1]])).toBeFalsy()
    expect(equals([1, 2, 3, []], [1, 2, '3', [1]])).toBeFalsy()
    expect(equals([1, 2, 3, [5, 6]], [1, 2, 3, [5, 6, 4]])).toBeFalsy()
    expect(equals([1, 2, 3, [5, 6], [5, 6]], [1, 2, 3, [5, 6], [5]])).toBeFalsy()
    expect(equals([1, 2, 3, [5, 6], [5, [5, 6]]], [1, 2, 3, [5, 6], [5, [5, 2]]])).toBeFalsy()
    expect(equals([1, 2, 3, [5, 6], [5, [{}, {}]]], [1, 2, 3, [5, 6], [5, [{}, {t: 2}]]])).toBeFalsy()
    expect(equals([1, 2, 3, [5, 6], [5, [{t: 2}, {}]]], [1, 2, 3, [5, 6], [5, [{}, {t: 2}]]])).toBeFalsy()
  })
})
