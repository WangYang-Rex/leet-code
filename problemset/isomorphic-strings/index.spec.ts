import { describe, expect, it } from 'vitest'
import { isIsomorphic } from '.'

describe('同构字符串', () => {
  describe('typescript', () => {
    testCase(isIsomorphic)
  })
})

function testCase(fn: (s: string, t: string) => boolean) {
  it.each([
    // test cases
    ['egg', 'add', true],
    ['foo', 'bar', false],
    ['paper', 'title', true],
  ])('示例%#', (s, t, expected) => {
    expect(fn(s, t)).toBe(expected)
  })
}
