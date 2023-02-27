import { describe, expect, it } from 'vitest'
import { movesToMakeZigzag } from '.'

describe('递减元素使数组呈锯齿状', () => {
  describe('123', () => {
    testCase(movesToMakeZigzag)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[1, 2, 3], 2],
    [[9, 6, 1, 6, 2], 4],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
