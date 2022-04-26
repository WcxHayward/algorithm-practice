/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArray = function (nums) {
//   if (nums.length <= 1) return nums
//   let midIndex = Math.round(nums.length / 2)
//   let mid = nums.splice(midIndex, 1)[0]
//   let left = [], right = []
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < mid) left.push(nums[i])
//     else right.push(nums[i])
//   }
//   return sortArray(left).concat([mid], sortArray(right))

// };

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

console.log(sortArray([3, 2, 1]));

