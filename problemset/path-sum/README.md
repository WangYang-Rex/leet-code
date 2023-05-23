# 路径总和

> 难度：简单
>
> https://leetcode.cn/problems/path-sum/

## 题目

给你二叉树的根节点 `root` 和一个表示目标和的整数 `targetSum` 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 `targetSum` 。如果存在，返回 `true` ；否则，返回 `false` 。

叶子节点 是指没有子节点的节点。


### 示例 1：

![1](https://github.com/WangYang-Rex/leet-code/assets/7553998/5b085a2f-f484-48fc-9245-3a657cc84067)

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
解释：等于目标和的根节点到叶节点路径如上图所示。
```

### 示例 2：

![2](https://github.com/WangYang-Rex/leet-code/assets/7553998/c77d9c3c-f032-488b-bb30-e52bff5cd590)

```
输入：root = [1,2,3], targetSum = 5
输出：false
解释：树中存在两条根节点到叶子节点的路径：
(1 --> 2): 和为 3
(1 --> 3): 和为 4
不存在 sum = 5 的根节点到叶子节点的路径。
```

### 示例 3：

```
输入：root = [], targetSum = 0
输出：false
解释：由于树是空的，所以不存在根节点到叶子节点的路径。
```

## 题解

```javascript
import type { TreeNode } from '~/utils/treeNode'

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  let res = false;
  const _targetSum = targetSum - root.val;
  // 判断是否是叶子节点
  if (!root.left && !root.right && _targetSum === 0) {
    res = true;
  } else {
    if (root.left) {
      res = hasPathSum(root.left, _targetSum);
    }
    if (root.right) {
      res = res || hasPathSum(root.right, _targetSum);
    }
  }

  return res
}

```
