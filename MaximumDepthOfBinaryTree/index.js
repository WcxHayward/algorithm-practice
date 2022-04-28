/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  const left = maxDepth(root.left)
  const right = maxDepth(root.right)
  return Math.max(left, right) + 1
}
console.log(maxDepth({ val: 1, left: { val: 2, left: { val: 4, }, right: { val: 5 } }, right: { val: 3 } }))


