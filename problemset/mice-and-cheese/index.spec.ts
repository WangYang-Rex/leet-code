import { describe, expect, it } from 'vitest'
import { miceAndCheese } from '.'
describe('老鼠和奶酪', () => {
  describe('贪心', () => {
    testCase(miceAndCheese)
  })
})

function testCase(fn: (reward1: number[], reward2: number[], k: number) => number) {
  it.each([
    // test cases
    [[1, 1, 3, 4], [4, 4, 1, 1], 2, 15],
    [[1, 1], [1, 1], 2, 2],
  ])('示例%#', (reward1, reward2, k, expected) => {
    expect(fn(reward1, reward2, k)).toBe(expected)
  })
}
