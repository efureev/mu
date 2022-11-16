import { removeConsecutiveDuplicates } from '~/string/replace'

describe('removeConsecutiveDuplicates', () => {
  it('remove all consecutive duplicates', () => {
    expect(removeConsecutiveDuplicates('kelless')).toEqual('keles')
    expect(removeConsecutiveDuplicates('kelllleeess')).toEqual('keles')
    expect(removeConsecutiveDuplicates('kkkkkeeeeelllleeessss')).toEqual('keles')
  })

  it('remove custom consecutive duplicates', () => {
    expect(removeConsecutiveDuplicates('k---e__ll__ess', ['_', '-'])).toEqual('k-e_ll_ess')
    expect(removeConsecutiveDuplicates('-k---e__ll__ess-', '_')).toEqual('-k---e_ll_ess-')
    expect(removeConsecutiveDuplicates('APP_ENV', '_')).toEqual('APP_ENV')
    expect(removeConsecutiveDuplicates('APP_ENV', ['_'])).toEqual('APP_ENV')
    expect(removeConsecutiveDuplicates('APP_ENV', ['_', '-'])).toEqual('APP_ENV')
  })
})
