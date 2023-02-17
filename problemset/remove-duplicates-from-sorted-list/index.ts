
import type { ListNode } from '~/utils/listNode'

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  const res = head;
  while (head && head.next) {
    const next = head.next;
    if (head.val === next.val) {
      head.next = next.next;
    } else {
      head = next;
    }
  }
  return res
}
