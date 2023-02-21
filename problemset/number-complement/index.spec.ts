import { describe, expect, it } from 'vitest'
import { findComplement } from '.'

describe('数字的补数', () => {
  testCase(findComplement);
})

function testCase(fn: (num: number) => number) {
  it.each([
    // test cases
    [5, 2],
    [1, 0],
  ])('示例%#', (num, expected) => {
    expect(fn(num)).toBe(expected)
  })
}
