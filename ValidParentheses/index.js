/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  let map = { ')': '(', '}': '{', ']': '[' }
  for (const x of s) {
    if (!(x in map)) {
      stack.push(x)
    } else if (!stack || map[x] !== stack.pop()) {
      return false
    }
  }
  return !stack.length
};
isValid(')(')
