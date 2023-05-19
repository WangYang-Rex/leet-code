import { describe, expect, it } from 'vitest'
import { numTilePossibilities } from '.'

describe('活字印刷', () => {
  describe('模拟', () => {
    testCase(numTilePossibilities)
  })
})

function testCase(fn: (tiles: string) => number) {
  it.each([
    // test cases
    ['AAB', 8],
    ['AAABBC', 188],
    ['V', 1],
  ])('示例%#', (tiles, expected) => {
    expect(fn(tiles)).toBe(expected)
  })
}
