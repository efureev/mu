import { describe, it, expect } from 'vitest'
import { flip } from '~/object'

describe('flip', () => {
  it('basic', () => {
    expect(flip({ a: 1, b: '2', c: 3 })).toEqual({ 1: 'a', 2: 'b', 3: 'c' })
    expect(flip({ a: 'test', key: 'value' })).toEqual({ test: 'a', value: 'key' })

    const flipped = flip({
      date: () => {},
      key: 'value',
    })

    // Ключ-функция зависит от среды, проверяем только, что она есть и маппится на 'date'
    const funcKey = Object.keys(flipped).find(k => k.includes('=>'))
    expect(funcKey).toBeDefined()
    expect(flipped[funcKey as string]).toBe('date')
    expect(flipped.value).toBe('key')
  })
})
