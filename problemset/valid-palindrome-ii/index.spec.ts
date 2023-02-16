import { describe, expect, it } from 'vitest'
import { validPalindrome } from '.'

describe('验证回文串 II', () => {
  testCase(validPalindrome)
})

function testCase(fn: (s: string) => boolean) {
  it.each([
    ['aba', true],
    ['abca', true],
    ['abc', false],
    ['ebcbbececabbacecbbcbe', true],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
