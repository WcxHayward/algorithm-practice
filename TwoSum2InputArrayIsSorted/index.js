/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let map = new Map()
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i]
    if (map.has(target - x)) {
      return [map.get(target - x) + 1, i + 1]
    } else {
      map.set(x, i)
    }
  }
};
