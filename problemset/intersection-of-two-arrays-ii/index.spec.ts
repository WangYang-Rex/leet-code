import { describe, expect, it } from 'vitest'
import { intersect } from '.'
describe('两个数组的交集 II', () => {
  describe('哈希表', () => {
    testCase(intersect)
  })
})

function testCase(fn: (nums1: number[], nums2: number[]) => number[]) {
  it.each([
    // test cases
    [[1, 2, 2, 1], [2, 2], [2, 2]],
    [[4, 9, 5], [9, 4, 9, 8, 4], [9, 4]],
  ])('示例%#', (nums1, nums2, expected) => {
    expect(fn(nums1, nums2)).toStrictEqual(expected)
  })
}
