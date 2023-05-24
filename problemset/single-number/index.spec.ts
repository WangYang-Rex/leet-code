import { describe, expect, it } from 'vitest'
import { singleNumber } from '.'

describe('只出现一次的数字', () => {
  describe('异或', () => {
    testCase(singleNumber)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[2, 2, 1], 1],
    [[4, 1, 2, 1, 2], 4],
    [[1], 1],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
