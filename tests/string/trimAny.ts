import { trimAny } from '~/string/trim'

describe('trimAny', () => {
  it('trim Any', () => {
    const string = '-___ /test/es/page/-- __'

    expect(trimAny('/es/test/es/page/es/', '/')).toEqual('es/test/es/page/es')
    expect(trimAny('/_/--es/test/es/page/es/-_', ['/', '-', '_'])).toEqual('es/test/es/page/es')
    expect(trimAny(string, ['/'])).toEqual(string)
    expect(trimAny(string, ['/', '-', '_'])).toEqual(' /test/es/page/-- ')
    expect(trimAny(string, ['/', '-', '_', ' '])).toEqual('test/es/page')
    expect(trimAny('### <---- APP_ENV -> ###', ['#', '-', '<', '>', ' '])).toEqual('APP_ENV')
  })
})
