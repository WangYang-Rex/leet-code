import { describe, expect, it } from 'vitest'
import { TreeAncestor } from '.'

describe('树节点的第 K 个祖先', () => {
  describe('倍增 类动态规划', () => {
    testCase(TreeAncestor)
  })
})

function testCase(_TreeAncestor: any) {
  it.each([
    // test cases
    ['Solution', _TreeAncestor],
  ])('示例%#', () => {
    const treeAncestor = new _TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
    expect(treeAncestor.getKthAncestor(3, 1)).toBe(1);
    expect(treeAncestor.getKthAncestor(5, 2)).toBe(0);
    expect(treeAncestor.getKthAncestor(6, 3)).toBe(-1);
  })
}
