/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head), stack = [], cur = dummy
  while (cur) {
    stack.push(cur)
    cur = cur.next;
  }
  for (let i = 0; i < n; i++) {
    stack.pop()
  }
  let prev = stack[stack.length - 1];
  prev.next = prev.next.next
  let ans = dummy.next
  return ans
};
