import { describe, expect, it } from 'vitest'
import { braceExpansionII } from '.'

describe('花括号展开 II', () => {
  describe('', () => {
    testCase(braceExpansionII)
  })
})

function testCase(fn: (expression: string) => string[]) {
  it.each([
    // test cases
    ['{a,b}{c,{d,e}}', ['ac', 'ad', 'ae', 'bc', 'bd', 'be']],
    ['{{a,z},a{b,c},{ab,z}}', ['a', 'ab', 'ac', 'z']],
  ])('示例%#', (expression, expected) => {
    expect(fn(expression)).toStrictEqual(expected)
  })
}
