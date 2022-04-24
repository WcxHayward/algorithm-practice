/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head, pre = null, next = null
  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
};
console.log(reverseList({ val: 1, next: { val: 2, next: null } }));

