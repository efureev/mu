import { replaceByTemplate, strtr } from './../../src/string'

describe('replaceByTemplate', () => {
  it('text', () => {
    expect(replaceByTemplate('aaaa', { aa: 2, a: 1 })).toEqual('22')
    expect(replaceByTemplate('aaaa', { aa: '2', a: '3' })).toEqual('22')
    expect(replaceByTemplate('aaaa', { aa: 'a', a: '3' })).toEqual('aa')
  })

  it('from object', () => {
    expect(replaceByTemplate('hi all, I said hello', { hi: 'hello', hello: 'hi' })).toEqual('hello all, I said hi')
    expect(replaceByTemplate('hi all, I said hi all!', { hi: 'hello', all: 'you' })).toEqual(
      'hello you, I said hello you!'
    )
    expect(replaceByTemplate('hi all, I said hello', { hi: 'hello', hello: 'hi', I: 'we' })).toEqual(
      'hello all, we said hi'
    )
    expect(replaceByTemplate('hi all', { ' all': '!', hello: 'hi', I: 'we' })).toEqual('hi!')
    expect(replaceByTemplate('hi all', {})).toEqual('hi all')
    expect(replaceByTemplate('aa', { aa: 2, a: 1 })).toEqual('2')
    expect(replaceByTemplate('aaaa', { aa: 2, a: 1 })).toEqual('22')
    // expect(replaceByTemplate('aaa', { aa: 2, a: 1 })).toEqual('21') @todo
    // expect(replaceByTemplate('aaa', { a: 'x' })).toEqual('xxx') @todo
  })
})

describe('replaceByTemplate', () => {
  it('from object', () => {
    expect(strtr('hi all, I said hello', { hi: 'hello', hello: 'hi' })).toEqual('hello all, I said hi')
    expect(strtr('hi all, I said hi all!', { hi: 'hello', all: 'you' })).toEqual('hello you, I said hello you!')
    expect(strtr('hi all, I said hello', { hi: 'hello', hello: 'hi', I: 'we' })).toEqual('hello all, we said hi')
    expect(strtr('hi all', { ' all': '!', hello: 'hi', I: 'we' })).toEqual('hi!')
    expect(strtr('hi all', {})).toEqual('hi all')
    expect(strtr('aa', { aa: 2, a: 1 })).toEqual('2')
    expect(strtr('aaaa', { aa: 2, a: 1 })).toEqual('22')
    // expect(strtr('aaa', { aa: 2, a: 1 })).toEqual('21') @todo
    // expect(strtr('aaa', { a: 'x' })).toEqual('xxx') @todo
  })
})

describe('strtr', () => {
  it('', () => {
    const string = 'hello world'

    expect(strtr(string, 'l', 'p')).toEqual('heppo worpd')
    expect(strtr('abcdcdb', 'ab', 'AB')).toEqual('ABcdcdB')
    expect(strtr('äaabaåccasdeöoo', 'äåö', 'aao')).toEqual('aaabaaccasdeooo')
    expect(strtr('ääääääää', 'ä', 'a')).toEqual('aaaaaaaa')
    expect(strtr(strtr('http', 'pthxyz', 'xyzpth'), 'pthxyz', 'xyzpth')).toEqual('http')
  })
})
