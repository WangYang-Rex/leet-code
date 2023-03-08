import { describe, expect, it } from 'vitest'
import { maxValue } from '.'

describe('礼物的最大价值', () => {
  describe('动态规划', () => {
    testCase(maxValue)
  })
})

function testCase(fn: (grid: number[][]) => number) {
  it.each([
    // test cases
    [[
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ], 12],
  ])('示例%#', (grid, expected) => {
    expect(fn(grid)).toBe(expected)
  })
}
