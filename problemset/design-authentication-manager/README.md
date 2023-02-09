# 设计一个验证系统

> 难度：中等
>
> https://leetcode.cn/problems/design-authentication-manager/

## 题目

你需要设计一个包含验证码的验证系统。每一次验证中，用户会收到一个新的验证码，这个验证码在 `currentTime` 时刻之后 `timeToLive` 秒过期。如果验证码被更新了，那么它会在 `currentTime` （可能与之前的 `currentTime` 不同）时刻延长 `timeToLive` 秒。

请你实现 `AuthenticationManager` 类：

- `AuthenticationManager(int timeToLive)` 构造 `AuthenticationManager` 并设置 `timeToLive` 参数。
- `generate(string tokenId, int currentTime)` 给定 `tokenId` ，在当前时间 `currentTime` 生成一个新的验证码。
- `renew(string tokenId, int currentTime)` 将给定 `tokenId` 且 未过期 的验证码在 `currentTime` 时刻更新。如果给定 `tokenId` 对应的验证码不存在或已过期，请你忽略该操作，不会有任何更新操作发生。
- `countUnexpiredTokens(int currentTime)` 请返回在给定 `currentTime` 时刻，未过期 的验证码数目。

如果一个验证码在时刻 `t` 过期，且另一个操作恰好在时刻 `t` 发生（`renew` 或者 `countUnexpiredTokens` 操作），过期事件 优先于 其他操作。

### 示例

#### 示例1：

![copy-of-pc68_q2](https://user-images.githubusercontent.com/7553998/217709791-e0dc3342-1fa6-4b87-a5de-4236d11661d3.png)

```
输入：
["AuthenticationManager", "renew", "generate", "countUnexpiredTokens", "generate", "renew", "renew", "countUnexpiredTokens"]
[[5], ["aaa", 1], ["aaa", 2], [6], ["bbb", 7], ["aaa", 8], ["bbb", 10], [15]]
输出：
[null, null, null, 1, null, null, null, 0]

解释：
AuthenticationManager authenticationManager = new AuthenticationManager(5); // 构造 AuthenticationManager ，设置 timeToLive = 5 秒。
authenticationManager.renew("aaa", 1); // 时刻 1 时，没有验证码的 tokenId 为 "aaa" ，没有验证码被更新。
authenticationManager.generate("aaa", 2); // 时刻 2 时，生成一个 tokenId 为 "aaa" 的新验证码。
authenticationManager.countUnexpiredTokens(6); // 时刻 6 时，只有 tokenId 为 "aaa" 的验证码未过期，所以返回 1 。
authenticationManager.generate("bbb", 7); // 时刻 7 时，生成一个 tokenId 为 "bbb" 的新验证码。
authenticationManager.renew("aaa", 8); // tokenId 为 "aaa" 的验证码在时刻 7 过期，且 8 >= 7 ，所以时刻 8 的renew 操作被忽略，没有验证码被更新。
authenticationManager.renew("bbb", 10); // tokenId 为 "bbb" 的验证码在时刻 10 没有过期，所以 renew 操作会执行，该 token 将在时刻 15 过期。
authenticationManager.countUnexpiredTokens(15); // tokenId 为 "bbb" 的验证码在时刻 15 过期，tokenId 为 "aaa" 的验证码在时刻 7 过期，所有验证码均已过期，所以返回 0 。
```

#### 提示

- `1 <= timeToLive <= 108`
- `1 <= currentTime <= 108`
- `1 <= tokenId.length <= 5`
- `tokenId` 只包含小写英文字母。
- 所有 `generate` 函数的调用都会包含独一无二的 `tokenId` 值。
- 所有函数调用中，`currentTime` 的值 严格递增 。
- 所有函数的调用次数总共不超过 `2000` 次。

## 解法

```typescript
/* eslint-disable @typescript-eslint/no-unused-vars */
export class AuthenticationManager {
  private timeToLive: number // 过期时间 秒
  private tokens: string[]

  constructor(timeToLive: number) {
    this.timeToLive = timeToLive
    this.tokens = []
  }

  private delExpiredTokens(currentTime: number) {
    const unExporedTokens = this.tokens.filter((token) => {
      const [_tokenId, tokenTime] = token.split('.')
      return currentTime - Number(tokenTime) < this.timeToLive
    })
    this.tokens = unExporedTokens
  }

  private getToken(tokenId: string, currentTime: number): string | null {
    this.delExpiredTokens(currentTime)
    const targetToken = this.tokens.find((token) => {
      const [_tokenId, tokenTime] = token.split('.')
      if (tokenId === _tokenId && currentTime - Number(tokenTime) < this.timeToLive)
        return true

      return false
    })
    return targetToken || null
  }

  generate(tokenId: string, currentTime: number): void {
    // 生成Token
    const newToken = `${tokenId}.${currentTime}`
    const _token = this.getToken(tokenId, currentTime)
    if (!_token)
      this.tokens.push(newToken)
  }

  renew(tokenId: string, currentTime: number): void {
    this.delExpiredTokens(currentTime)
    this.tokens.map((token, index) => {
      const [_tokenId, tokenTime] = token.split('.')
      if (tokenId === _tokenId)
        this.tokens[index] = `${tokenId}.${currentTime}`
      return this.tokens[index]
    })
  }

  countUnexpiredTokens(currentTime: number): number {
    this.delExpiredTokens(currentTime)
    return this.tokens.length
  }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */

```
