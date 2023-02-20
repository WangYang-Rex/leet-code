/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import type { TreeNode } from '~/utils/treeNode';

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
export function pathSum(root: TreeNode | null, targetSum: number): number {
  // 遍历二叉树
  let count = 0;
  const fn = (_root: TreeNode, _targetSum: number) => {
    const nextTarget = _targetSum - _root.val;
    if (nextTarget === 0) {
      count++;
    }
    if (_root.left) {
      fn(_root.left, nextTarget);
      if (!_root.left.start) {
        _root.left.start = true;
        fn(_root.left, targetSum);
      }
    }
    if (_root.right) {
      fn(_root.right, nextTarget);
      if (!_root.right.start) {
        _root.right.start = true
        fn(_root.right, targetSum);
      }
    }
  }
  if (root) {
    fn(root, targetSum);
  }
  return count
}

// var aa = {
//     val: 1,
//     left: null,
//     right: {
//         val: 2,
//         left: null,
//         right: {
//             val: 3,
//             left: null,
//             right: {
//                 val: 4,
//                 left: null,
//                 right: {
//                     val: 5,
//                     left: null,
//                     right: null
//                 }
//             }
//         }
//     }
// }
