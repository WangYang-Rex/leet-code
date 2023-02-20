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

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
