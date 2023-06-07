import { describe, expect, it } from 'vitest'
import { minCostClimbingStairs } from '.'

describe('使用最小花费爬楼梯', () => {
  describe('动态规划', () => {
    testCase(minCostClimbingStairs)
  })
})

function testCase(fn: (cost: number[]) => number) {
  it.each([
    // test cases
    [[10, 15, 20], 15],
    [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1], 6],
  ])('示例%#', (cost, expected) => {
    expect(fn(cost)).toBe(expected)
  })
}
