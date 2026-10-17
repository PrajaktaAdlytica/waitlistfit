# Connect WaitListFit to Vercel

## Import the GitHub repository

1. Sign in to Vercel and choose **Add New → Project**.
2. Connect GitHub if prompted. Grant Vercel access to `PrajaktaAdlytica/waitlistfit`, then choose **Import** for that repository.
3. Keep **Root Directory** at the repository root (`.` / leave the default). Do not select `WaitListFit-homepage`: the intro imports source from its sibling folder.
4. Confirm the following settings, which are already defined by the committed configuration:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | Vite |
| Root directory | Repository root (`.`) |
| Node.js version | 22.x |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `WaitListFit-homepage/dist/client` |
| Environment variables | None required for this preview |

5. Click **Deploy**. `npm ci` runs the root postinstall to install website dependencies. Vite bundles the shared intro source. The optional Remotion Studio does not need a separate deployment.
6. Open the generated deployment URL and directly load `/products/clinic-review`, `/demo`, `/sign-in` and `/request-replay`. Refresh one of those paths to verify SPA routing. On the homepage, refresh from a scrolled position and confirm the intro begins at the top. Check mobile navigation and the motion-off control.

The SPA rewrite in `vercel.json` serves the application shell for direct app URLs. Build failures should be read in the Vercel build log; do not change the root directory to work around a missing sibling import.

Official references: [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite), [Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions), [importing projects](https://vercel.com/docs/monorepos).

## Connect waitlistfit.com

1. In the deployed Vercel project, open **Settings → Domains**.
2. Add `waitlistfit.com` and `www.waitlistfit.com`; choose the preferred primary hostname/redirect in the dashboard.
3. At the domain's current DNS provider, enter the exact A/CNAME/verification records Vercel shows for this project. Use the dashboard's recommended values rather than a generic IP copied from a tutorial. Preserve existing mail-related records.
4. Return to Domains and wait for valid DNS configuration and HTTPS. Test both hostnames and a direct nested route after verification.

[Official Vercel custom-domain setup](https://vercel.com/docs/domains/set-up-custom-domain).

## After the first deployment

Pushes to `main` normally trigger production builds once the Git integration is enabled. Verify this in the project's Git/build settings. The GitHub workflow separately builds the website, runs its packaging tests, and typechecks/lints/bundles the intro.

This handoff does not connect a live lead inbox, analytics service, login provider or scheduling system. The current form and sign-in disclosures must remain until those services are implemented and approved. No Vercel project or DNS record was changed during the GitHub handoff.
