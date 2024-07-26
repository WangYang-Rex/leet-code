import { describe, expect, it } from 'vitest'
import { findValueOfPartition } from '.'

describe('找出分区值', () => {
  testCase(findValueOfPartition)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[1, 3, 2, 4], 1],
    [[100, 1, 10], 9],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
