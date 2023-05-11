import { describe, expect, it } from 'vitest'
import { queryString } from '.'

describe('子串能表示从 1 到 N 数字的二进制串', () => {
  describe('', () => {
    testCase(queryString)
  })
})
function testCase(fn: (s: string, n: number) => boolean) {
  it.each([
    // test cases
    ['0110', 3, true],
    ['0110', 4, false],
  ])('示例%#', (s, n, expected) => {
    expect(fn(s, n)).toBe(expected)
  })
}
