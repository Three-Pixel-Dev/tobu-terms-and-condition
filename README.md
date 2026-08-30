# Tobu public web (privacy & terms)

Static React site for Google Play / App Store legal URLs.

## Play Console privacy policy URL

After you bind a domain on Vercel, paste:

```text
https://<your-domain>/privacy
```

Example: `https://tobu-learner.com/privacy`

## Deploy

```bash
npm install
npm run build
```

1. Push this folder (or the repo) to GitHub.
2. Vercel → Import → Framework **Vite** → Deploy.
3. Vercel → Domains → add your domain.
4. Open `/privacy` in a private window and confirm the policy is readable with no login.
