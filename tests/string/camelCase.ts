import { camelCase, pascalCase } from '~/string'

describe('camelCase', () => {
  it('camelCase', () => {
    expect(camelCase('foo')).toEqual('foo')
    expect(camelCase('foo-bar')).toEqual('fooBar')
    expect(camelCase('foo-bar-baz')).toEqual('fooBarBaz')
    expect(camelCase('foo--bar')).toEqual('fooBar')
    expect(camelCase('--foo-bar')).toEqual('fooBar')
    expect(camelCase('--foo--bar')).toEqual('fooBar')
    expect(camelCase('FOO-BAR')).toEqual('fooBar')
    expect(camelCase('FOÈ-BAR')).toEqual('foèBar')
    expect(camelCase('-foo-bar-')).toEqual('fooBar')
    expect(camelCase('--foo--bar--')).toEqual('fooBar')
    expect(camelCase('foo.bar')).toEqual('fooBar')
    expect(camelCase('.foo.bar.')).toEqual('fooBar')
    expect(camelCase('.foo...bar.')).toEqual('fooBar')
    expect(camelCase('foo_bar')).toEqual('fooBar')
    expect(camelCase('foo__bar')).toEqual('fooBar')
    expect(camelCase('_foo__bar_')).toEqual('fooBar')
    expect(camelCase('__foo__bar__')).toEqual('fooBar')
    expect(camelCase('foo_-bar')).toEqual('fooBar')
    expect(camelCase('-foo-bar-')).toEqual('fooBar')
    expect(camelCase('-foo--bar-')).toEqual('fooBar')
    expect(camelCase('foo bar')).toEqual('fooBar')
    expect(camelCase('foo    bar')).toEqual('fooBar')
    expect(camelCase('foo bar  ')).toEqual('fooBar')
    expect(camelCase('   foo bar  ')).toEqual('fooBar')
    expect(camelCase('   Foo bar  ')).toEqual('fooBar')
    expect(camelCase('   Foo Bar  ')).toEqual('fooBar')
    expect(camelCase('-')).toEqual('-')
    expect(camelCase(' - ')).toEqual('-')
    expect(camelCase('fooBar')).toEqual('fooBar')
    expect(camelCase('fooBar-baz')).toEqual('fooBarBaz')
    expect(camelCase('FBBazzy')).toEqual('fbBazzy')
    expect(camelCase('F')).toEqual('f')
    expect(camelCase('Foo')).toEqual('foo')
    expect(camelCase('FOO')).toEqual('foo')
    expect(camelCase(['foo', 'bar'])).toEqual('fooBar')
    expect(camelCase(['foo', '-bar'])).toEqual('fooBar')
    expect(camelCase(['foo', '-bar', 'baz'])).toEqual('fooBarBaz')
    expect(camelCase(['', '', ''])).toEqual('')
    expect(camelCase(['--', '', ''])).toEqual('')
    expect(camelCase([])).toEqual('')
    expect(camelCase('')).toEqual('')
    expect(camelCase('--__--_--_')).toEqual('')
    expect(camelCase('foo bar?')).toEqual('fooBar?')
    expect(camelCase('foo bar!')).toEqual('fooBar!')
    expect(camelCase('foo bar$')).toEqual('fooBar$')
    expect(camelCase('foo-bar#')).toEqual('fooBar#')
    expect(camelCase('XMLHttpRequest')).toEqual('xmlHttpRequest')
    expect(camelCase('mGridCol6@md')).toEqual('mGridCol6@md')
    expect(camelCase('A::a')).toEqual('a::a')
    expect(camelCase('Hello1World')).toEqual('hello1World')
    expect(camelCase('Hello11World')).toEqual('hello11World')
    expect(camelCase('hello11World')).toEqual('hello11World')
    expect(camelCase('Hello1World11foo')).toEqual('hello1World11Foo')
    expect(camelCase('Hello1')).toEqual('hello1')
    expect(camelCase('1Hello1')).toEqual('1Hello1')
    expect(camelCase('1hello1')).toEqual('1Hello1')
    expect(camelCase('h2w')).toEqual('h2W')
  })

  it('pascalCase', () => {
    expect(pascalCase('foo')).toEqual('Foo')
    expect(pascalCase('foo-bar')).toEqual('FooBar')
    expect(pascalCase('foo-bar-baz')).toEqual('FooBarBaz')
    expect(pascalCase('foo--bar')).toEqual('FooBar')
    expect(pascalCase('--foo-bar')).toEqual('FooBar')
    expect(pascalCase('--foo--bar')).toEqual('FooBar')
    expect(pascalCase('FOO-BAR')).toEqual('FooBar')
    expect(pascalCase('FOÈ-BAR')).toEqual('FoèBar')
    expect(pascalCase('-foo-bar-')).toEqual('FooBar')
    expect(pascalCase('--foo--bar--')).toEqual('FooBar')
    expect(pascalCase('foo.bar')).toEqual('FooBar')
    expect(pascalCase('.foo.bar.')).toEqual('FooBar')
    expect(pascalCase('.foo...bar.')).toEqual('FooBar')
    expect(pascalCase('foo_bar')).toEqual('FooBar')
    expect(pascalCase('foo__bar')).toEqual('FooBar')
    expect(pascalCase('_foo__bar_')).toEqual('FooBar')
    expect(pascalCase('__foo__bar__')).toEqual('FooBar')
    expect(pascalCase('foo_-bar')).toEqual('FooBar')
    expect(pascalCase('-foo-bar-')).toEqual('FooBar')
    expect(pascalCase('-foo--bar-')).toEqual('FooBar')
    expect(pascalCase('foo bar')).toEqual('FooBar')
    expect(pascalCase('foo    bar')).toEqual('FooBar')
    expect(pascalCase('foo bar  ')).toEqual('FooBar')
    expect(pascalCase('   foo bar  ')).toEqual('FooBar')
    expect(pascalCase('   Foo bar  ')).toEqual('FooBar')
    expect(pascalCase('   Foo Bar  ')).toEqual('FooBar')
    expect(pascalCase('-')).toEqual('-')
    expect(pascalCase(' - ')).toEqual('-')
    expect(pascalCase('fooBar')).toEqual('FooBar')
    expect(pascalCase('fooBar-baz')).toEqual('FooBarBaz')
    expect(pascalCase('FBBazzy')).toEqual('FbBazzy')
    expect(pascalCase('F')).toEqual('F')
    expect(pascalCase('Foo')).toEqual('Foo')
    expect(pascalCase('FOO')).toEqual('Foo')
    expect(pascalCase(['foo', 'bar'])).toEqual('FooBar')
    expect(pascalCase(['foo', '-bar'])).toEqual('FooBar')
    expect(pascalCase(['foo', '-bar', 'baz'])).toEqual('FooBarBaz')
    expect(pascalCase(['', '', ''])).toEqual('')
    expect(pascalCase(['--', '', ''])).toEqual('')
    expect(pascalCase([])).toEqual('')
    expect(pascalCase('')).toEqual('')
    expect(pascalCase('--__--_--_')).toEqual('')
    expect(pascalCase('foo bar?')).toEqual('FooBar?')
    expect(pascalCase('foo bar!')).toEqual('FooBar!')
    expect(pascalCase('foo bar$')).toEqual('FooBar$')
    expect(pascalCase('foo-bar#')).toEqual('FooBar#')
    expect(pascalCase('XMLHttpRequest')).toEqual('XmlHttpRequest')
    expect(pascalCase('mGridCol6@md')).toEqual('MGridCol6@md')
    expect(pascalCase('A::a')).toEqual('A::a')
    expect(pascalCase('Hello1World')).toEqual('Hello1World')
    expect(pascalCase('Hello11World')).toEqual('Hello11World')
    expect(pascalCase('hello11World')).toEqual('Hello11World')
    expect(pascalCase('Hello1World11foo')).toEqual('Hello1World11Foo')
    expect(pascalCase('Hello1')).toEqual('Hello1')
    expect(pascalCase('1Hello1')).toEqual('1Hello1')
    expect(pascalCase('1hello1')).toEqual('1Hello1')
    expect(pascalCase('h2w')).toEqual('H2W')
  })
})
