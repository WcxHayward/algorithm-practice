/**
 * @param {number} n
 * @return {number}
 */
const map = new Map()
function fib(n) {
  if (n < 2) return n
  if (map.get(n)) {
    return map.get(n)
  }
  const r = fib(n - 1) + fib(n - 2)
  map.set(n, r)
  return r
}
