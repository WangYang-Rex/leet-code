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
