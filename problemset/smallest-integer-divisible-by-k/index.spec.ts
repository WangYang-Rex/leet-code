import { describe, expect, it } from 'vitest'
import { smallestRepunitDivByK } from './index'

describe('可被 K 整除的最小整数', () => {
  describe('遍历', () => {
    testCase(smallestRepunitDivByK)
  })
})

function testCase(fn: (k: number) => number) {
  it.each([
    // test cases
    [1, 1],
    [2, -1],
    [3, 3],
  ])('示例%#', (k, expected) => {
    expect(fn(k)).toBe(expected)
  })
}
