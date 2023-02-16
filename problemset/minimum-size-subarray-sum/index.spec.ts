import { describe, expect, it } from 'vitest'
import { minSubArrayLen, minSubArrayLen1 } from '.'

describe('长度最小的子数组', () => {
  testCase(minSubArrayLen)
  testCase(minSubArrayLen1)
})

function testCase(fn: (target: number, nums: number[]) => number) {
  it.each([
    // test cases
    [7, [2, 3, 1, 2, 4, 3], 2],
    [4, [1, 4, 4], 1],
    [11, [1, 1, 1, 1, 1, 1, 1, 1], 0],
  ])('示例%#', (target, nums, expected) => {
    expect(fn(target, nums)).toBe(expected)
  })
}
