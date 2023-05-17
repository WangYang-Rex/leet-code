import { describe, expect, it } from 'vitest'
import { haveConflict } from '.'

describe('判断两个事件是否存在冲突', () => {
  describe('', () => {
    testCase(haveConflict)
  })
})

function testCase(fn: (event1: string[], event2: string[]) => boolean) {
  it.each([
    // test cases
    [['01:15', '02:00'], ['02:00', '03:00'], true],
    [['01:00', '02:00'], ['01:20', '03:00'], true],
    [['10:00', '11:00'], ['14:00', '15:00'], false],
  ])('示例%#', (event1, event2, expected) => {
    expect(fn(event1, event2)).toBe(expected)
  })
}
