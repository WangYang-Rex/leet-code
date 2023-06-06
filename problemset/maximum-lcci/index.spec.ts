import { describe, expect, it } from 'vitest'
import { maximum } from '.'

describe('最大数值', () => {
  describe('', () => {
    testCase(maximum)
  })
})

function testCase(fn: (a: number, b: number) => number) {
  it.each([
    // test cases
    [1, 2, 2],
  ])('示例%#', (a, b, expected) => {
    expect(fn(a, b)).toBe(expected)
  })
}
