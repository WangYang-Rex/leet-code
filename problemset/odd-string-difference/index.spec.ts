import { describe, expect, it } from 'vitest'
import { oddString } from '.'

describe('差值数组不同的字符串', () => {
  testCase(oddString)
})

function testCase(fn: (words: string[]) => string) {
  it.each([
    // test cases
    [['adc', 'wzy', 'abc'], 'abc'],
    [['aaa', 'bob', 'ccc', 'ddd'], 'bob'],
  ])('示例%#', (words, expected) => {
    expect(fn(words)).toStrictEqual(expected)
  })
}
