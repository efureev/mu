# keys

> <small>CORE</small>

## Description

Creates an array of the own enumerable property names of `object`.

## Use

```js
import { keys } from '@feugene/mu'
```

## Examples

```js
keys('hi') // => ['0', '1']
```

```js

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

keys(new Foo) // => ['a', 'b'] (iteration order is not guaranteed)
```
