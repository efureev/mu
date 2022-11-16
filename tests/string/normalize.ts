import normalize from '~/string/normalize'

describe('normalize', () => {
  it('normalize string', () => {
    expect(normalize('hi')).toEqual('hi')
    expect(normalize('  hi  ')).toEqual('hi')
    expect(normalize('  hi')).toEqual('hi')
    expect(normalize('----hi---')).toEqual('hi')
    expect(normalize('app___module--auth__=route:/news-list#id:12')).toEqual('app_module-auth_-route-news-list-id-12')
  })

  it('normalize adv string', () => {
    expect(normalize('--(hi)-_-/\\-')).toEqual('hi')
    expect(normalize('--_(hd asda__s@2 3e@#$U&**^&*DAi)--/\\-')).toEqual('hd-asda_s-2-3e-U-DAi')
    expect(normalize('### <-- APP_ENV ---> ##', '-')).toEqual('APP_ENV')
  })
})
