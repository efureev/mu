import { b64ToUtf8, b64ToUtf8Safe, utf8ToB64, utf8Tob64Safe } from '../../src/utils/base64'
import forEach from '../../src/core/forEach'
import flip from '../../src/object/flip'

describe('utf8ToB64', () => {
  it('should return base64-val', () => {
    expect(utf8ToB64('1')).toBe('MQ==')
    expect(utf8ToB64('Hello world')).toBe('SGVsbG8gd29ybGQ=')
    expect(utf8ToB64('Привет')).toBe('w5DCn8ORwoDDkMK4w5DCssOQwrXDkcKC')
  })
})

describe('b64ToUtf8', () => {
  it('should return string from base64-val', () => {
    expect(b64ToUtf8('MQ==')).toBe('1')
    expect(b64ToUtf8('SGVsbG8gd29ybGQ=')).toBe('Hello world')
    expect(b64ToUtf8('w5DCn8ORwoDDkMK4w5DCssOQwrXDkcKC')).toBe('Привет')
  })
})

const list = {
  1: 'MQ~~',
  'MQ~~': 'TVF-fg~~',
  'Привет!': '0J_RgNC40LLQtdGCIQ~~',
  'Hello world': 'SGVsbG8gd29ybGQ~',
  '{"message:{"text":"сообщение !"}"}': 'eyJtZXNzYWdlOnsidGV4dCI6ItGB0L7QvtCx0YnQtdC90LjQtSAhIn0ifQ~~',
  '{"message":"fa003ea3-2027-4b4e-aebe-50a7accbff5d"}':
    'eyJtZXNzYWdlIjoiZmEwMDNlYTMtMjAyNy00YjRlLWFlYmUtNTBhN2FjY2JmZjVkIn0~',
}

describe('Utf8Tob64Safe', () => {
  it('encode original string to safe base64 hash', () => {
    forEach(list, (hash, text) => {
      expect(utf8Tob64Safe(String(text))).toBe(hash)
    })
  })
})

describe('b64ToUtf8Safe', () => {
  it('decode from safe 6ase64 hash to original string', () => {
    forEach(flip(list), (hash, text) => {
      expect(b64ToUtf8Safe(String(text))).toBe(hash)
    })
  })
})
