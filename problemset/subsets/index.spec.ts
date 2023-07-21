import { describe, expect, it } from 'vitest'
import { subsets } from '.';

describe('子集', () => {
  describe('位运算', () => {
    testCase(subsets);
  })
})

function testCase(fn: (nums: number[]) => number[][]) {
  it.each([
    // test cases
    [[1, 2, 3], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]],
    [[0], [[], [0]]],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toStrictEqual(expected)
  })
}
