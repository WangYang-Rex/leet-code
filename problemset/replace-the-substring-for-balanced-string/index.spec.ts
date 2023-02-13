import { describe, expect, it } from 'vitest'
import { balancedString } from '.'

describe('替换子串得到平衡字符串', () => {
  describe('双指针', () => {
    testCase(balancedString)
  })
  describe('滑动窗口', () => {
    testCase(balancedString)
  })
})

function testCase(fn: (x: string) => number) {
  it.each([
    ['QWER', 0],
    ['QQWE', 1],
    ['QQQW', 2],
    ['WQWRQQQW', 3],
    ['WWWEQRQEWWQQQWQQQWEWEEWRRRRRWWQE', 5],
  ])('示例%#', (x, expected) => {
    expect(fn(x)).toBe(expected)
  })
}
