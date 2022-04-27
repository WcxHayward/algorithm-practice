/**
 * @param {number[]} nums
 * @return {number}
 */
// 投票算法
var majorityElement = function (nums) {
  let count = 0, res
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      res = nums[i]
    }
    count += res === nums[i] ? -1 : 1
  }
  return res
};
// 分治
var majorityElement1 = function (nums) {
  return getMajority(nums, 0, nums.length - 1);
};
var getMajority = function (nums, left, right) {
  if (left === right) return nums[left]
  let mid = Math.floor(left + (right - left) / 2)
  let mLeft = getMajority(nums, left, mid)
  let mRight = getMajority(nums, mid + 1, right)
  if (mLeft === mRight) return mLeft
  let cLeft = 0, cRight = 0
  for (let i = left; i <= right; i++) {
    (nums[i] === mLeft) ? cLeft++ : cRight++
  }
  return cLeft > cRight ? mLeft : mRight
}
console.log(majorityElement1([2, 3, 2]));
