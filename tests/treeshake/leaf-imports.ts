import { describe, it, expect } from 'vitest'

// This test uses Node's require/cache directly. Hint TS/IDE about require.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const require: any

describe('tree-shaking: leaf imports do not pull barrels', () => {
  it('importing ~/format/number does not load ~/format/index or root index', async () => {
    // snapshot before
    const before = new Set(Object.keys(require.cache))

    // Dynamic ESM import of leaf module
    const mod = await import('~/format/number')
    expect(typeof mod.default).toBe('function')

    const afterKeys = Object.keys(require.cache).filter(k => !before.has(k))

    // Ensure that format barrel and root barrel are not auto-loaded
    const loadedFormatBarrel = afterKeys.some(k => /\/src\/format\/index\.(ts|js)$/.test(k))
    const loadedRootBarrel = afterKeys.some(k => /\/src\/index\.(ts|js)$/.test(k))

    expect(loadedFormatBarrel).toBe(false)
    expect(loadedRootBarrel).toBe(false)
  })
})
