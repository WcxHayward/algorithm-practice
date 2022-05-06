# 移动零

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

示例 1:

```js
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
```

示例 2:

```js
输入: nums = [0]
输出: [0]
```

```js
var moveZeroes = function (nums) {
  let left = 0, right = 0, len = nums.length
  while (right < len) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
    }
    right++
  }
  return nums
};
```

来源：力扣（LeetCode）
链接：<https://leetcode-cn.com/problems/move-zeroes>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
