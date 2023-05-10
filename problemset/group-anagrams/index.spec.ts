import { describe, expect, it } from 'vitest'
import { groupAnagrams } from './'

describe('字母异位词分组', () => {
  describe('', () => {
    testCase(groupAnagrams)
  })
})
function testCase(fn: (strs: string[]) => string[][]) {
  it.each([
    // test cases
    [['eat', 'tea', 'tan', 'ate', 'nat', 'bat'], [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]],
    [[''], [['']]],
    [['a'], [['a']]],
  ])('示例%#', (strs, expected) => {
    expect(fn(strs)).toStrictEqual(expected)
  })
}
