import { describe, expect, it } from 'vitest'
import { longestPalindrome, longestPalindrome2, longestPalindrome3 } from '.'

describe('最长回文子串', () => {
  describe('暴力解法', () => {
    testCase(longestPalindrome)
  })
  describe('Manacher算法', () => {
    testCase(longestPalindrome2)
  })
  describe('中心扩展', () => {
    testCase(longestPalindrome3)
  })
})

function testCase(fn: (s: string) => string) {
  it.each([
    ['babad', /bab|aba/],
    ['cbbd', 'bb'],
    ['a', 'a'],
    ['ac', /a|c/],
    ['bb', 'bb'],
    ['ccc', 'ccc'],
    ['aaaa', 'aaaa'],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toMatch(expected)
  })
}
