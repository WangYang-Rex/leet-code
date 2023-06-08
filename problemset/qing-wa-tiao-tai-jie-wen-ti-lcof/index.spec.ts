import { describe, expect, it } from 'vitest'
import { numWays } from '.'

describe('青蛙跳台阶问题', () => {
  describe('动态规划', () => {
    testCase(numWays)
  })
})

function testCase(fn: (n: number) => number) {
  it.each([
    // test cases
    [2, 2],
    [7, 21],
    [0, 1],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
