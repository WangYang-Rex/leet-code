import { describe, expect, it } from 'vitest'
import { rand10 } from '.'

describe('用 Rand7() 实现 Rand10()', () => {
  testCase(rand10)
})

function testCase(fn: () => number) {
  it.each([
    // test cases
    [1, [2]],
    [2, [2, 8]],
    [3, [3, 8, 10]],
  ])('示例%#', () => {
    const res = fn();
    expect(res <= 10).toBe(true)
    expect(res >= 1).toBe(true)
  })
}
