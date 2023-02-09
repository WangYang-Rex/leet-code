import { expect, it } from 'vitest'
import { AuthenticationManager } from '.'

it('模拟', () => {
  const authenticationManager = new AuthenticationManager(5)
  authenticationManager.renew('aaa', 1)
  authenticationManager.generate('aaa', 2)
  expect(authenticationManager.countUnexpiredTokens(6)).toBe(1)

  authenticationManager.generate('bbb', 7)
  authenticationManager.renew('aaa', 8)
  authenticationManager.renew('bbb', 10)

  expect(authenticationManager.countUnexpiredTokens(15)).toBe(0)
})
