## isObjectLike

> IS

### Description

Checks if a value is object-like: not `null` and `typeof value === 'object'`.

Arrays, dates, plain objects and typed arrays are object-like; `null` and primitives are not.

### Use

```ts
import { isObjectLike } from '@feugene/mu/is'

isObjectLike([]) // true
isObjectLike({}) // true
isObjectLike(null) // false
```

### Examples

```ts
import { isObjectLike } from '@feugene/mu/is'

isObjectLike({}) // true
isObjectLike([]) // true
isObjectLike(new Date()) // true

isObjectLike(null) // false
isObjectLike(1 as any) // false
```

### See also

- `isObject` — plain objects without DOM nodes.

