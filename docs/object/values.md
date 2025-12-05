## values

> OBJECT

### Description

Creates an array of the object's **own enumerable property values**.

For `null` and `undefined` it returns an empty array.

### Use

```ts
import { values } from '@feugene/mu/object'

values({ a: 1, b: 2 }) // [1, 2]
```

### Examples

```ts
import { values } from '@feugene/mu/object'

// Basic
values({ a: 1, b: 2, c: 3 }) // [1, 2, 3]

// String object
values('hi' as any) // ['h', 'i'] (depends on JS coercion)

// Symbols: only enumerable symbol properties are included
const S = Symbol('k')
const obj: any = { a: 1 }
Object.defineProperty(obj, S, { value: 2, enumerable: true })
values(obj) // [1, 2]

// Null / undefined
values(null as any) // []
values(undefined as any) // []
```

### See also

- `getSize` — count own properties.
- `flip` — swap keys and values.

