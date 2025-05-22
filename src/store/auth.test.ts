import { beforeEach, describe, expect, it } from 'vitest'
import { useAuthStore } from './auth'

describe('useAuthStore', () => {
  beforeEach(() => {
    useAuthStore.setState({ loggedIn: false })
  })

  it('logs in correctly', () => {
    useAuthStore.getState().login()
    expect(useAuthStore.getState().loggedIn).toBe(true)
  })

  it('logs out correctly', () => {
    useAuthStore.setState({ loggedIn: true })
    useAuthStore.getState().logout()
    expect(useAuthStore.getState().loggedIn).toBe(false)
  })
})
