import { describe, expect, it } from 'vitest'
import { findLongestWord } from '.'

describe('通过删除字母匹配到字典里最长单词', () => {
  describe('', () => {
    testCase(findLongestWord)
  })
})

function testCase(fn: (s: string, dictionary: string[]) => string) {
  it.each([
    // test cases
    ['abpcplea', ['ale', 'apple', 'monkey', 'plea'], 'apple'],
    ['abpcplea', ['a', 'b', 'c'], 'a'],
  ])('示例%#', (s, dictionary, expected) => {
    expect(fn(s, dictionary)).toBe(expected)
  })
}
