import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { MemoryRouter } from 'react-router-dom'
import Login from './Login'

describe('Login page', () => {
  it('renders heading and fields', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', { name: /admin login/i })
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
  })
})
