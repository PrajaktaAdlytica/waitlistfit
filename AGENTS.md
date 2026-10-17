# WaitListFit release repository

The Vite website is in `WaitListFit-homepage/`; its project instructions apply there. The shared Remotion source is in `WaitListFit-intro-video/`. Preserve their sibling layout: the homepage imports the film directly. `npm ci` at this repository root installs the website through postinstall; `npm run build` produces `WaitListFit-homepage/dist/client`. Vercel deploys from the repository root using `vercel.json`. Do not select a subfolder as the Vercel root. The Studio has its own optional install, `npm run studio:install`.

Keep the refresh-triggered intro, native scrolling, synthetic-data labels, manual approval boundary and warm approved brand. No booking, outreach, live integration or patient data. Forms and sign-in are explicitly frontend concept previews. Read the existing IA, brief and latest project QA reports before changes. Historical brand variants are retained as research; the deployed brand is v3.

Before pushing: `npm test`, `npm run build`, and browser checks of affected routes and breakpoints. Before sharing video changes, also `npm run studio:install` then `npm run check:video`. Never commit node_modules, builds, credentials or environment secrets.
