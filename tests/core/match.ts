import match from '~/core/match'

describe('match', () => {
  describe('string', () => {
    it('wo default', () => {
      const expr = 'Papayas'
      const expected = 'Papayas are $1.70 a pound.'
      const matched = match(expr, {
        Oranges: 'Oranges are $0.59 a pound.',
        Mangoes: 'Mangoes and papayas are $2.79 a pound.',
        Papayas: expected,
      })
      expect(matched).toEqual(expected)
    })

    it('with default', () => {
      const expr = 'Papayas'
      const expected = 'Papayas are $1.70 a pound.'
      const matched = match(expr, {
        Oranges: 'Oranges are $0.59 a pound.',
        Mangoes: 'Mangoes and papayas are $2.79 a pound.',
        Papayas: expected,
        default: `Sorry, we are out of ${expr}.`,
      })
      expect(matched).toEqual(expected)
    })

    it('with default with no answer', () => {
      const expr = 'text'

      const matched = match(
        expr,
        {
          Oranges: 'Oranges are $0.59 a pound.',
          Mangoes: 'Mangoes and papayas are $2.79 a pound.',
          Papayas: 'Papayas are $1.70 a pound.',
        },
        { default: `Sorry, we are out of ${expr}.` }
      )
      expect(matched).toEqual(`Sorry, we are out of ${expr}.`)
    })
  })

  describe('int', () => {
    const expr = 4

    it('with strict', () => {
      const matched = match(
        expr,
        {
          1: 'One',
          2: 'Two',
          4: 'Four',
          3: `Three`,
        },
        { default: `Unknown Value` }
      )

      expect(matched).toEqual(`Unknown Value`)
    })

    it('non-strict', () => {
      const matched = match(
        expr,
        {
          1: 'One',
          2: 'Two',
          4: 'Four',
          3: `Three`,
        },
        { default: `Four` }
      )

      expect(matched).toEqual(`Four`)
    })
  })

  describe('func', () => {
    it('value func', () => {
      const matched = match('four', {
        one: () => 'One',
        two: () => 'Two',
        four: () => 'Four',
        three: () => `Three`,
      })

      expect(matched).toEqual(`Four`)
    })

    it('value func 2', () => {
      const fourFn = () => 'Four'
      const matched = match('four', {
        one: () => 'One',
        two: () => 'Two',
        four: fourFn,
        three: () => `Three`,
      })

      expect(matched).toEqual(`Four`)
    })

    it('key func', () => {
      const matched = match(2, [
        [() => 2 - 3, `One`],
        [() => 3 - 1, `Two`],
        [() => 1 + 2, `Three`],
      ])

      expect(matched).toEqual(`Two`)
    })

    it('key & value func', () => {
      const matched = match(-1, [
        [() => 2 - 3, () => `One`],
        [() => 3 - 1, () => `Two`],
        [() => 1 + 2, () => `Three`],
      ])

      expect(matched).toEqual(`One`)
    })

    it('key & value func: failed', () => {
      const matched = match(1, [
        [() => 2 - 3, () => `One`],
        [() => 3 - 1, () => `Two`],
        [() => 1 + 2, () => `Three`],
      ])

      expect(matched).toEqual(undefined)
    })

    it('key & value func 2', () => {
      const matched = match(true, [
        [() => false, () => `One`],
        [() => true, () => `Two`],
        [() => false, () => `Three`],
        [() => false, () => `Four`],
      ])

      expect(matched).toEqual(`Two`)
    })

    it('key & value func 3', () => {
      const matched = match(true, [
        [() => false, () => `One`],
        [() => false, () => `Two`],
        [() => false, () => `Three`],
        [() => false, () => `Four`],
      ])

      expect(matched).toEqual(undefined)
    })

    it('key & value func 3', () => {
      const matched = match(
        true,
        [
          [() => false, () => `One`],
          [() => false, () => `Two`],
          [() => false, () => `Three`],
          [() => false, () => `Four`],
        ],
        { default: 'Five' }
      )

      expect(matched).toEqual('Five')
    })
  })
})
