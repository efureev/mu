import defaults from '~/object/defaults'

describe('defaults - immutability and security', () => {
  it('does not mutate origin or sources (immutability)', () => {
    const origin = { a: undefined, nested: { x: 1 } }
    const src = { a: 2, nested: { y: 3 } }

    const originSnapshot = JSON.parse(JSON.stringify(origin))
    const srcSnapshot = JSON.parse(JSON.stringify(src))

    const res = defaults(origin, src)

    // result as expected: existing own key `a` (even if undefined) is not overridden; nested objects deep-default
    expect(res).toEqual({ a: undefined, nested: { x: 1, y: 3 } })

    // origin and src are not mutated
    expect(origin).toEqual(originSnapshot)
    expect(src).toEqual(srcSnapshot)

    // Ensure result is a new object (not the same reference)
    expect(res).not.toBe(origin)
    // Nested object should also be a new object
    expect(res.nested).not.toBe(origin.nested)
  })

  it('ignores inherited properties from sources', () => {
    const proto = { p: 1 }
    const src = Object.create(proto)
    src.own = 2

    const res = defaults({ own: undefined, p: undefined }, src)
    // `own` exists (undefined), so it must not be overridden by defaults
    expect(res).toEqual({ own: undefined, p: undefined })
  })

  it('ignores non-enumerable string keys from sources', () => {
    const src: any = {}
    Object.defineProperty(src, 'hidden', { value: 123, enumerable: false })
    src.visible = 456

    const res = defaults({}, src)
    expect(res).toEqual({ visible: 456 })
    // hidden should not be applied
    expect(Object.prototype.hasOwnProperty.call(res, 'hidden')).toBe(false)
  })

  it('copies enumerable symbol keys from sources; ignores non-enumerable symbols', () => {
    const symEnum = Symbol('enum')
    const symHidden = Symbol('hidden')
    const src: any = { [symEnum]: 10 }
    Object.defineProperty(src, symHidden, { value: 20, enumerable: false })

    const res = defaults({}, src)
    expect(Object.getOwnPropertySymbols(res)).toContain(symEnum)
    expect(res[symEnum]).toBe(10)
    // Hidden symbol is ignored
    expect(Object.getOwnPropertySymbols(res)).not.toContain(symHidden)
  })

  it('preserves origin enumerable symbol keys and does not override defined ones', () => {
    const s = Symbol('s')
    const origin: any = { a: undefined, [s]: 5 }
    const res = defaults(origin, { a: 1, [s]: 7 })
    expect(res.a).toBeUndefined()
    // symbol value remains from origin, because destination is defined
    expect(res[s]).toBe(5)
  })

  it('arrays from sources are cloned, not referenced', () => {
    const arr = [1, 2, 3]
    const res = defaults({}, { a: arr })
    expect(res.a).toEqual([1, 2, 3])
    expect(res.a).not.toBe(arr)
  })

  it('nested defaults: only undefined fields are set; null stays intact', () => {
    const res = defaults({ a: { x: undefined, y: null } }, { a: { x: 1, y: 2, z: 3 } })
    expect(res).toEqual({ a: { x: undefined, y: null, z: 3 } })
  })

  it('guards against proto pollution via __proto__', () => {
    const payload: any = JSON.parse('{"__proto__": {"polluted": true}}')
    const before = ({} as any).polluted

    const res = defaults({}, payload)

    // Result should not have own polluted key and global prototype must be safe
    expect((res as any).polluted).toBeUndefined()
    expect(({} as any).polluted).toBe(before)
  })

  it('guards against proto pollution via constructor/prototype', () => {
    const payload: any = {
      constructor: {
        prototype: {
          hacked: true,
        },
      },
    }

    const res = defaults({}, payload)
    expect((res as any).hacked).toBeUndefined()
    expect(({} as any).hacked).toBeUndefined()
  })
})
