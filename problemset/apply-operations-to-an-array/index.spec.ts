import { describe, expect, it } from 'vitest'
import { applyOperations } from '.';

describe('对数组执行操作', () => {
  describe('', () => {
    testCase(applyOperations)
  })
})

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    // test cases
    [[1, 2, 2, 1, 1, 0], [1, 4, 2, 0, 0, 0]],
    [[0, 1], [1, 0]],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toStrictEqual(expected)
  })
}
