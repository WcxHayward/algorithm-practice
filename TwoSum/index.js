/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (map.has(target - x)) {
      return [map.get(target - x), i]
    } else {
      map.set(x, i)
    }
  }
  return null
};
console.log(twoSum([3, 2, 4], 6));

