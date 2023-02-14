import { describe, expect, it } from 'vitest'
import { containsNearbyDuplicate, containsNearbyDuplicate1 } from '.'

describe('存在重复元素 II', () => {
  describe('双指针', () => {
    testCase(containsNearbyDuplicate)
  })
  describe('滑动窗口', () => {
    testCase(containsNearbyDuplicate1)
  })
})

function testCase(fn: (nums: number[], k: number) => boolean) {
  it.each([
    // test cases
    [[1, 2, 3, 1], 3, true],
    [[1, 0, 1, 1], 1, true],
    [[1, 2, 3, 1, 2, 3], 2, false],
  ])('示例%#', (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected)
  })
}
