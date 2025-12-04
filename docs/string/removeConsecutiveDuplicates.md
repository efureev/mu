# removeConsecutiveDuplicates

> <small>STRING</small>

## Description

Remove consecutive duplicates

## Use

```js
import { removeConsecutiveDuplicates } from '@feugene/mu/string'
// or import from the root (may include more symbols depending on bundler)
import { removeConsecutiveDuplicates } from '@feugene/mu'
```

## Examples

### Basic

```js
removeConsecutiveDuplicates('kelllleeess') // 'keles'
removeConsecutiveDuplicates('APP_ENV', '_') // 'APP_ENV'
removeConsecutiveDuplicates('k---e__ll__ess', ['_', '-']) // 'k-e_ll_ess'
```
