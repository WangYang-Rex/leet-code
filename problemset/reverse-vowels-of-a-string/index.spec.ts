import { describe, expect, it } from 'vitest'
import { reverseVowels } from '.'

describe('反转字符串中的元音字母', () => {
  testCase(reverseVowels)
})

function testCase(fn: (s: string) => string) {
  it.each([
    ['hello', 'holle'],
    ['leetcode', 'leotcede'],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
