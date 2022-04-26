# 排序数组

给你一个整数数组 nums，请你将该数组升序排列。

示例 1：

```
输入：nums = [5,2,3,1]
输出：[1,2,3,5]
```

示例 2：

```
输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
```

```js
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1)
  return nums
}
var quickSort = function (nums, start, end) {
  if (start >= end) return false
  let left = start, right = end, mid = nums[Math.floor((start + end) / 2)]
  while (left <= right) {
    while (left <= right && nums[left] < mid) {
      left++
    }
    while (left <= right && nums[right] > mid) { right-- }
    if (left <= right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
    quickSort(nums, start, right)
    quickSort(nums, left, end)
  }
}
```

来源：力扣（LeetCode）
链接：<https://leetcode-cn.com/problems/sort-an-array>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
