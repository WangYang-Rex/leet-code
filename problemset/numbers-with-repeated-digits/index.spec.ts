import { describe, expect, it } from 'vitest'
import { numDupDigitsAtMostN, numDupDigitsAtMostN1, numDupDigitsAtMostN2 } from './index'

describe('至少有 1 位重复的数字', () => {
  describe('遍历', () => {
    testCase(numDupDigitsAtMostN)
  })
  describe('动态规划', () => {
    testCase(numDupDigitsAtMostN1)
  })
  describe('数学组合', () => {
    testCase(numDupDigitsAtMostN2)
  })
})

function testCase(fn: (n: number) => number) {
  it.each([
    // test cases
    [20, 1],
    [100, 10],
    [1000, 262],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
