## random

> ARRAY

### Description

Returns a random element from an array.

If the array is empty, returns `undefined`.

### Use

```ts
import { random } from '@feugene/mu/array'

random([1, 2, 3, 4, 5]) // e.g. 3
```

### Examples

```ts
import { random } from '@feugene/mu/array'

const items = ['a', 'b', 'c']
const value = random(items)
// value is one of 'a', 'b', 'c'

// Empty array
random([]) // undefined
```

### See also

- `arrayEach` — iterate over all items.

