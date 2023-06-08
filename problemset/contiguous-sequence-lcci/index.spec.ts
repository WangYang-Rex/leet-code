import { describe, expect, it } from 'vitest'
import { maxSubArray } from '.'

describe('连续数列', () => {
  describe('', () => {
    testCase(maxSubArray)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
