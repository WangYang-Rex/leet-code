import { describe, expect, it } from 'vitest'
import { guessNumber } from '.'

describe('猜数字大小', () => {
  describe('二分查找', () => {
    testCase(guessNumber)
  })
})

function testCase(fn: (n: number, num: number) => number) {
  it.each([
    // test cases
    [10, 6, 6],
    [1, 1, 1],
    [2, 1, 1],
    [2, 2, 2],
    [1000, 50, 50],
  ])('示例%#', (n, num, expected) => {
    expect(fn(n, num)).toBe(expected)
  })
}
