import { describe, expect, it } from 'vitest'
import { findMaximizedCapital } from '.'

describe('IPO', () => {
  describe('', () => {
    testCase(findMaximizedCapital)
  })
})

function testCase(fn: (k: number, w: number, profits: number[], capital: number[]) => number) {
  it.each([
    // test cases
    [2, 0, [1, 2, 3], [0, 1, 1], 4],
    // [3, 0, [1, 2, 3], [1, 1, 2], 6],
  ])('示例%#', (k, w, profits, capital, expected) => {
    expect(
      fn(k, w, profits, capital),
    ).toBe(expected)
  })
}
