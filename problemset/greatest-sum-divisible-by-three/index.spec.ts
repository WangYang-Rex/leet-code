import { describe, expect, it } from 'vitest'
import { maxSumDivThree } from '.';

describe('可被三整除的最大和', () => {
  describe('动态规划', () => {
    testCase(maxSumDivThree);
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[3, 6, 5, 1, 8], 18],
    [[4], 0],
    [[1, 2, 3, 4, 4], 12],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
