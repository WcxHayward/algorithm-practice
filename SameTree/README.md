# 相同的树

给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1：

```
输入：p = [1,2,3], q = [1,2,3]
输出：true
```

示例 2：

```
输入：p = [1,2], q = [1,null,2]
输出：false
```

示例 3：

```
输入：p = [1,2,1], q = [1,1,2]
输出：false
```

```js
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
```

来源：力扣（LeetCode）
链接：<https://leetcode-cn.com/problems/same-tree>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
