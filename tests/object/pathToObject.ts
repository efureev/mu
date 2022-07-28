import pathToObject from '../../src/object/pathToObject'

describe('pathToObject', () => {
  it('basic', () => {
    expect(pathToObject()).toEqual({})
    expect(pathToObject('')).toEqual({})
    expect(pathToObject('key')).toEqual({ key: null })
    expect(pathToObject('key', 2)).toEqual({ key: 2 })
    expect(pathToObject('key', 'test')).toEqual({ key: 'test' })
    expect(pathToObject('key.sub')).toEqual({ key: { sub: null } })
    expect(pathToObject('key.sub.t')).toEqual({ key: { sub: { t: null } } })
    expect(pathToObject('key.sub.test', 'tes')).toEqual({ key: { sub: { test: 'tes' } } })
  })

  it('existed object', () => {
    const object = () => ({ test: 'test' })

    expect(pathToObject('', null, object())).toEqual({ test: 'test' })
    expect(pathToObject('key', null, object())).toEqual({ test: 'test', key: null })
    expect(pathToObject('key', 2, object())).toEqual({ test: 'test', key: 2 })
    expect(pathToObject('key', 'test', object())).toEqual({ test: 'test', key: 'test' })
    expect(pathToObject('key.sub', null, object())).toEqual({ test: 'test', key: { sub: null } })
    expect(pathToObject('key.sub.test2', null, object())).toEqual({ test: 'test', key: { sub: { test2: null } } })
    expect(pathToObject('key.sub.test1', 'tes', object())).toEqual({ test: 'test', key: { sub: { test1: 'tes' } } })
  })

  it('existed object with existed keys [not replace]', () => {
    const object = () => ({ key: 'test', sub: { key: 'test2' } })

    expect(pathToObject('', null, object(), '.', false)).toEqual({ key: 'test', sub: { key: 'test2' } })
    expect(pathToObject('key', null, object(), '.', false)).toEqual({ key: 'test', sub: { key: 'test2' } })
    expect(pathToObject('key', 2, object(), '.', false)).toEqual({ key: 'test', sub: { key: 'test2' } })
    expect(pathToObject('sub.key', null, object(), '.', false)).toEqual({ key: 'test', sub: { key: 'test2' } })
    expect(pathToObject('sub.key.test2', null, object(), '.', false)).toEqual({ key: 'test', sub: { key: 'test2' } })
    expect(pathToObject('key.sub.test1', 'tes', object(), '.', false)).toEqual({ key: 'test', sub: { key: 'test2' } })
  })

  it('existed object with existed keys [replace]', () => {
    const object = () => ({ key: 'test', sub: { key: 'test2' } })

    expect(pathToObject('', null, object())).toEqual({ key: 'test', sub: { key: 'test2' } })
    expect(pathToObject('key', null, object())).toEqual({ key: null, sub: { key: 'test2' } })
    expect(pathToObject('key', 2, object())).toEqual({ key: 2, sub: { key: 'test2' } })
    expect(pathToObject('sub.key', null, object())).toEqual({ key: 'test', sub: { key: null } })
    expect(pathToObject('sub.key.test2', null, object())).toEqual({ key: 'test', sub: { key: { test2: null } } })
    expect(pathToObject('sub.key.test1', 'tes', object())).toEqual({ key: 'test', sub: { key: { test1: 'tes' } } })
  })

  it('existed object with existed keys [replace] 2', () => {
    const object = { key: 'test', sub: { fn: 'test2' } }
    pathToObject('sub.fn', 'func', object)

    expect(object).toEqual({ key: 'test', sub: { fn: 'func' } })
  })

  it('existed object with existed keys [replace] 3', () => {
    const object = { app: {} }
    pathToObject('app.menu.main', 'main', object)
    pathToObject('app.menu.sub', 'sub', object)

    expect(object).toEqual({ app: { menu: { main: 'main', sub: 'sub' } } })
  })
})
