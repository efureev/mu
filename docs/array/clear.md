## clear

> ARRAY

### Description

Clears an array **in place**, removing all its elements. The original array is mutated and returned (for chaining).

### Use

```ts
import { clear } from '@feugene/mu/array'

const items = [1, 2, 3]
clear(items)
// items === []
```

### Examples

```ts
import { clear } from '@feugene/mu/array'

const numbers = [1, 2, 3, 4]
const ref = clear(numbers)

// Mutates the original array
numbers // []
ref === numbers // true

// Works with any array-like of items
const items: Array<string | number> = ['a', 'b', 1]
clear(items) // []
```

### See also

- `arrayEach` — iterate without clearing.

