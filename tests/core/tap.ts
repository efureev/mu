import { FormData } from 'formdata-node'
import tap from '~/core/tap'

describe('tap', () => {
  it('basic', () => {
    expect(tap(12)).toEqual(12)
    expect(tap('tes')).toEqual('tes')
    expect(tap('test', (value: string) => value.toUpperCase())).toEqual('TEST')
  })

  it('advanced', () => {
    expect(tap([1, 2, 3], (value: number[]) => value.pop())).toEqual([1, 2])
    expect(tap({ b: 2, a: 'test' }, (value: Record<string, any>) => delete value.a)).toEqual({ b: 2 })
  })

  it('function', () => {
    const fn = () => 100

    expect(tap(fn)).toEqual(100)
    expect(tap(fn, (value: number) => value / 2)).toEqual(50)
  })

  it('FormData', () => {
    const fd = tap(new FormData(), (formData: FormData) => {
      formData.append('test', 'foo')
      formData.set('n', 1)
    })

    const iter = fd.keys()
    const expectedData: Record<string, any> = {}
    for (let key of iter) {
      expectedData[key] = fd.get(key)
    }
    expect(expectedData).toEqual({ test: 'foo', n: '1' })
  })
})
