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

export function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }
  const getNodeObj = (node: TreeNode | null): any => {
    const nodeObj = {
      height: 0,
      isBalanced: true,
    };
    if (!node) {
      return nodeObj;
    }
    const leftNodeObj = getNodeObj(node.left);
    const rightNodeObj = getNodeObj(node.right);
    if (leftNodeObj.isBalanced && rightNodeObj.isBalanced) {
      nodeObj.height = Math.max(leftNodeObj.height, rightNodeObj.height) + 1;
      nodeObj.isBalanced = Math.abs(leftNodeObj.height - rightNodeObj.height) <= 1;
    } else {
      nodeObj.isBalanced = false;
    }
    return nodeObj;
  }

  const nodeObj = getNodeObj(root);
  return nodeObj.isBalanced;
}
