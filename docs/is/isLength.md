## isLength

> IS

### Description

Checks if a value is a valid array-like length: an integer number `>= 0` and `<= Number.MAX_SAFE_INTEGER`.

Used internally by `isArrayLike`.

### Use

```ts
import { isLength } from '@feugene/mu/is'

isLength(3) // true
```

### Examples

```ts
import { isLength } from '@feugene/mu/is'

isLength(0) // true
isLength(10) // true

isLength(-1) // false
isLength(3.5) // false
isLength('3' as any) // false
```

### See also

- `isArrayLike` — relies on length semantics.

