import { describe, expect, it } from 'vitest'
import { singleNumber } from '.'

describe('只出现一次的数字 II', () => {
  describe('位运算', () => {
    testCase(singleNumber)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[2, 2, 3, 2], 3],
    [[0, 1, 0, 1, 0, 1, 99], 99],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
