import trimSuffix from './../../src/string/trimSuffix'

describe('trimSuffix', () => {
  it('', () => {
    const string = '/es/test/es/page/es/'

    expect(trimSuffix(string, '/')).toEqual('/es/test/es/page/es')
    expect(trimSuffix(string, '/es/')).toEqual('/es/test/es/page')
    expect(trimSuffix(string, '/es/page/es/')).toEqual('/es/test')
    expect(trimSuffix(string, '/es/test/es/page/es/')).toEqual('')

    expect(trimSuffix(string, '/es/test/es/page/es//')).toEqual(string)
    expect(trimSuffix(string, '//es/test/es/page/es/')).toEqual(string)
    expect(trimSuffix(string, '')).toEqual(string)
    expect(trimSuffix(string, '/es')).toEqual(string)
    expect(trimSuffix(string, null)).toEqual(string)
  })
})
