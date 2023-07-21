import { describe, expect, it } from 'vitest'
import { subsetsWithDup } from '.'

describe('子集 II', () => {
  describe('位运算', () => {
    testCase(subsetsWithDup)
  })
})

function testCase(fn: (nums: number[]) => number[][]) {
  it.each([
    // test cases
    [[1, 2, 2], [[], [1], [2], [1, 2], [2, 2], [1, 2, 2]]],
    [[0], [[], [0]]],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toStrictEqual(expected)
  })
}
