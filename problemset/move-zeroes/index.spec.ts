import { describe, expect, it } from 'vitest'
import { moveZeroes, moveZeroes1 } from '.'

describe('移动零', () => {
  describe('解法一', () => {
    testCase(moveZeroes1)
  })
  describe('解法二', () => {
    testCase(moveZeroes)
  })
})

function testCase(fn: (nums: number[]) => void) {
  it.each([
    [[0, 1, 0, 3, 12], [1, 3, 12, 0, 0]],
    [[0], [0]],
  ])('示例%#', (nums, expected) => {
    fn(nums)
    expect(nums).toStrictEqual(expected)
  })
}
