# WaitListFit release QA — 17 October 2026

## Result

Ready for GitHub handoff and Vercel frontend import. No release-blocking issue was found in the scoped local production-preview checks. This is not a production deployment, security certification, measured ROI result or clinical validation.

## Fresh-check method

A new clone of the empty target repository was populated with the complete editable site, sibling intro project and design deliverables. Excluded dependencies/builds were reinstalled from committed lockfiles. Node 22.23.3 was used for the clean build and checks. Browser QA ran against the resulting static production preview at port 4174, not the older development server. Evidence in `qa-release/` was captured during this release pass; historical evidence remains in the original project folders.

1. **Build health — pass.** Root `npm ci`, website production build and four packaging/worker tests passed. The first fresh-check test attempt exposed that packaging tests require generated files; the CI workflow was corrected to build before testing. Intro ESLint, TypeScript and Remotion bundle passed. Optional Studio dependency installation reported zero known vulnerabilities at install time.
2. **Route health — pass.** All 31 defined routes opened directly at desktop 1440×900 and mobile 390×844. Each had a single H1; no checked route had horizontal document overflow or broken loaded images. Linked section anchors on the initial 28 secondary routes resolved. Both resource articles were discovered through their real page links and checked separately. Unknown-path recovery rendered the branded 404. JSON evidence lists exact paths and viewport observations.
3. **Navigation and interaction health — pass.** Mobile navigation opened; Escape closed the dialog and restored focus to the menu button. The demo clean handoff changed the record and count, showed the draft as UNSENT and the appointment as not booked, allowed reversal, and reset to its nine-record fixture. A fictional `qa@example.com` inquiry generated a local summary with consent timestamp/notice version and was cleared afterward. Nothing was transmitted remotely by that flow.
4. **Motion and layout health — pass within tested scope.** Repeated homepage refresh and a scrolled/hash refresh started the intro at scroll position zero and cleared the old hash. The actual intro canvas mounted; pause/timeline/skip controls worked; canvas count returned to zero after exit. Turning page motion off dismissed the intro and displayed the static board. Desktop evidence/pricing sticky headings cleared the full-width questions/stop rows; measured overlap was false and screenshot evidence was captured. Mobile routes used their stacked layouts and remained within viewport width.
5. **Content and repository hygiene — pass within tested scope.** Five proposed modules remain in order; hypothetical price, human approval boundary, evidence limits, readiness gate and stop rule remain visible. Sign-in clearly states that no production accounts exist. A text scan of 209 project/config files found no matches for common GitHub, OpenAI, AWS, Perplexity token or private-key patterns. This pattern scan is not an exhaustive security audit. Dependency/build folders, environment files and duplicate ZIPs are ignored.

## Known limits and follow-up

- The lazy intro bundle is about 1.30 MB raw / 368 KB gzip; the main app is about 440 KB raw / 129 KB gzip. Vite emits a large-chunk advisory. It is loaded separately and the WebGL canvas is disposed after exit, but lower-end physical devices and slow mobile networks were not profiled in this pass. No FPS, Lighthouse or Core Web Vitals score is claimed.
- Browser checks used the Codex in-app browser with desktop/mobile viewport emulation, not a physical iPhone/Android or a full Safari/Firefox matrix. No independent screen-reader audit was performed.
- Console error inspection during the production flow was empty. Remotion licensing information and the upstream Three Clock deprecation warning are known informational/dependency concerns; applicable license terms still need review before commercial use.
- Manual motion preference is document-scoped; a full refresh re-reads the OS reduced-motion preference. Reduced-motion implementation was reviewed in source and the manual equivalent was exercised; OS preference emulation was not injected.
- Lead forms and access pages are intentionally frontend previews. No real submission, authentication, backend, live scheduling, payment, patient outreach or analytics conversion was tested or claimed.
- Vercel build/runtime and custom-domain/HTTPS checks must be completed after importing the repository. No live deployment or domain ownership is implied by local QA.

## Evidence

- `qa-release/desktop-routes.json`, `qa-release/mobile-routes.json`: exact route observations.
- `qa-release/desktop-home.png`, `desktop-intro.png`: homepage and actual intro playback.
- `qa-release/desktop-evidence-boundary.png`, `desktop-pricing-boundary.png`: sticky-row regression views.
- `qa-release/mobile-motion-off.png`, `mobile-navigation.png`: responsive/static mode and menu.
- `qa-release/mobile-handoff.png`, `mobile-local-inquiry.png`: local synthetic interactions.
- `VERCEL_SETUP.md`: deployment settings and post-import checklist.
