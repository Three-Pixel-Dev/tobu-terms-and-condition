import { LegalLayout } from '../components/LegalLayout'

export function PrivacyPage() {
  return (
    <LegalLayout>
      <h1>Privacy policy</h1>
      <p className="muted">Last updated: 30 August 2026</p>
      <p>
        This policy explains how Tobu - JLPT App (“Tobu”, “we”, “us”) collects and
        uses information when you use the mobile app and related services.
      </p>

      <h2>Who we are</h2>
      <p>
        Tobu is a Japanese-language learning app for the JLPT. It is not a bank,
        payment app, or marketplace. We do not sell your personal data.
      </p>

      <h2>Information we collect</h2>
      <p>Depending on how you sign in, we may collect:</p>
      <ul>
        <li>
          <strong>Account details</strong> — name, and email if you create an
          account with email.
        </li>
        <li>
          <strong>Activation-code login</strong> — the code you enter, and a
          name if the code creates an account.
        </li>
        <li>
          <strong>Learning progress</strong> — completed lessons, quiz scores,
          XP, streak, exam attempts, favorites, and similar in-app activity.
        </li>
        <li>
          <strong>Device notifications</strong> — a push token so we can send
          reminders you have allowed (for example streak or new-lesson alerts).
        </li>
        <li>
          <strong>Technical data</strong> — app version, device platform (iOS /
          Android), and basic logs needed to keep the service running and
          secure.
        </li>
      </ul>
      <p>
        Lesson audio and images are course content stored in the cloud. They are
        not your personal files.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>Create and keep your account signed in (including session tokens).</li>
        <li>Deliver lessons, practice, exams, XP, and streak features.</li>
        <li>Send notifications you opted into, and show them in the in-app inbox.</li>
        <li>Prevent abuse, fix bugs, and operate the servers.</li>
      </ul>

      <h2>Who we share information with</h2>
      <p>We share data only as needed to run Tobu:</p>
      <ul>
        <li>Our hosting and API providers (to store accounts and progress).</li>
        <li>Google Play and Apple if you install from those stores.</li>
        <li>
          Push delivery (Expo Push, Firebase Cloud Messaging, and Apple Push
          Notification service) when notifications are enabled.
        </li>
        <li>Cloud storage for lesson and exam media.</li>
      </ul>
      <p>
        We do not sell personal information. We do not use your data for
        banking, payments, ads networks, or selling lists to marketers.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep account and progress data while your account is active. If you
        delete your account in the app, we remove or anonymize personal data
        that we no longer need, except where we must keep records (for example
        security or legal reasons).
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can turn off notifications in the app or in system settings.</li>
        <li>You can update your display name in the app where that is offered.</li>
        <li>
          You can request access, correction, or deletion of your personal data
          by emailing us.
        </li>
      </ul>

      <h2>Children</h2>
      <p>
        Tobu is intended for learners aged 13 and over. We do not knowingly
        collect personal information from children under 13. If you believe a
        child has created an account, contact us and we will delete it.
      </p>

      <h2>Security</h2>
      <p>
        We use industry-standard measures such as encrypted connections (HTTPS)
        and access tokens. No method of transmission or storage is completely
        secure.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy. The “Last updated” date at the top will
        change when we do. Continued use of the app after an update means you
        accept the revised policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy:{' '}
        <a href="mailto:support@tobu.app">support@tobu.app</a>
      </p>
    </LegalLayout>
  )
}
