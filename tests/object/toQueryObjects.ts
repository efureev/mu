import toQueryObjects from './../../src/object/toQueryObjects'

describe('toQueryObjects', () => {
  it('should return array of objects', () => {
    expect(toQueryObjects('hobbies', ['reading', 'cooking', 'swimming'])).toEqual([
      { name: 'hobbies', value: 'reading' },
      { name: 'hobbies', value: 'cooking' },
      { name: 'hobbies', value: 'swimming' },
    ])
  })

  it('should return array of objects', () => {
    expect(
      toQueryObjects(
        'dateOfBirth',
        {
          day: 3,
          month: 8,
          year: 1987,
          extra: {
            hour: 4,
            minute: 30,
          },
        },
        true
      )
    ).toEqual([
      { name: 'dateOfBirth[day]', value: 3 },
      { name: 'dateOfBirth[month]', value: 8 },
      { name: 'dateOfBirth[year]', value: 1987 },
      { name: 'dateOfBirth[extra][hour]', value: 4 },
      { name: 'dateOfBirth[extra][minute]', value: 30 },
    ])
  })
})
