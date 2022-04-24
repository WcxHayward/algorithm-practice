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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return isValid(root, -Infinity, Infinity)
};
var isValid = function (root, min, max) {
  if (root === null) return true
  if (min !== null && root.val <= min) return false
  if (max !== null && root.val >= max) return false
  return isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
}
console.log(isValidBST(new TreeNode(2, 1, 3)));

