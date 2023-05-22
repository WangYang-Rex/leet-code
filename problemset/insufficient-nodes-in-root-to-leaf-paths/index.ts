
import type { TreeNode } from '~/utils/treeNode'
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
function checkSufficientLeaf(node: TreeNode | null, sum: number, limit: number): boolean {
  if (node == null) {
    return false;
  }
  if (node.left == null && node.right == null) {
    return node.val + sum >= limit;
  }
  const haveSufficientLeft = checkSufficientLeaf(node.left, sum + node.val, limit);
  const haveSufficientRight = checkSufficientLeaf(node.right, sum + node.val, limit);
  if (!haveSufficientLeft) {
    node.left = null;
  }
  if (!haveSufficientRight) {
    node.right = null;
  }
  return haveSufficientLeft || haveSufficientRight;
}

export function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
  const haveSufficient = checkSufficientLeaf(root, 0, limit);
  return haveSufficient ? root : null;
}
