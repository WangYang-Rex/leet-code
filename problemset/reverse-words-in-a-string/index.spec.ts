import { describe, expect, it } from 'vitest'
import { reverseWords } from '.'

describe('反转字符串中的单词', () => {
  testCase(reverseWords)
})

function testCase(fn: (s: string) => string) {
  it.each([
    // test cases
    ['the sky is blue', 'blue is sky the'],
    ['  hello world  ', 'world hello'],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toStrictEqual(expected)
  })
}
