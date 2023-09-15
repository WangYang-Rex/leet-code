# 翻转二叉树

> 难度：简单
>
> https://leetcode.cn/problems/invert-binary-tree/description/

## 题目

给你一棵二叉树的根节点 `root` ，翻转这棵二叉树，并返回其根节点。

### 示例 1：

![invert1-tree](https://github.com/WangYang-Rex/leet-code/assets/7553998/2124ab2c-841a-4eb3-8d42-bffc18a12bfa)

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]

### 示例 2：

![invert2-tree](https://github.com/WangYang-Rex/leet-code/assets/7553998/ed8bc7e7-735e-466a-8aed-d54373623f9b)

输入：root = [2,1,3]
输出：[2,3,1]

### 示例 3：

输入：root = []
输出：[]

## 题解

```typescript
import type { TreeNode } from '~/utils/treeNode'

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  if (root.left) {
    invertTree(root.left)
  }
  if (root.right) {
    invertTree(root.right)
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
}

```
