import { isUrl } from '~/is'

describe('isUrl', () => {
  it('should return `true`', () => {
    expect(isUrl('http://example.com')).toBeTruthy()
    expect(isUrl('https://example.com')).toBeTruthy()
    expect(isUrl(new URL('https://example.com'))).toBeTruthy()
  })

  it('should return `false`', () => {
    expect(isUrl('http')).toBeFalsy()
    expect(isUrl('http:')).toBeFalsy()
    expect(isUrl('http:/')).toBeFalsy()
    expect(isUrl('http://')).toBeFalsy()
    expect(isUrl('https://')).toBeFalsy()
    expect(isUrl('')).toBeFalsy()
    expect(isUrl(null)).toBeFalsy()
    expect(isUrl('212')).toBeFalsy()
    expect(isUrl(212)).toBeFalsy()
    expect(isUrl(/x/)).toBeFalsy()
    expect(isUrl(new Date())).toBeFalsy()
    expect(isUrl(() => {})).toBeFalsy()
    expect(isUrl(new Error())).toBeFalsy()
  })
})
