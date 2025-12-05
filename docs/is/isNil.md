## isNil / isNils

> IS

### Description

Nil predicates.

- `isNil(value)` — `true` for `null` or `undefined`.
- `isNils(...values)` — `true` if all values are `null` or `undefined`.

### Use

```ts
import { isNil, isNils } from '@feugene/mu/is'

isNil(undefined) // true
isNil(null) // true
isNil(0) // false

isNils(null, undefined) // true
```

### Examples

```ts
import { isNil, isNils } from '@feugene/mu/is'

isNil(null) // true
isNil(undefined) // true
isNil('' as any) // false

isNils(null, undefined) // true
isNils(null, 0 as any) // false
```

### See also

- `isNull` — strictly null.
- `isEmpty` — broader notion of emptiness.

