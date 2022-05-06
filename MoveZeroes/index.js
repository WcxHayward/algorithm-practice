/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
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
