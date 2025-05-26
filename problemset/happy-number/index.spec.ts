import { describe, expect, it } from 'vitest'
import { isHappy } from './index'

describe('快乐数', () => {
  testCase(isHappy)
})

function testCase(fn: (n: number) => boolean) {
  it.each([
    // test cases
    [19, true],
    [2, false],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
