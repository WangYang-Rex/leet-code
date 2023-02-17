/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
import { TreeNode } from '~/utils/treeNode'
export function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return [];
  // 备忘录，避免重复计算
  const memo = new Map();
  /* 构造闭区间 [lo, hi] 组成的 BST */
  const build = (lo: number, hi: number) => {
    const res = [];
    // base case，显然当lo > hi闭区间[lo, hi]肯定是个空区间，也就对应着空节点 null，
    if (lo > hi) {
      res.push(null);
      return res;
    }
    const memoKey = `${lo}&${hi}`;
    // 如果缓存当中有就直接拿
    if (memo.has(memoKey)) return memo.get(memoKey);
    // 1、穷举 root 节点的所有可能。
    for (let i = lo; i <= hi; i++) {
      // 2、递归构造出左右子树的所有合法 BST。
      const leftTree: any = build(lo, i - 1);
      const rightTree: any = build(i + 1, hi);
      // 3、给 root 节点穷举所有左右子树的组合。
      for (const left of leftTree) {
        for (const right of rightTree) {
          res.push(new TreeNode(i, left, right));
        }
      }
    }
    // 将结果集放入到缓存中
    memo.set(memoKey, res);
    return res;
  };
  // 构造闭区间 [1, n] 组成的 BST
  return build(1, n);
}
