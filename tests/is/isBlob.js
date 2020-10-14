import { isBlob } from './../../src/is'
import { Blob } from 'blob-polyfill'

describe('isBlob', () => {
  it('should return false', () => {
    expect(isBlob(2, 4, 200, 'sd', '', null, {}, undefined, [])).toBe(false)
  })

  it('should return true when all parameters are blobs', () => {
    const blob = new Blob(['hello', ' ', 'world'], { type: 'text/plain' })

    expect(isBlob(blob)).toBe(true)
  })
})
