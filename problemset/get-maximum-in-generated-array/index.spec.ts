import { describe, expect, it } from 'vitest'
import { getMaximumGenerated } from '.'

describe('获取生成数组中的最大值', () => {
  describe('动态规划', () => {
    testCase(getMaximumGenerated)
  })
})

function testCase(fn: (n: number) => number) {
  it.each([
    // test cases
    [7, 3],
    [2, 1],
    [3, 2],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
