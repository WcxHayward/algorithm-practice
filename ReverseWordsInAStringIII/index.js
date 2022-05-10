/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let strings = s.split(' ')
  let result = []
  for (let i = 0; i < strings.length; i++) {
    let temp = strings[i].split('');
    let left = 0, right = temp.length - 1
    while (left < right) {
      [temp[left], temp[right]] = [temp[right], temp[left]]
      left++
      right--
    }
    result.push(temp.join(''))
  }
  return result.join(' ')
};
console.log(reverseWords("Let's take LeetCode contest"));
