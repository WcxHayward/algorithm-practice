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
 * @return {number[][]}
 */
// 广度优先搜索
var levelOrder = function (root) {
  let queue = [root]
  let res = []
  if (root === null) return res
  while (queue.length) {
    let level = queue.length
    let currLevel = []
    for (let i = 0; i < level; i++) {
      let node = queue.shift()
      currLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(currLevel)
  }
  return res
};
//深度优先搜索
var levelOrder1 = function (root) {
  if (!root) return []
  let result = []
  DFS(root, 0, result)
  return result
}
function DFS(node, level, result) {
  if (!node) return
  if (result.length < level + 1) {
    result.push([])
  }
  result[level].push(node.val)
  DFS(node.left, level + 1, result)
  DFS(node.right, level + 1, result)
}
levelOrder1({ val: 1, left: { val: 2, left: { val: 4, }, right: { val: 5 } }, right: { val: 3 } })
