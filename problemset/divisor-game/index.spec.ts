import { describe, expect, it } from 'vitest'
import { divisorGame, divisorGame1 } from '.'

describe('除数博弈', () => {
  describe('数学', () => {
    testCase(divisorGame)
  })
  describe('动态规划', () => {
    testCase(divisorGame1)
  })
})

function testCase(fn: (n: number) => boolean) {
  it.each([
    // test cases
    [2, true],
    [3, false],
    [4, true],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
