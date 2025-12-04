describe('tree-shaking: leaf imports do not pull barrels', () => {
  it('importing ~/format/number does not load ~/format/index or root index', () => {
    jest.isolateModules(() => {
      jest.resetModules()
      // snapshot before
      const before = new Set(Object.keys(require.cache))

      // Import leaf module
      // Using require to stay within isolateModules context
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const mod = require('~/format/number')
      expect(typeof mod.default).toBe('function')

      const afterKeys = Object.keys(require.cache).filter(k => !before.has(k))

      // Ensure that format barrel and root barrel are not auto-loaded
      const loadedFormatBarrel = afterKeys.some(k => /\/src\/format\/index\.(ts|js)$/.test(k))
      const loadedRootBarrel = afterKeys.some(k => /\/src\/index\.(ts|js)$/.test(k))

      expect(loadedFormatBarrel).toBe(false)
      expect(loadedRootBarrel).toBe(false)
    })
  })
})
