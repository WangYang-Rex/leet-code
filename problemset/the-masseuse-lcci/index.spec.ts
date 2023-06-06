import { describe, expect, it } from 'vitest'
import { massage } from '.'

describe('按摩师', () => {
  describe('动态规划', () => {
    testCase(massage)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[1, 2, 3, 1], 4],
    [[2, 7, 9, 3, 1], 12],
    [[2, 1, 4, 5, 3, 1, 1, 3], 12],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
