import { describe, expect, it } from 'vitest'
import { reverseStr } from '.'

describe('反转字符串 II', () => {
  testCase(reverseStr)
})

function testCase(fn: (s: string, k: number) => string) {
  it.each([
    // test cases
    ['abcdefg', 2, 'bacdfeg'],
    ['abcd', 2, 'bacd'],
  ])('示例%#', (s, k, expected) => {
    expect(fn(s, k)).toStrictEqual(expected)
  })
}
