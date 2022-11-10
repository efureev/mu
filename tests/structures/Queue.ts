import { Queue } from '~/structures'

describe('Queue', () => {
  it('should create empty queue', () => {
    const queue = new Queue()
    expect(queue).not.toBeNull()
    // @ts-ignore
    expect(queue.data).not.toBeUndefined()
  })

  it('should enqueue data to queue', () => {
    const queue = new Queue()

    queue.push(1)
    queue.push(2)

    expect(queue.toString()).toBe('1,2')
  })

  it('should reset data into queue', () => {
    const queue = new Queue()

    queue.push('Jack')
    queue.push('Ann')
    queue.reset()

    expect(queue.isEmpty()).toBe(true)
  })

  it('should get size data from queue', () => {
    const queue = new Queue()

    expect(queue.size()).toBe(0)

    queue.push(1)
    expect(queue.size()).toBe(1)

    queue.push(2)
    expect(queue.size()).toBe(2)

    queue.pull()
    expect(queue.size()).toBe(1)
  })

  it('should be possible to enqueue/dequeue objects', () => {
    const queue = new Queue()

    queue.push({ value: 'test1', key: 'key1' })
    queue.push({ value: 'test2', key: 'key2' })

    const stringifier = (value: any) => `${value.key}:${value.value}`

    expect(queue.toString(stringifier)).toBe('key1:test1,key2:test2')
    // @ts-ignore
    expect(queue.pull().value).toBe('test1')
    // @ts-ignore
    expect(queue.pull().value).toBe('test2')
  })

  it('should peek data from queue', () => {
    const queue = new Queue()

    expect(queue.peek()).toBeUndefined()

    queue.push(1)
    queue.push(2)

    expect(queue.peek()).toBe(1)
    expect(queue.peek()).toBe(1)
  })

  it('should check if queue is empty', () => {
    const queue = new Queue()

    expect(queue.isEmpty()).toBe(true)

    queue.push(1)

    expect(queue.isEmpty()).toBe(false)
  })

  it('should dequeue from queue in FIFO order', () => {
    const queue = new Queue()

    queue.push(1)
    queue.push(2)

    expect(queue.pull()).toBe(1)
    expect(queue.pull()).toBe(2)
    expect(queue.pull()).toBeUndefined()
    expect(queue.isEmpty()).toBe(true)
  })
})
