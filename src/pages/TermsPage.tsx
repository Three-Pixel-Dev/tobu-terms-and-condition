import { LegalLayout } from '../components/LegalLayout'

export function TermsPage() {
  return (
    <LegalLayout>
      <h1>Terms of use</h1>
      <p className="muted">Last updated: 30 August 2026</p>
      <p>
        These terms govern your use of Tobu - JLPT App. By using the app you
        agree to them.
      </p>

      <h2>The service</h2>
      <p>
        Tobu provides JLPT-oriented lessons, practice, kanji, and mock exams.
        Features may change as we improve the app. Access to some levels or
        content may require an activation code issued by a teacher or
        administrator.
      </p>

      <h2>Your account</h2>
      <ul>
        <li>Keep your login details and activation codes confidential.</li>
        <li>Provide accurate information if you register with email.</li>
        <li>
          One-time activation codes may create an account on first use.
          Teacher-issued login codes may be reusable as described in the app.
        </li>
        <li>You may delete your account from the app where that option is available.</li>
      </ul>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Copy, scrape, or redistribute lesson or exam content without permission.</li>
        <li>Attempt to break or overload the service, or access other users’ accounts.</li>
        <li>Use the app for anything unlawful or harmful.</li>
      </ul>

      <h2>Content and scores</h2>
      <p>
        Learning materials are provided for study. Exam-style quizzes are
        practice tools and are not official JLPT results. We do not guarantee
        that using Tobu will lead to a particular exam score.
      </p>

      <h2>Notifications</h2>
      <p>
        If you allow notifications, we may send reminders (for example streak
        or new lessons). You can turn these off at any time.
      </p>

      <h2>Disclaimer</h2>
      <p>
        The app is provided “as is”. We are not liable for lost progress, exam
        outcomes, or service interruptions beyond what applicable law requires.
      </p>

      <h2>Contact</h2>
      <p>
        Questions:{' '}
        <a href="mailto:support@tobu.app">support@tobu.app</a>
      </p>
    </LegalLayout>
  )
}
