import { describe, expect, it } from 'vitest'
import { longestNiceSubstring } from '.'

describe('最长的美好子字符串', () => {
  describe('滑动窗口', () => {
    testCase(longestNiceSubstring);
  })
})

function testCase(fn: (s: string) => string) {
  it.each([
    // test cases
    ['YazaAay', 'aAa'],
    ['Bb', 'Bb'],
    ['c', ''],
    ['dDzeE', 'dD'],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
