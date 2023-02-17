import { describe, expect, it } from 'vitest'
import { mySqrt } from '.'

describe('x 的平方根', () => {
  testCase(mySqrt)
})

function testCase(fn: (x: number) => number) {
  it.each([
    // test cases
    [4, 2],
    [8, 2],
  ])('示例%#', (x, expected) => {
    expect(fn(x)).toBe(expected)
  })
}
