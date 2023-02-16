import { describe, expect, it } from 'vitest'
import { reverseWords } from '.'

describe('反转字符串中的单词 III', () => {
  testCase(reverseWords)
})

function testCase(fn: (s: string) => string) {
  it.each([
    // test cases
    ['Let\'s take LeetCode contest', 's\'teL ekat edoCteeL tsetnoc'],
    ['God Ding', 'doG gniD'],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toStrictEqual(expected)
  })
}
