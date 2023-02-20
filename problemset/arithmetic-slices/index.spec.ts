import { describe, expect, it } from 'vitest'
import { numberOfArithmeticSlices } from '.'

describe('等差数列划分', () => {
  testCase(numberOfArithmeticSlices)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[1, 2, 3, 4], 3],
    [[1], 0],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
