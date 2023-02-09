import { describe, expect, it } from 'vitest'
import { removeSubfolders } from '.'

describe('删除子文件夹', () => {
  describe('剪枝', () => {
    testCase(removeSubfolders)
  })
})
function testCase(fn: (folders: string[]) => string[]) {
  it.each([
    // test cases
    [['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'], ['/a', '/c/d', '/c/f']],
    [['/a', '/a/b/c', '/a/b/d'], ['/a']],
    [['/a/b/c', '/a/b/ca', '/a/b/d'], ['/a/b/c', '/a/b/d', '/a/b/ca']],
  ])('示例%#', (folders, expected) => {
    expect(fn(folders)).toEqual(expected)
  })
}
