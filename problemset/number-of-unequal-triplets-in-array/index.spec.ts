import { describe, expect, it } from 'vitest'
import { unequalTriplets } from '.';

describe('数组中不等三元组的数目', () => {
  describe('遍历', () => {
    testCase(unequalTriplets)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[4, 4, 2, 4, 3], 3],
    [[1, 1, 1, 1, 1], 0],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
