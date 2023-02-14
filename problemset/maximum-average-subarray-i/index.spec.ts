import { describe, expect, it } from 'vitest'
import { findMaxAverage } from '.'

describe('子数组最大平均数 I', () => {
  testCase(findMaxAverage)
})

function testCase(fn: (nums: number[], k: number) => number) {
  it.each([
    // test cases
    [[1, 12, -5, -6, 50, 3], 4, 12.75],
    [[5], 1, 5],
  ])('示例%#', (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected)
  })
}
