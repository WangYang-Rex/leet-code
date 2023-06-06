import { describe, expect, it } from 'vitest'
// import { guessNumber } from '.'

describe('猜数字大小', () => {
  describe('', () => {
    testCase()
  })
})

function testCase() {
  it.each([
    // test cases
    [10, 6, 6],
    [1, 1, 1],
    [2, 1, 1],
    [2, 2, 2],
  ])('示例%#', () => {
    expect(true).toBe(true)
  })
}
