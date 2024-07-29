import { describe, expect, it } from 'vitest'
import { calPoints } from '.'

describe('棒球比赛', () => {
  testCase(calPoints)
})

function testCase(fn: (operations: string[]) => number) {
  it.each([
    // test cases
    [['5', '2', 'C', 'D', '+'], 30],
    [['5', '-2', '4', 'C', 'D', '9', '+', '+'], 27],
    [['1'], 1],
  ])('示例%#', (operations, expected) => {
    expect(fn(operations)).toBe(expected)
  })
}
