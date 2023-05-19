import { describe, expect, it } from 'vitest'
import { myPow, myPow1 } from '.'

describe('Pow(x, n)', () => {
  describe('暴力', () => {
    testCase(myPow)
  })
  describe('快速幂', () => {
    testCase(myPow1)
  })
})

function testCase(fn: (x: number, n: number) => number) {
  it.each([
    // test cases
    [2.00000, 10, 1024.00000],
    [2.10000, 3, 9.26100],
    [2.00000, -2, 0.25000],
  ])('示例%#', (x, n, expected) => {
    expect(fn(x, n)).toBe(expected)
  })
}
