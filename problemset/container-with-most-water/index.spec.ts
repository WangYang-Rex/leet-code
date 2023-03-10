import { describe, expect, it } from 'vitest'
import { maxArea } from '.'

describe('盛最多水的容器', () => {
  describe('双指针', () => {
    testCase(maxArea)
  })
})

function testCase(fn: (height: number[]) => number) {
  it.each([
    [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
    [[1, 1], 1],
    [[4, 3, 2, 1, 4], 16],
    [[1, 2, 1], 2],
  ])('示例%#', (height, expected) => {
    expect(fn(height)).toEqual(expected)
  })
}
