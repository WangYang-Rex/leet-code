import { describe, expect, it } from 'vitest'
import { equalPairs } from '.'

describe('相等行列对', () => {
  describe('哈希', () => {
    testCase(equalPairs)
  })
})

function testCase(fn: (grid: number[][]) => number) {
  it.each([
    // test cases
    [[[3, 2, 1], [1, 7, 6], [2, 7, 7]], 1],
    [[[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]], 3],
    [[[13, 13], [13, 13]], 4],
  ])('示例%#', (grid, expected) => {
    expect(fn(grid)).toBe(expected)
  })
}
