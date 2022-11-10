import { pregQuote } from '~/utils'

describe('pregQuote', () => {
  it('should return quoted string', () => {
    expect(pregQuote('/etc/systemd/system/')).toBe('/etc/systemd/system/')
    expect(pregQuote('c:\\temp\\')).toBe('c\\:\\\\temp\\\\')
    expect(pregQuote('*/**')).toBe('\\*/\\*\\*')
    expect(pregQuote('{no}')).toBe('\\{no\\}')
    expect(pregQuote('!$()*+.:<=>?[\\\\\\]^{|}')).toBe(
      '\\!\\$\\(\\)\\*\\+\\.\\:\\<\\=\\>\\?\\[\\\\\\\\\\\\\\]\\^\\{\\|\\}'
    )
  })
})
