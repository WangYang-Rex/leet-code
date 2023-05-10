import { describe, expect, it } from 'vitest'
import { countTime } from './index'

describe('有效时间的数目', () => {
  describe('', () => {
    testCase(countTime)
  })
})

function testCase(fn: (time: string) => number) {
  it.each([
    // test cases
    ['?5:00', 2],
    ['0?:0?', 100],
    ['??:??', 1440],
  ])('示例%#', (time, expected) => {
    expect(fn(time)).toBe(expected)
  })
}
