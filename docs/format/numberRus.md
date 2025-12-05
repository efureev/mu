## numberRus

> FORMAT

### Description

RU preset for `number()` with a space as thousands separator and a comma as decimal point.
Also enables `clearDecimals` so integer absolute values are rendered without a fractional part.

### Use

```ts
import { numberRus } from '@feugene/mu/format'

numberRus(1001.2) // '1 001,20'
```

### Examples

```ts
import { numberRus } from '@feugene/mu/format'

// Defaults: decimals = 2, space group, comma decimal, clearDecimals = true
numberRus(1000) // '1 000'
numberRus('1234567.89') // '1 234 567,89'

// You can control decimals
numberRus(12.3, 3) // '12,300'

// Edge values
numberRus(0) // '0'
numberRus(-0, 0) // '-0'
```

### See also

- `number` — base formatter with options.
