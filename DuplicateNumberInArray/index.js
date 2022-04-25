var findRepeatNumber = function (nums) {
  let map = new Map()
  let s = null
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    if (map.has(nums[i])) {
      s = map.get(nums[i])
    } else {
      map.set(x, i)
    }
  }
  return nums[s]
};
findRepeatNumber([2, 3, 1, 0, 2, 5, 3])
