import { describe, expect, it } from 'vitest'
import { isSubsequence, isSubsequence1 } from '.'

describe('判断子序列', () => {
  describe('双指针', () => {
    testCase(isSubsequence)
  })
  describe('双指针', () => {
    testCase(isSubsequence1)
  })
})

function testCase(fn: (s: string, t: string) => boolean) {
  it.each([
    // test cases
    ['abc', 'ahbgdc', true],
    ['axc', 'ahbgdc', false],
    ['b', 'c', false],
    ['rjufvjafbxnbgriwgokdgqdqewn', 'mjmqqjrmzkvhxlyruonekhhofpzzslupzojfuoztvzmmqvmlhgqxehojfowtrinbatjujaxekbcydldglkbxsqbbnrkhfdnpfbuaktupfftiljwpgglkjqunvithzlzpgikixqeuimmtbiskemplcvljqgvlzvnqxgedxqnznddkiujwhdefziydtquoudzxstpjjitmiimbjfgfjikkjycwgnpdxpeppsturjwkgnifinccvqzwlbmgpdaodzptyrjjkbqmgdrftfbwgimsmjpknuqtijrsnwvtytqqvookinzmkkkrkgwafohflvuedssukjgipgmypakhlckvizmqvycvbxhlljzejcaijqnfgobuhuiahtmxfzoplmmjfxtggwwxliplntkfuxjcnzcqsaagahbbneugiocexcfpszzomumfqpaiydssmihdoewahoswhlnpctjmkyufsvjlrflfiktndubnymenlmpyrhjxfdcq', false],
  ])('示例%#', (s, t, expected) => {
    expect(fn(s, t)).toBe(expected)
  })
}
