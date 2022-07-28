import { Blob } from 'buffer'
import { isBlob, isBlobs } from './../../src/is'

describe('isBlob', () => {
  it('should return false', () => {
    expect(isBlobs(2, 4, 200, 'sd', '', null, {}, undefined, [])).toBe(false)
  })

  it('should return true when all parameters are blobs', () => {
    const blob = new Blob(['hello', ' ', 'world'], { type: 'text/plain' })

    expect(isBlob(blob)).toBe(true)
  })
})
