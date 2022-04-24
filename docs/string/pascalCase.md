# pascalCase

> <small>STRING</small>

## Description

Convert a string to pascal case (upper camelcase).

## Use

```js
import pascalCase from '@feugene/mu/src/src/string/pascalCase.js'
```

## Examples

```js
pascalCase('foo') // 'Foo'
pascalCase('foo-bar') // 'FooBar'
pascalCase('foo-bar-baz') // 'FooBarBaz'
pascalCase('foo--bar') // 'FooBar'
pascalCase('--foo-bar') // 'FooBar'
pascalCase('--foo--bar') // 'FooBar'
pascalCase('FOO-BAR') // 'FooBar'
pascalCase('FOÈ-BAR') // 'FoèBar'
pascalCase('-foo-bar-') // 'FooBar'
pascalCase('--foo--bar--') // 'FooBar'
pascalCase('foo.bar') // 'FooBar'
pascalCase('.foo.bar.') // 'FooBar'
pascalCase('.foo...bar.') // 'FooBar'
pascalCase('foo_bar') // 'FooBar'
pascalCase('foo__bar') // 'FooBar'
pascalCase('_foo__bar_') // 'FooBar'
pascalCase('__foo__bar__') // 'FooBar'
pascalCase('foo_-bar') // 'FooBar'
pascalCase('-foo-bar-') // 'FooBar'
pascalCase('-foo--bar-') // 'FooBar'
pascalCase('foo bar') // 'FooBar'
pascalCase('foo    bar') // 'FooBar'
pascalCase('foo bar  ') // 'FooBar'
pascalCase('   foo bar  ') // 'FooBar'
pascalCase('   Foo bar  ') // 'FooBar'
pascalCase('   Foo Bar  ') // 'FooBar'
pascalCase('-') // '-'
pascalCase(' - ') // '-'
pascalCase('fooBar') // 'FooBar'
pascalCase('fooBar-baz') // 'FooBarBaz'
pascalCase('FBBazzy') // 'FbBazzy'
pascalCase('F') // 'F'
pascalCase('Foo') // 'Foo'
pascalCase('FOO') // 'Foo'
pascalCase(['foo', 'bar']) // 'FooBar'
pascalCase(['foo', '-bar']) // 'FooBar'
pascalCase(['foo', '-bar', 'baz']) // 'FooBarBaz'
pascalCase(['', '', '']) // ''
pascalCase(['--', '', '']) // ''
pascalCase([]) // ''
pascalCase('') // ''
pascalCase('--__--_--_') // ''
pascalCase('foo bar?') // 'FooBar?'
pascalCase('foo bar!') // 'FooBar!'
pascalCase('foo bar$') // 'FooBar$'
pascalCase('foo-bar#') // 'FooBar#'
pascalCase('XMLHttpRequest') // 'XmlHttpRequest'
pascalCase('mGridCol6@md') // 'MGridCol6@md'
pascalCase('A::a') // 'A::a'
pascalCase('Hello1World') // 'Hello1World'
pascalCase('Hello11World') // 'Hello11World'
pascalCase('hello11World') // 'Hello11World'
pascalCase('Hello1World11foo') // 'Hello1World11Foo'
pascalCase('Hello1') // 'Hello1'
pascalCase('1Hello1') // '1Hello1'
pascalCase('1hello1') // '1Hello1'
pascalCase('h2w') // 'H2W'
```
