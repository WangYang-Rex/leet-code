/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

export function rand10(): number {
  const aa = rand7() * 10; // 生成7个随机数
  const res = aa - parseInt((aa / 10).toString()) * 10;
  if (res === 0) {
    return 10
  }
  return res
}
function rand7() {
  return Math.floor(Math.random() * 7) + 1
}
