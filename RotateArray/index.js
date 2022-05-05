/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k %= nums.length
  reseve(nums, 0, nums.length - 1)
  reseve(nums, 0, k - 1)
  reseve(nums, k, nums.length - 1)
  return nums
};
var reseve = function (nums, start, end) {
  while (start < end) {
    let temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start += 1
    end -= 1
  }
}
