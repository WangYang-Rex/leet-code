# 二叉树的后序遍历

> 难度：简单
>
> https://leetcode.cn/problems/binary-tree-postorder-traversal/

## 题目

给你一棵二叉树的根节点 `root` ，返回其节点值的 后序遍历 。
 
### 示例 1：

![1](https://github.com/WangYang-Rex/leet-code/assets/7553998/d77a14d5-b907-4bce-a91a-025fe72c3932)

```
输入：root = [1,null,2,3]
输出：[3,2,1]
```

### 示例 2：
```
输入：root = []
输出：[]
```

### 示例 3：
```
输入：root = [1]
输出：[1]
```

## 题解

```javascript
import type { TreeNode } from '~/utils/treeNode'
export function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];

  const fn = (node: TreeNode | null) => {
    if (!node) return
    fn(node.right);
    fn(node.left);
    res.push(node.val);
  }
  fn(root);
  return res;
}

```
