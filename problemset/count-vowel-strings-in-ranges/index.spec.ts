import { describe, expect, it } from 'vitest'
import { vowelStrings } from '.'

describe('统计范围内的元音字符串数', () => {
  describe('', () => {
    testCase(vowelStrings)
  })
})

function testCase(fn: (words: string[], queries: number[][]) => number[]) {
  it.each([
    // test cases
    [['aba', 'bcb', 'ece', 'aa', 'e'], [[0, 2], [1, 4], [1, 1]], [2, 3, 0]],
    [['a', 'e', 'i'], [[0, 2], [0, 1], [2, 2]], [3, 2, 1]],
  ])('示例%#', (words, queries, expected) => {
    expect(fn(words, queries)).toStrictEqual(expected)
  })
}
