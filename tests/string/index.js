import {clearSpaces, titleCase, trim, upperFirst} from './../../src/string'

describe('trim', () => {

  it('should return val if parameter provided are numbers', () => {
    expect(trim('1')).toBe('1')
    expect(trim(1)).toBe('1')
    expect(trim(' 1')).toBe('1')
    expect(trim(' 1   ')).toBe('1')
    expect(trim('    1   ')).toBe('1')
    expect(trim('    1   ')).toBe('1')
  })

  it('should return val if parameter provided are string', () => {
    expect(trim('test')).toBe('test')
    expect(trim('test    ')).toBe('test')
    expect(trim('   test')).toBe('test')
    expect(trim('   test    ')).toBe('test')
    expect(trim('   test\t  ')).toBe('test')
    expect(trim('\ttest\t  ')).toBe('test')
    expect(trim('\ntest\n  ')).toBe('test')
    expect(trim('\n\t\t\n\ntest\n  ')).toBe('test')
    expect(trim(' \n\t\rtest\r\n  ')).toBe('test')
  })

  it('should return val if parameter provided are mixed', () => {
    expect(trim('')).toBe('')
    expect(trim('    ')).toBe('')
    expect(trim('\t\t\n ')).toBe('')
    expect(trim(null)).toBe('')
    expect(trim(undefined)).toBe('')
    expect(trim(0)).toBe('0')
    expect(trim(-0)).toBe('0')
  })
})


describe('upperFirst', () => {
  it('one world', () => {
    expect(upperFirst('1')).toBe('1')
    expect(upperFirst(' 1 3 ')).toBe('1 3')
    expect(upperFirst('test')).toBe('Test')
    expect(upperFirst('Test')).toBe('Test')
    expect(upperFirst('TEST')).toBe('Test')
    expect(upperFirst('tEST')).toBe('Test')
  })

  it('more one world', () => {
    expect(upperFirst('  tEST  ')).toBe('Test')
    expect(upperFirst('  test  asa ')).toBe('Test  asa')
  })
})

describe('clearSpaces', () => {
  it('basic', () => {
    expect(clearSpaces(1)).toBe('1')
    expect(clearSpaces(' 1 3 ')).toBe('1 3')
    expect(clearSpaces('1   3 ')).toBe('1 3')
    expect(clearSpaces('test')).toBe('test')
    expect(clearSpaces(' Test ')).toBe('Test')
    expect(clearSpaces(' TEST')).toBe('TEST')
    expect(clearSpaces(' TEST    TEST    TEST    ')).toBe('TEST TEST TEST')
  })
})

describe('titleCase', () => {
  it('one world', () => {
    expect(titleCase('1')).toBe('1')
    expect(titleCase(' 1 3 ')).toBe('1 3')
    expect(titleCase('test')).toBe('Test')
    expect(titleCase('Test')).toBe('Test')
    expect(titleCase('TEST')).toBe('Test')
    expect(titleCase('tEST')).toBe('Test')
  })

  it('more one world', () => {
    expect(titleCase('  test  asa ')).toBe('Test Asa')
    expect(titleCase('  test asa aasas ')).toBe('Test Asa Aasas')
    expect(titleCase('test ASA ')).toBe('Test Asa')
    expect(titleCase('test ASA    asdsd   ')).toBe('Test Asa Asdsd')
  })
})
