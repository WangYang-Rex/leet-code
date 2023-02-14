import { describe, expect, it } from 'vitest'
import { longestWPI } from '.'

describe('表现良好的最长时间段', () => {
  describe('滑动窗口', () => {
    testCase(longestWPI)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[9, 9, 6, 0, 6, 6, 9], 3],
    [[6, 6, 6], 0],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
