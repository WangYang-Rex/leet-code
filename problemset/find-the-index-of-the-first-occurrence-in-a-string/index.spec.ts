import { describe, expect, it } from 'vitest'
import { strStr } from '.'

describe('找出字符串中第一个匹配项的下标', () => {
  testCase(strStr)
})

function testCase(fn: (haystack: string, needle: string) => number) {
  it.each([
    // test cases
    ['sadbutsad', 'sad', 0],
    ['leetcode', 'leeto', -1],
  ])('示例%#', (haystack, needle, expected) => {
    expect(fn(haystack, needle)).toBe(expected)
  })
}
