import { describe, expect, it } from 'vitest'
import { numberOfPairs } from '.'

describe('数组能形成多少数对', () => {
  testCase(numberOfPairs);
})

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    // test cases
    [[1, 3, 2, 1, 3, 2, 2], [3, 1]],
    [[1, 1], [1, 0]],
    [[0], [0, 1]],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toStrictEqual(expected)
  })
}
