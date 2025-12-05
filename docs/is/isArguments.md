## isArguments

> IS

### Description

Checks if a value is likely an `arguments` object.

Uses an internal tag check (`[object Arguments]`) when available, with a safe fallback that relies on the presence of
non-enumerable `callee` for older environments.

### Use

```ts
import { isArguments } from '@feugene/mu/is'

isArguments((function () {
  return arguments
})()) // true

isArguments([1, 2, 3]) // false
```

### Examples

```ts
import { isArguments } from '@feugene/mu/is'

// Direct call on arguments
function demo() {
  return isArguments(arguments)
}

demo(1, 2, 3) // true

// Arrays and other objects
isArguments([1, 2, 3]) // false
isArguments({ length: 2, 0: 'a', 1: 'b' }) // false

// Null / undefined
isArguments(null as any) // false
isArguments(undefined as any) // false
```

### See also

- `isArray` — check for real arrays.
- `isArrayLike` — array-like values (length + index properties).

