import { describe, expect, it } from 'vitest'
import { isPalindrome, isPalindrome1 } from '.'

describe('验证回文串', () => {
  testCase(isPalindrome)
  testCase(isPalindrome1)
})

function testCase(fn: (s: string) => boolean) {
  it.each([
    ['A man, a plan, a canal: Panama', true],
    ['race a car', false],
    ['0P', false],
    ['ab_a', true],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
