import { describe, it } from 'vitest'
import { permute, permute1 } from '.'
import { twoDimensionalArrayEqual } from '~/utils/tools'

describe('全排列', () => {
  describe('回溯', () => {
    testCase(permute)
  })
  describe('动态规划', () => {
    testCase(permute1)
  })
})

function testCase(fn: (nums: number[]) => number[][]) {
  it.each([
    [
      [1, 2, 3],
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    ],
    [
      [0, 1],
      [
        [0, 1],
        [1, 0],
      ],
    ],
  ])('示例%#', (nums, expected) => {
    twoDimensionalArrayEqual(fn(nums), expected)
  })
}
