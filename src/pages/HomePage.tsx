import { Link } from 'react-router-dom'
import { LegalLayout } from '../components/LegalLayout'

export function HomePage() {
  return (
    <LegalLayout>
      <h1 className="home-title">Tobu - JLPT App</h1>
      <p>
        Tobu helps learners study Japanese for the JLPT: lessons, practice, kanji,
        and mock exams.
      </p>
      <div className="home-links">
        <Link to="/privacy">Privacy policy</Link>
        <Link to="/terms">Terms of use</Link>
      </div>
    </LegalLayout>
  )
}
