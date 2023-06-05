import { describe, expect, it } from 'vitest'
import { maxRepOpt1 } from '.'

describe('单字符重复子串的最大长度', () => {
  describe('双指针', () => {
    testCase(maxRepOpt1)
  })
  describe('滑动窗口', () => {
    testCase(maxRepOpt1)
  })
})

function testCase(fn: (text: string) => number) {
  it.each([
    // test cases
    ['ababa', 3],
    ['aaabaaa', 6],
    ['aaabbaaa', 4],
    ['aaaaa', 5],
    ['abcdef', 1],
    ['acbaaa', 4],
  ])('示例%#', (text, expected) => {
    expect(fn(text)).toBe(expected)
  })
}
