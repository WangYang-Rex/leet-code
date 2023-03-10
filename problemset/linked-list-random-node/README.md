# 链表随机节点

> 难度：中等
>
> https://leetcode.cn/problems/linked-list-random-node/

## 题目

给你一个单链表，随机选择链表的一个节点，并返回相应的节点值。每个节点 被选中的概率一样 。

实现 `Solution` 类：

- `Solution(ListNode head)` 使用整数数组初始化对象。
- `int getRandom()` 从链表中随机选择一个节点并返回该节点的值。链表中所有节点被选中的概率相等。
 

### 示例：

![getrand-linked-list](https://user-images.githubusercontent.com/7553998/220043290-e7a22cf6-2541-42dd-afe4-42c78cfa9559.jpeg)

```
输入
["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
[[[1, 2, 3]], [], [], [], [], []]
输出
[null, 1, 3, 2, 2, 3]

解释
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // 返回 1
solution.getRandom(); // 返回 3
solution.getRandom(); // 返回 2
solution.getRandom(); // 返回 2
solution.getRandom(); // 返回 3
// getRandom() 方法应随机返回 1、2、3中的一个，每个元素被返回的概率相等。
```

## 解题

```typescript
import type { ListNode } from '~/utils/listNode';

export class Solution {
  private arr: ListNode[] = [];
  constructor(head: ListNode | null) {
    this.arr = [];
    while (head) {
      this.arr.push(head);
      head = head.next;
    }
  }

  getRandom(): number {
    const length = this.arr.length;
    const index = Math.floor(Math.random() * length);
    return this.arr[index].val;
  }
}
```