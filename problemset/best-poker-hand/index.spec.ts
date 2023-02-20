import { describe, expect, it } from 'vitest'
import { bestHand } from '.'

describe('最好的扑克手牌', () => {
  describe('最好的扑克手牌', () => {
    testCase(bestHand)
  })
})

function testCase(fn: (ranks: number[], suits: string[]) => string) {
  it.each([
    // test cases
    [[13, 2, 3, 1, 9], ['a', 'a', 'a', 'a', 'a'], 'Flush'],
    [[4, 4, 2, 4, 4], ['d', 'a', 'a', 'b', 'c'], 'Three of a Kind'],
    [[10, 10, 2, 12, 9], ['a', 'b', 'c', 'a', 'd'], 'Pair'],
  ])('示例%#', (ranks, suits, expected) => {
    expect(fn(ranks, suits)).toBe(expected)
  })
}
