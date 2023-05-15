import { describe, expect, it } from 'vitest'
import { maxEqualRowsAfterFlips } from '.'

describe('按列翻转得到最大值等行数', () => {
  describe('', () => {
    testCase(maxEqualRowsAfterFlips);
  })
})

function testCase(fn: (matrix: number[][]) => number) {
  it.each([
    // test cases
    [[[0, 1], [1, 1]], 1],
    [[[0, 1], [1, 0]], 2],
    [[[0, 0, 0], [0, 0, 1], [1, 1, 0]], 2],
  ])('示例%#', (matrix, expected) => {
    expect(fn(matrix)).toBe(expected)
  })
}
