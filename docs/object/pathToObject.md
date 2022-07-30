# pathToObject

> <small>OBJECT</small>

## Description

Return Object from sting path.

## Use

```js
import { pathToObject } from '@feugene/mu'
```

## Examples

### Basic

```js
pathToObject() // {}
pathToObject('') // {}
pathToObject('key') //{ key: null }
pathToObject('key', 2) // { key: 2 }
pathToObject('key', 'test') // { key: 'test' }
pathToObject('key.sub') // { key: { sub: null } }
pathToObject('key.sub.t') // { key: { sub: { t: null } } }
pathToObject('key.sub.test', 'tes') // { key: { sub: { test: 'tes' } } }
```

### Existed objects with missing keys

```js
const object = () => ({test: 'test'})

pathToObject('', null, object()) // {test: 'test'}
pathToObject('key', null, object()) // {test: 'test', key: null}
pathToObject('key', 2, object()) // {test: 'test', key: 2}
pathToObject('key', 'test', object()) // {test: 'test', key: 'test'}
pathToObject('key.sub', null, object()) // {test: 'test', key: {sub: null}}
pathToObject('key.sub.test2', null, object()) // {test: 'test', key: {sub: {test2: null}}}
pathToObject('key.sub.test1', 'tes', object()) // {test: 'test', key: {sub: {test1: 'tes'}}}
```

### Existed objects with existed keys [not replace]

```js
const object = () => ({key: 'test', sub: {key: 'test2'}})

pathToObject('', null, object(), '.', false) // {key: 'test', sub: {key: 'test2'}}
pathToObject('key', null, object(), '.', false) // {key: 'test', sub: {key: 'test2'}}
pathToObject('key', 2, object(), '.', false) // {key: 'test', sub: {key: 'test2'}}
pathToObject('sub.key', null, object(), '.', false) // {key: 'test', sub: {key: 'test2'}}
pathToObject('sub.key.test2', null, object(), '.', false) // {key: 'test', sub: {key: 'test2'}}
pathToObject('key.sub.test1', 'tes', object(), '.', false) // {key: 'test', sub: {key: 'test2'}}
```

### Existed objects with existed keys [replace]

```js
const object = () => ({key: 'test', sub: {key: 'test2'}})

pathToObject('', null, object()) // {key: 'test', sub: {key: 'test2'}}
pathToObject('key', null, object()) // {key: null, sub: {key: 'test2'}}
pathToObject('key', 2, object()) // {key: 2, sub: {key: 'test2'}}
pathToObject('sub.key', null, object()) // {key: 'test', sub: {key: null}}
pathToObject('sub.key.test2', null, object()) // {key: 'test', sub: {key: {test2: null}}}
pathToObject('sub.key.test1', 'tes', object()) // {key: 'test', sub: {key: {test1: 'tes'}}}
```

```js
const object = {app: {}}
pathToObject('app.menu.main', 'main', object)
pathToObject('app.menu.sub', 'sub', object)

// {app: {menu: {main: 'main', sub: 'sub'}}})
```
