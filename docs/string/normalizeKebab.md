# normalizeKebab

> <small>STRING</small>

## Description

Replace non-alphanumeric chars to `-` (by RegExp `[^0-9a-zA-Z\-])`).

## Use

```js
import { normalizeKebab } from '@feugene/mu'
// or
import { normalizeKebab } from '@feugene/mu/string/normalize'
```

## Examples

### Basic

```js
normalizeKebab('--app__\\_module--auth__=route:/news-list#id:12') // ''app-module-auth-route-news-list-id-12''
```

