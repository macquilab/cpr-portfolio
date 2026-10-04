import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('portfolio', () => {
  it('renders the core sections and all ten projects', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('AI ads built')
    expect(screen.getByRole('heading', { name: /AI makes the scenes/i })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /Play AI ad study/i })).toHaveLength(10)
  })

  it('opens and closes the accessible video dialog', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Play AI ad study 01' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('filters work by category', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'AI UGC' }))
    expect(screen.getAllByRole('button', { name: /Play AI ad study/i })).toHaveLength(3)
  })
})
