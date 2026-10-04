import { useEffect, useState } from 'react'
import { navItems } from '../data/portfolio'
import { Logo } from './Logo'

interface HeaderProps {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Christian Paul Regacho, home">
        <Logo labelled={false} />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? 'Close' : 'Menu'}</span>
        <i aria-hidden="true" />
      </button>
      <nav id="site-navigation" className={open ? 'nav-open' : ''} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={activeSection === item.id ? 'active' : ''}
            href={`#${item.id}`}
            aria-current={activeSection === item.id ? 'location' : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
