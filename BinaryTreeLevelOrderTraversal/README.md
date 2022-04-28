# 二叉树的层序遍历

给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

示例 1：

```
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
```

示例 2：

```
输入：root = [1]
输出：[[1]]
```

示例 3：

```
输入：root = []
输出：[]
```

```js
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
```

来源：力扣（LeetCode）
链接：<https://leetcode-cn.com/problems/binary-tree-level-order-traversal>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
