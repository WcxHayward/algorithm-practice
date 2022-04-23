/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let left = i + 1, right = nums.length - 1
    while (left < right) {
      let s = nums[i] + nums[left] + nums[right]
      if (s < 0) left += 1
      else if (s > 0) right -= 1
      else {
        res.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) {
          left += 1
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right -= 1
        }
        left += 1
        right -= 1
      }
    }

  }
  return res
};
