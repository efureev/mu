// NOTE: under Vitest we import from local src via path aliases (~),
// not from the published package name. This still verifies typings
// and module structure for consumer-like code.
import { number, numberRus } from '~/format'
import { merge, defaults } from '~/object'
import { isEmpty, isNumeric, isInteger } from '~/is'
import { toArray, toNumber } from '~/to'
import { describe, it, expect } from 'vitest'
type User = {
  id: number
  name: string
  age?: number | null
}

describe('package import and typing (@feugene/mu)', () => {
  it('allows importing helpers from submodules with correct typings', () => {
    const u1: User = { id: 1, name: 'Alice' }
    const u2: User = { id: 1, name: 'Alice', age: 30 }

    const merged = merge(u1, u2)

    // Type-level check: merged is still User-compatible
    const id: number = merged.id
    const name: string = merged.name
    const age: number | null | undefined = merged.age

    expect(id).toBe(1)
    expect(name).toBe('Alice')
    expect(age).toBe(30)
  })

  it('keeps number() typings and overloads usable from consumer code', () => {
    const s1 = number(1000)
    const s2 = number(1000, { decimals: 0 })
    const s3 = numberRus(1000)

    // compile-time: all are strings
    const arr: string[] = [s1, s2, s3]

    expect(arr[0]).toMatch(/1,000/)
    expect(arr[2]).toMatch(/1 000/)
  })

  it('provides correct predicate typings for is* helpers', () => {
    const value: unknown = '42'

    if (isNumeric(value)) {
      // inside branch value is still unknown at TS level, but can be safely converted
      const n = toNumber(value)
      expect(n).toBe(42)
    }

    expect(isInteger(10)).toBe(true)
    expect(isInteger('10')).toBe(true)
    expect(isInteger('10.1')).toBe(false)

    expect(isEmpty(null)).toBe(true)
    expect(isEmpty([])).toBe(true)
  })

  // Root import is intentionally not tested here because Jest runs in CJS mode
  // and our published package is ESM-only. Submodule imports cover typing and
  // resolution for consumer code.
})
