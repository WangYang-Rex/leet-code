import { describe, expect, it } from 'vitest'
import { printBin } from '.'

describe('二进制数转字符串', () => {
  describe('', () => {
    testCase(printBin)
  })
})

function testCase(fn: (num: number) => string) {
  it.each([
    // test cases
    [0.625, '0.101'],
    [0.1, 'ERROR'],
  ])('示例%#', (num, expected) => {
    expect(fn(num)).toBe(expected)
  })
}
