import { describe, expect, it } from 'vitest'
import { fizzBuzz } from '.'

describe('Fizz Buzz', () => {
  testCase(fizzBuzz)
})

function testCase(fn: (n: number) => string[]) {
  it.each([
    // test cases
    [3, ['1', '2', 'Fizz']],
    [5, ['1', '2', 'Fizz', '4', 'Buzz']],
    [15, ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toStrictEqual(expected)
  })
}
