import { describe, expect, it } from 'vitest'
import { stoneGame } from '.';

describe('石子游戏', () => {
  describe('动态规划', () => {
    testCase(stoneGame)
  })
})

function testCase(fn: (piles: number[]) => boolean) {
  it.each([
    // test cases
    [[5, 3, 4, 5], true],
    [[3, 7, 2, 3], true],
  ])('示例%#', (piles, expected) => {
    expect(fn(piles)).toBe(expected)
  })
}
