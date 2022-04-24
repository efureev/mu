# toString

> <small>TO</small>

## Description

Present an entity as String

## Use

```js
import toString from '@feugene/mu/src/to/toString.js'
```

## Examples

### From String

```js
toString('test') // === 'test'
toString('') // === ''
toString('   test  ') // === 'test'
toString('\ttest\n') // === 'test'
```

### From Number

```js
toString(1) // === '1'
toString(0) // === '0'
toString(-0) // === '0'
toString(1212) // === '1212'
toString(-1212) // === '-1212'
toString(12.54) // === '12.54'
```

### From Object

```js
toString({}) // === '{}'
toString({key: 'value'}) // === '{"key":"value"}'
toString({key: 'value', dig: 12}) // === '{"key":"value","dig":12}'
```

### From Array

```js
toString([]) // === ''
toString([1, 2, 3, 4, 5]) // === '1,2,3,4,5'
```

### From Empty

```js
toString() // === ''
toString(null) // === ''
toString(undefined) // === ''
```

### From Other

```js
toString(true) // === 'true'
toString(false) // === 'false'
toString(Symbol('a')) // === 'Symbol(a)'
toString(NaN) // === 'NaN'
toString({}) // === '{}'
toString('\ufe0f') // === '\ufe0f'
toString() // === ''
toString('😈') // === '😈'
```
