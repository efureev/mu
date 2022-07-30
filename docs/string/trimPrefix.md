# trimPrefix

> <small>STRING</small>

## Description

Remove a prefix from a String

## Use

```ts
import { trimPrefix } from '@feugene/mu'
```

## Examples

```js
trimPrefix('/es/test/es/page', '/es') // '/test/es/page'
trimPrefix('https://example.com', 'https://') // 'example.com'
```
