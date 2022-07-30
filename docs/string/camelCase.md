# camelCase

> <small>STRING</small>

## Description

Convert a string to camel case.

## Use

```js
import { camelCase } from '@feugene/mu'
```

## Examples

```js
camelCase('foo') // 'foo'
camelCase('foo-bar') // 'fooBar'
camelCase('foo-bar-baz') // 'fooBarBaz'
camelCase('foo--bar') // 'fooBar'
camelCase('--foo-bar') // 'fooBar'
camelCase('--foo--bar') // 'fooBar'
camelCase('FOO-BAR') // 'fooBar'
camelCase('FOÈ-BAR') // 'foèBar'
camelCase('-foo-bar-') // 'fooBar'
camelCase('--foo--bar--') // 'fooBar'
camelCase('foo.bar') // 'fooBar'
camelCase('.foo.bar.') // 'fooBar'
camelCase('.foo...bar.') // 'fooBar'
camelCase('foo_bar') // 'fooBar'
camelCase('foo__bar') // 'fooBar'
camelCase('_foo__bar_') // 'fooBar'
camelCase('__foo__bar__') // 'fooBar'
camelCase('foo_-bar') // 'fooBar'
camelCase('-foo-bar-') // 'fooBar'
camelCase('-foo--bar-') // 'fooBar'
camelCase('foo bar') // 'fooBar'
camelCase('foo    bar') // 'fooBar'
camelCase('foo bar  ') // 'fooBar'
camelCase('   foo bar  ') // 'fooBar'
camelCase('   Foo bar  ') // 'fooBar'
camelCase('   Foo Bar  ') // 'fooBar'
camelCase('-') // '-'
camelCase(' - ') // '-'
camelCase('fooBar') // 'fooBar'
camelCase('fooBar-baz') // 'fooBarBaz'
camelCase('FBBazzy') // 'fbBazzy'
camelCase('F') // 'f'
camelCase('Foo') // 'foo'
camelCase('FOO') // 'foo'
camelCase(['foo', 'bar']) // 'fooBar'
camelCase(['foo', '-bar']) // 'fooBar'
camelCase(['foo', '-bar', 'baz']) // 'fooBarBaz'
camelCase(['', '', '']) // ''
camelCase(['--', '', '']) // ''
camelCase([]) // ''
camelCase('') // ''
camelCase('--__--_--_') // ''
camelCase('foo bar?') // 'fooBar?'
camelCase('foo bar!') // 'fooBar!'
camelCase('foo bar$') // 'fooBar$'
camelCase('foo-bar#') // 'fooBar#'
camelCase('XMLHttpRequest') // 'xmlHttpRequest'
camelCase('mGridCol6@md') // 'mGridCol6@md'
camelCase('A::a') // 'a::a'
camelCase('Hello1World') // 'hello1World'
camelCase('Hello11World') // 'hello11World'
camelCase('hello11World') // 'hello11World'
camelCase('Hello1World11foo') // 'hello1World11Foo'
camelCase('Hello1') // 'hello1'
camelCase('1Hello1') // '1Hello1'
camelCase('1hello1') // '1Hello1'
camelCase('h2w') // 'h2W'
```
