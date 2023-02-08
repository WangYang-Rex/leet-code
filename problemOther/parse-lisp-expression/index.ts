/**
 * 递归解析
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param expression
 * @returns
 */
export function evaluate(expression: string): number {
  const scope = new Map<string, number[]>()
  let start = 0

  const isDight = (ch: string): boolean => parseFloat(ch).toString() !== 'NaN'

  const isLowerCase = (ch: string): boolean => ch >= 'a' && ch <= 'z'

  return innerEvaluate(expression)

  function innerEvaluate(expression: string): number {
    if (expression[start] !== '(') {
      // 非表达式，可能为：整数或变量
      if (isLowerCase(expression[start])) {
        const v = parseVar(expression) // 变量
        const n = scope.get(v)!.length
        return scope.get(v)![n - 1]
      }
      else {
        // 整数
        return parseInt(expression)
      }
    }

    let ret: number
    start++ // 移除左括号
    if (expression[start] === 'l') {
      // let 表达式
      start += 4
      const vars = []
      while (true) {
        if (!isLowerCase(expression[start])) {
          ret = innerEvaluate(expression) // let 表达式的最后一个 expr 表达式的值
          break
        }
        const v = parseVar(expression)
        if (expression[start] === ')') {
          const n = scope.get(v)!.length
          ret = scope.get(v)![n - 1] // let 表达式的最后一个 expr 表达式的值
          break
        }
        vars.push(v)
        start++ // 移除空格
        const e = innerEvaluate(expression)

        if (!scope.has(v)) scope.set(v, [])

        scope.get(v)!.push(e)
        start++ // 移除空格
      }
      for (const v of vars)
        scope.get(v)!.pop() // 清除当前作用域的变量
    }
    else if (expression[start] === 'a') {
      // add 表达式
      start += 4 // 移除 add
      const e1 = innerEvaluate(expression)
      start++ // 移除空格
      const e2 = innerEvaluate(expression)
      ret = e1 + e2
    }
    else {
      // mult 表达式
      start += 5 // 移除 mult
      const e1 = innerEvaluate(expression)
      start++ // 移除空格
      const e2 = innerEvaluate(expression)
      ret = e1 * e2
    }
    start++ // 移除右括号
    return ret
  }

  /**
   * 解析整数
   * @param expression
   * @returns
   */
  function parseInt(expression: string): number {
    const n = expression.length
    let ret = 0
    let sign: 1 | -1 = 1
    if (expression[start] === '-') {
      sign = -1
      start++
    }
    while (start < n && isDight(expression[start])) {
      ret = ret * 10 + Number(expression[start])
      start++
    }
    return sign * ret
  }

  /**
   * 解析变量
   * @param expression
   * @returns
   */
  function parseVar(expression: string): string {
    const n = expression.length
    let ret = ''
    while (start < n && expression[start] !== ' ' && expression[start] !== ')') {
      ret += expression[start]
      start++
    }
    return ret
  }
}

/**
 * 状态机
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param expression
 * @returns
 */
export function evaluate2(expression: string): number {
  enum EXPR_STATUS {
    VALUE, // 初始状态
    NONE, // 表达式类型未知
    LET, // let 表达式
    LET1, // let 表达式已经解析了 vi 变量
    LET2, // let 表达式已经解析了最后一个表达式 expr
    ADD, // add 表达式
    ADD1, // add 表达式已经解析了 e1 表达式
    ADD2, // add 表达式已经解析了 e2 表达式
    MULT, // mult 表达式
    MULT1, // mult 表达式已经解析了 e1 表达式
    MULT2, // mult 表达式已经解析了 e2 表达式
    DONE, // 解析完成
  }

  class Expr {
    v = ''
    value = 0
    e1 = 0
    e2 = 0
    constructor(public status: EXPR_STATUS) { }
  }

  const scope = new Map<string, number[]>()
  const vars: string[][] = []
  let start = 0
  const n = expression.length
  const stack = []
  let cur = new Expr(EXPR_STATUS.VALUE)

  while (start < n) {
    if (expression[start] === ' ') {
      start++ // 去掉空格
      continue
    }
    if (expression[start] === '(') {
      start++ // 去掉左括号
      stack.push(cur)
      cur = new Expr(EXPR_STATUS.NONE)
      continue
    }

    let sb: string | number = ''
    if (expression[start] === ')') {
      // 本质上把表达式转成一个 token
      start++ // 去掉右括号
      if (cur.status === EXPR_STATUS.LET2) {
        sb = cur.value
        // 清除作用域
        for (const v of vars[vars.length - 1])
          scope.get(v)!.pop()

        vars.pop()!
      }
      else if (cur.status === EXPR_STATUS.ADD2) {
        sb = cur.e1 + cur.e2
      }
      else {
        sb = cur.e1 * cur.e2
      }
      cur = stack.pop()! // 获取上层状态
    }
    else {
      while (start < n && expression[start] !== ' ' && expression[start] !== ')') {
        sb += expression[start]
        start++
      }
    }
    const token = sb

    switch (cur.status) {
      case EXPR_STATUS.VALUE:
        cur.value = parseInt(token as string)
        cur.status = EXPR_STATUS.DONE
        break

      case EXPR_STATUS.NONE:
        if (token === 'let') {
          cur.status = EXPR_STATUS.LET
          vars.push([]) // 记录该层作用域的所有变量, 方便后续的清除
        }
        else if (token === 'add') { cur.status = EXPR_STATUS.ADD }
        else if (token === 'mult') { cur.status = EXPR_STATUS.MULT }
        break

      case EXPR_STATUS.LET:
        if (expression[start] === ')') { // let 表达式的最后一个 expr 表达式
          cur.value = calculateToken(scope, token as string)
          cur.status = EXPR_STATUS.LET2
        }
        else {
          cur.v = token as string
          vars[vars.length - 1].push(token as string) // 记录该层作用域的所有变量, 方便后续的清除
          cur.status = EXPR_STATUS.LET1
        }
        break
      case EXPR_STATUS.LET1:
        if (!scope.has(cur.v))
          scope.set(cur.v, [])

        scope.get(cur.v)!.push(calculateToken(scope, token as string))
        cur.status = EXPR_STATUS.LET
        break
      case EXPR_STATUS.ADD:
        cur.e1 = calculateToken(scope, token as string)
        cur.status = EXPR_STATUS.ADD1
        break
      case EXPR_STATUS.ADD1:
        cur.e2 = calculateToken(scope, token as string)
        cur.status = EXPR_STATUS.ADD2
        break
      case EXPR_STATUS.MULT:
        cur.e1 = calculateToken(scope, token as string)
        cur.status = EXPR_STATUS.MULT1
        break
      case EXPR_STATUS.MULT1:
        cur.e2 = calculateToken(scope, token as string)
        cur.status = EXPR_STATUS.MULT2
        break
    }
  }

  return cur.value

  function calculateToken(scope: Map<string, number[]>, token: string): number {
    if (token[0] >= 'a' && token[0] <= 'z') {
      const n = scope.get(token)!.length
      return scope.get(token)![n - 1]
    }
    else {
      return parseInt(token)
    }
  }
}
