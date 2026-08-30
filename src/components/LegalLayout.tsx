import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <main className="page">
      <nav className="site-nav" aria-label="Site">
        <Link to="/">Home</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </nav>
      {children}
    </main>
  )
}
