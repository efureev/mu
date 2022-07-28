import trimPrefix from './../../src/string/trimPrefix'

describe('trimPrefix', () => {
  it('', () => {
    const string = '/es/test/es/page/es/'

    expect(trimPrefix(string, '/')).toEqual('es/test/es/page/es/')
    expect(trimPrefix(string, '/es')).toEqual('/test/es/page/es/')
    expect(trimPrefix(string, '/es/test/es/page')).toEqual('/es/')
    expect(trimPrefix(string, '/es/test/es/page/es/')).toEqual('')

    expect(trimPrefix(string, '/es/test/es/page/es//')).toEqual(string)
    expect(trimPrefix(string, '')).toEqual(string)
    expect(trimPrefix(string, 'es/')).toEqual(string)
    expect(trimPrefix(string, null)).toEqual(string)
  })
})
