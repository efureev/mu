import { intersect, random } from '~/array'

describe('random', () => {
  it('base', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const item = random(list)

    expect(intersect(list, [item])).toBeTruthy()
  })
})
