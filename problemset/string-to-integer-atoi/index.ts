/**
 * 暴力解法
 * @desc 时间复杂度 -> O(n)  空间复杂度  -> O(1)
 * @param s {string}
 * @return {number}
 */
export function myAtoi(s: string): number {
  let fu = false;
  s = s.trim();
  if (s[0] === '+') {
    fu = false;
    s = s.slice(1)
  } else if (s[0] === '-') {
    fu = true;
    s = s.slice(1)
  }
  const aa = '0123456789';

  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (aa.includes(s[i])) {
      str += s[i]
    } else {
      break;
    }
  }
  if (!str) {
    return 0
  }
  const max = Math.pow(2, 31) - 1;
  const min = -1 * Math.pow(2, 31);
  let res = parseFloat(str);
  if (fu) {
    res = res * -1;
  }
  if (res < min) {
    res = min
  }
  if (res > max) {
    res = max
  }
  return res
}
/**
 * 自动机
 * @desc 时间复杂度 -> O(n)  空间复杂度  -> O(1)
 * @param s {string}
 * @return {number}
 */
export function myAtoi2(s: string): number {
  class Automation {
    state = 'start' // 执行阶段，默认处于开始执行阶段
    sign = 1 // 正负符号，默认是正数
    ans = 0 // 结果
    /**
     * 关键点：
     * 状态和执行阶段的对应表
     * 含义如下：
     * [执行阶段, [空格, 正负, 数值, 其他]]
     */
    map: Map<string, Array<string>> = new Map([
      ['start', ['start', 'signed', 'in_number', 'end']],
      ['signed', ['end', 'end', 'in_number', 'end']],
      ['in_number', ['end', 'end', 'in_number', 'end']],
      ['end', ['end', 'end', 'end', 'end']],
    ])

    /**
     * 获取状态的索引
     * @param str {string}
     * @return {number}
     */
    getIndex(str: string): 0 | 1 | 2 | 3 {
      if (str === ' ') {
        // 空格
        return 0
      }
      else if (str === '+' || str === '-') {
        // 符号
        return 1
      }
      else if (!isNaN(Number(str))) {
        // 数值
        return 2
      }
      else {
        // 其他
        return 3
      }
    }

    /**
     * 字符转换执行函数
     * @param str {string}
     */
    get(str: string) {
      // 每次传入字符时，都要变更自动机的执行阶段
      const stateArr: Array<string> | undefined = this.map.get(this.state)
      if (stateArr) this.state = stateArr[this.getIndex(str)]

      if (this.state === 'in_number') {
        this.ans = this.ans * 10 + Number(str)
        this.ans
          = this.sign === 1
            ? Math.min(this.ans, Math.pow(2, 31) - 1)
            : Math.min(this.ans, -Math.pow(-2, 31))
      }
      else if (this.state === 'signed') {
        this.sign = str === '+' ? 1 : -1
      }
    }
  }

  const automaton: Automation = new Automation()

  for (const str of s)
    automaton.get(str)

  return automaton.sign * automaton.ans
}
