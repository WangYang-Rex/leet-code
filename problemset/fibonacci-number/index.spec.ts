import { describe, expect, it } from 'vitest'
import { fib } from '.';

describe('斐波那契数', () => {
  describe('递归', () => {
    testCase(fib)
  })
})

function testCase(fn: (n: number) => number) {
  it.each([
    // test cases
    [2, 1],
    [3, 2],
    [4, 3],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
