# Trustify Sports website (trustifysports.com)

Marketing site for Trustify Sports: compliance infrastructure for professional football
clubs and football agents under the EU Anti-Money Laundering Regulation. A homepage, three
guide pages and /privacy. React + Vite + TypeScript + Tailwind (shadcn/ui components in
`src/components/ui`).

## How we work

The site is edited only through Claude Code, not Lovable. **Publishing = pushing to `main`**:
`.github/workflows/deploy-site.yml` builds and deploys to GitHub Pages within a couple of
minutes.

Before every push to `main`:
1. `npm ci` (if needed), `npm test`, `npx eslint <changed files>`, `npm run build`.
2. Open the changed page of the built site in a browser (served so `/route` loads
   `route.html`, see Layout) and check
   desktop (1280px) and phone (390px) widths, with no sideways scrolling.
3. Re-read the diff. Then push and tell Sander what changed, in plain words.

The repo is public: never commit secrets. Keys live in GitHub repository secrets and
Supabase secrets only.

## Layout

- `src/routes.tsx`: the one list of pages. The router, the prerender and the sitemap all
  read it.
- `src/pages/Index.tsx`: homepage section order. Sections are in `src/components/` (Hero,
  Problem, Solution, Audiences, Approach, Vision, Founders, WhyUs, Timeline, Partners,
  FoundingPartner, Contact, Footer). `src/pages/Privacy.tsx` is the privacy notice.
- Guide pages (for search): `src/pages/AmlrFootballGuide.tsx` (/amlr-football-guide),
  `AmlFootballClubs.tsx` (/aml-compliance-football-clubs) and `AmlFootballAgents.tsx`
  (/aml-compliance-football-agents), built on `src/components/GuideLayout.tsx`. Each has an
  FAQ whose text also feeds the FAQPage structured data. When a guide changes, update its
  `MODIFIED` date and "Last updated" line. `src/guides.ts` lists them for internal links.
- `src/components/Seo.tsx`: per-page title, description, canonical URL (base
  `https://trustifysports.com`, no trailing slash), Open Graph and JSON-LD helpers
  (`breadcrumb`, `faqPage`, `article`). `index.html` holds the sitewide Organization and
  WebSite structured data.
- `scripts/prerender.mjs`: runs after `vite build`. Renders every route to complete static
  HTML (`dist/<route>.html`, so GitHub Pages serves `/route` with no redirect), writes
  `dist/404.html` (noindex) and generates `dist/sitemap.xml`. The build fails if a page
  breaks or has no `<h1>`. The browser then hydrates the prerendered HTML, so anything that
  depends on today's date must be filled in after load, with the first render matching the
  build (see `DaysToGo` in Hero.tsx and `Year` in Footer.tsx).
- To add a page: create it in `src/pages/` with an `<h1>` and `<Seo>`, add it to
  `src/routes.tsx`, and link to it from at least one existing page.
- `public/robots.txt`, `public/llms.txt` (summary for AI assistants; keep it in step with
  the copy).
- Check pages locally with `npm run build` and a static server that serves `/route` from
  `route.html` (as GitHub Pages does); `npx vite preview` does not.

## Contact form

`src/components/Contact.tsx` posts to the Supabase Edge Function
`supabase/functions/contact`, which emails sander@trustifysports.com through Resend with
the sender as reply-to. `.github/workflows/deploy-contact-function.yml` deploys it when
`supabase/**` changes.

Supabase project: `trustify-sports` (reference `lvxzaydposdtqowicflm`, Central EU).
`.github/workflows/keep-supabase-awake.yml` pings the function daily (`?ping`, which runs
`select 1`) so the free project is never paused for inactivity.

Repository secrets (Settings → Secrets and variables → Actions):
- `SUPABASE_ACCESS_TOKEN`: scoped Supabase token for this project only (Edge Functions
  read-write, Edge Function Secrets read-write, Project Settings read). Expires within a
  year; Sander replaces it when it does.
- `RESEND_API_KEY`: Resend API key with sending access for trustifysports.com

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
