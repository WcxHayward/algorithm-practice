/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head, slow = head
  while (fast && slow && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (Object.is(fast, slow)) {
      return true
    }
  }
  return false
};
