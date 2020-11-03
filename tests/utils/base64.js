import { b64ToUtf8, utf8ToB64 } from '../../src/utils'

describe('utf8ToB64', () => {
  it('should return base64-val', () => {
    expect(utf8ToB64('1')).toBe('MQ==')
    expect(utf8ToB64('Hello world')).toBe('SGVsbG8gd29ybGQ=')
    expect(utf8ToB64('Привет')).toBe('w5DCn8ORwoDDkMK4w5DCssOQwrXDkcKC')
  })
})

describe('b64ToUtf8', () => {
  it('should return  string from base64-val', () => {
    expect(b64ToUtf8('MQ==')).toBe('1')
    expect(b64ToUtf8('SGVsbG8gd29ybGQ=')).toBe('Hello world')
    expect(b64ToUtf8('w5DCn8ORwoDDkMK4w5DCssOQwrXDkcKC')).toBe('Привет')
  })
})
