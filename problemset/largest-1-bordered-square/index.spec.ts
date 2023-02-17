import { describe, expect, it } from 'vitest'
import { largest1BorderedSquare } from '.'

describe('最大的以 1 为边界的正方形', () => {
  describe('二分法', () => {
    testCase(largest1BorderedSquare)
  })
})

function testCase(fn: (grid: number[][]) => number) {
  it.each([
    // test cases
    [[[1, 1, 1], [1, 0, 1], [1, 1, 1]], 9],
    [[[1, 1, 0, 0]], 1],
    [[[1, 1], [1, 0]], 1],
  ])('示例%#', (grid, expected) => {
    expect(fn(grid)).toBe(expected)
  })
}
