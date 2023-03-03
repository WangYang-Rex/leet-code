import { describe, expect, it } from 'vitest'
import { getFolderNames } from '.'

describe('保证文件名唯一', () => {
  describe('哈希,数组,字符串', () => {
    testCase(getFolderNames)
  })
})

function testCase(fn: (names: string[]) => string[]) {
  it.each([
    // test cases
    [['gta', 'gta(1)', 'gta', 'avalon'], ['gta', 'gta(1)', 'gta(2)', 'avalon']],
    [['onepiece', 'onepiece(1)', 'onepiece(2)', 'onepiece(3)', 'onepiece'], ['onepiece', 'onepiece(1)', 'onepiece(2)', 'onepiece(3)', 'onepiece(4)']],
    [['wano', 'wano', 'wano', 'wano'], ['wano', 'wano(1)', 'wano(2)', 'wano(3)']],
    [['kaido', 'kaido(1)', 'kaido', 'kaido(1)'], ['kaido', 'kaido(1)', 'kaido(2)', 'kaido(1)(1)']],
  ])('示例%#', (names, expected) => {
    expect(fn(names)).toStrictEqual(expected)
  })
}
