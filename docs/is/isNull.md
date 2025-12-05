## isNull / isNulls

> IS

### Description

Null predicates.

- `isNull(value)` — `true` only when value is strictly `null`.
- `isNulls(...values)` — `true` if all values are strictly `null`.

### Use

```ts
import { isNull, isNulls } from '@feugene/mu/is'

isNull(null) // true
isNull(undefined) // false

isNulls(null, null) // true
```

### Examples

```ts
import { isNull, isNulls } from '@feugene/mu/is'

isNull(null) // true
isNull(undefined) // false
isNull(0 as any) // false

isNulls(null, null) // true
isNulls(null, undefined as any) // false
```

### See also

- `isNil` — `null` or `undefined`.

