/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 广度优先搜索
var isSameTree = function (p, q) {
  let pQueue = [p]
  let qQueue = [q]
  let res = true
  while (pQueue.length) {
    let pNode = pQueue.shift()
    let qNode = qQueue.shift()
    if (!pNode && !qNode) {
      res = true

    } else if (!pNode || !qNode) {
      res = false
      break
    } else {
      if (pNode.val !== qNode.val) {
        res = false
        break
      }
      else {
        pQueue.push(pNode.left)
        pQueue.push(pNode.right)
        qQueue.push(qNode.left)
        qQueue.push(qNode.right)
      }
    }

  }
  return res
};
// 深度优先搜索
var isSameTree1 = function (p, q) {

  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val !== !q.val) return false

  return isSameTree1(p.left, q.left) && isSameTree1(p.right, q.right)
}

console.log(isSameTree1({ val: 1, left: { val: 2 }, right: { val: 3 } }, { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } }));

