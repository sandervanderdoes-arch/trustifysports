# Trustify Sports website (trustifysports.com)

Marketing site for Trustify Sports: compliance infrastructure for professional football
clubs and football agents under the EU Anti-Money Laundering Regulation. One page plus
/privacy. React + Vite + TypeScript + Tailwind (shadcn/ui components in `src/components/ui`).

## How we work

The site is edited only through Claude Code, not Lovable. **Publishing = pushing to `main`**:
`.github/workflows/deploy-site.yml` builds and deploys to GitHub Pages within a couple of
minutes.

Before every push to `main`:
1. `npm ci` (if needed), `npm test`, `npx eslint <changed files>`, `npm run build`.
2. Open the changed page in a browser (`npx vite preview --host 127.0.0.1`) and check
   desktop (1280px) and phone (390px) widths, with no sideways scrolling.
3. Re-read the diff. Then push and tell Sander what changed, in plain words.

The repo is public: never commit secrets. Keys live in GitHub repository secrets and
Supabase secrets only.

## Layout

- `src/pages/Index.tsx`: section order. Sections are in `src/components/` (Hero, Problem,
  Solution, Audiences, Approach, Founders, WhyUs, Timeline, Partners, FoundingPartner,
  Contact, Footer). `src/pages/Privacy.tsx` is the privacy notice.
- `src/components/Seo.tsx`: per-page title, description and canonical URL (base
  `https://trustifysports.com`). `index.html` holds the Organization structured data and a
  visually hidden text copy of the page (`.seo-fallback`) for search engines and AI
  assistants. Keep that copy in step with the page copy.
- `public/sitemap.xml`, `public/robots.txt`.
- `scripts/spa-pages.mjs`: after the build, writes `dist/privacy/index.html` and
  `dist/404.html` (GitHub Pages has no rewrites). Add new routes there and in the sitemap.

## Contact form

`src/components/Contact.tsx` posts to the Supabase Edge Function
`supabase/functions/contact`, which emails sander@trustifysports.com through Resend with
the sender as reply-to. `.github/workflows/deploy-contact-function.yml` deploys it when
`supabase/**` changes.

One-time setup (repository Settings → Secrets and variables → Actions):
- variable `SUPABASE_PROJECT_REF`: the Supabase project's reference ID
- secret `SUPABASE_ACCESS_TOKEN`: a Supabase personal access token
- secret `RESEND_API_KEY`: a Resend API key for the verified domain trustifysports.com

## Copy rules

Accuracy matters more than polish. Never add claims, numbers, client names or regulatory
statements Sander has not given. Use these regulatory facts consistently:

- The law is the EU Anti-Money Laundering Regulation (AMLR), Regulation (EU) 2024/1624.
  It names professional football clubs and football agents as obliged entities.
- AMLR obligations for professional football clubs and football agents apply from
  10 July 2029.
- The AMLR applies to banks, funds, payment providers and other existing obliged entities
  from 10 July 2027; new beneficial-ownership rules also take effect then.
- AMLA (the EU Anti-Money Laundering Authority) has been operational since July 2025. It
  sets technical standards and coordinates supervision. It is NOT the regulation and does
  NOT supervise clubs day to day; national AML supervisors do. Never write "AMLA 2029",
  "AMLA regulation", "AMLA enforcement" or "AMLA goes live".
- Clubs are obliged only for four transaction types: with investors; with sponsors and
  advertisers; with football agents and other intermediaries; and player transfers.
- Every football agent is an obliged entity, regardless of size, with no exemption.
- Football associations and leagues are not obliged entities under the AMLR.
- Trustify never files suspicious-transaction reports on a client's behalf; the club or
  agent files with its FIU.
- Trustify supports compliance but does not provide legal advice.
