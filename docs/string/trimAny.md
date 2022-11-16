# trimAny

> <small>STRING</small>

## Description

Trim any characters

## Use

```ts
import { trimAny } from '@feugene/mu'
// or
import { trimAny } from '@feugene/mu/string/trim'
```

## Examples

```js
const str = '-___ /test/es/page/-- __'
trimAny(str, ['/', '-', '_']) // ' /test/es/page/-- '
trimAny(str, ['/', '-', '_', ' ']) // 'test/es/page'
trimAny('### <---- APP_ENV -> ###', ['#', '-', '<', '>', ' ']) // 'APP_ENV'
```
