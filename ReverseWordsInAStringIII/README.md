# 反转字符串中的单词 III

给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1：

```js
输入：s = "Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"
```

示例 2:

```js
输入： s = "God Ding"
输出："doG gniD"
```

```js
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
```

来源：力扣（LeetCode）
链接：<https://leetcode.cn/problems/reverse-words-in-a-string-iii>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
