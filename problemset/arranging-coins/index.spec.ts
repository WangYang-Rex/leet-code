import { describe, expect, it } from 'vitest'
import { arrangeCoins } from '.';

describe('排列硬币', () => {
  testCase(arrangeCoins)
})

function testCase(fn: (n: number) => number) {
  it.each([
    // test cases
    [5, 2],
    [8, 3],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
