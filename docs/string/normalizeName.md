# normalizeName

> <small>STRING</small>

## Description

Normalize string by RegExp `[^0-9a-zA-Z_]`

## Use

```js
import { normalizeName } from '@feugene/mu'
// or
import normalize from '@feugene/mu/string/normalize'
```

## Examples

### Basic

```js
normalize('----hi---') // 'hi'
normalize('__app___module--auth__=route:/news-list#id:12--') // 'app_module-auth_-route-news-list-id-12'
normalize('--_(hd asda__s@2 3e@#$U&**^&*DAi)--/\\-') // 'hd-asda_s-2-3e-U-DAi'
normalize('### <-- APP_ENV ---> ##', '-') // 'APP_ENV'
```
