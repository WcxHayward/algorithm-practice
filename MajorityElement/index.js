/**
 * @param {number[]} nums
 * @return {number}
 */
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
majorityElement([2, 2, 1, 1, 1, 2, 2])
