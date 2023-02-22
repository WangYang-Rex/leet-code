import { describe, expect, it } from 'vitest'
import { stoneGameII } from '.'

describe('石子游戏 II', () => {
  describe('动态规划', () => {
    testCase(stoneGameII)
  })
})

function testCase(fn: (piles: number[]) => number) {
  it.each([
    // test cases
    [[2, 7, 9, 4, 4], 10],
    [[1, 2, 3, 4, 5, 100], 104],
  ])('示例%#', (piles, expected) => {
    expect(fn(piles)).toBe(expected)
  })
}
