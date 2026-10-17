# WaitListFit website

A complete local, multi-page concept website based on the approved IA, brand kit v3, warm ivory visual direction and scroll storyboard.

## Local preview

The development server runs at http://127.0.0.1:4173/ during the current review session.

For a later session:

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 4173 --strictPort
```

## Included

- The selected split-flap hero with four half-faces per tile, sequential mechanical flips triggered by visibility, a replay control and the warm ivory organic background.
- A scroll-scrubbed opening carried along a drawn curve, a clinic-day timetable and a bounded, reversible scene for constraints, candidates and scheduler review.
- Continuous background depth, progressive constraint lines, staggered candidate entrances, curved transition into exceptions and subsequent scroll-linked rules/surfaces.
- Synthetic rationale disclosures, three exception cases, explicit simulated approval, reset and local audit trail.
- All five proposed modules in source order, buyer roles, incumbent comparison, evidence, replay week, hypothetical pricing, readiness and stop conditions.
- Twelve FAQs, a business inquiry preview, an extended page family, responsive global navigation and a complete branded footer.
- Original logo SVGs, favicons, Public Sans fonts and licenses; Phosphor icons with license.
- Keyboard controls, motion on/off, reduced-motion support, responsive stacked story and native scrolling.

## Boundaries

31 planned public routes, plus custom 404 recovery, are now implemented. The shared navigation, footer and homepage entry links connect the full IA. No production backend, live EHR integration, patient contact, booking, PHI, payment, analytics or remote inquiry collection is connected. The inquiry form validates and prepares an in-memory summary; the visitor can download it locally. No inquiry is sent.

The simulated FILLED display is a presentation state only. The review record is Reviewed handoff and always says No appointment booked. No source export is accepted through the public form.

## Source and design references

- `../WaitListFit-IA-and-motion-plan.md`
- `../WaitListFit-brief-coverage.md`
- `../WaitListFit-four-directions/06-departure-board-ivory-organic.png`
- `../WaitListFit-brand-kit-v3/`
- `../WaitListFit-scroll-storyboard/`

The W logo and Public Sans wordmark supersede the old two-bar logo visible in the raster reference. Hero composition follows the selected visual; source-based product scenes follow the storyboard. The revised pin supports widths of at least 700px and heights of at least 720px, including the user’s 775 × 804 browser. Compact layouts and bounded panel overflow keep expanded evidence reachable. Smaller/shorter windows stack the panels with scroll-driven lane and candidate reveals. Reduced motion removes pinning and spatial animation entirely. The earlier 900px-width / 820px-height cutoff is superseded.

## Validation

```sh
npm run build
npm run test:sites
```

`design-qa.md` records the browser comparison and interaction checks. `qa/` contains desktop/mobile captures and side-by-side hero comparisons. The full-page static capture uses motion-off mode so all three story panels and all content are visible together.

The project retains the starter's Sites-compatible build outputs for a later publishing request; nothing has been deployed.

## Motion review evidence

`qa/split-flap-motion.gif` and `qa/scroll-story-motion.gif` are captured from the actual in-app browser. They are motion proofs, not a rendered mockup. `qa/scroll-story-motion-overview.jpg` shows the transition from the opening curve through the pending reviewer scene. Updated checks are recorded at the top of `design-qa.md`.

## Whole-homepage continuity revision

The same generated sunlit-ivory texture now persists behind the entire homepage and footer. Thirteen scene positions control its framing, rotation, warmth and depth; desktop pointer movement shifts the light. A drawn route and short chapter handoffs carry the opening forward instead of resetting each section's background.

The toolkit uses one advancing module column alongside a held thesis. Audience, comparison, evidence and pricing surfaces settle in the same space. The replay week advances Days 01–05 through native scroll at 700px+ width / 780px+ height, retains clickable tabs, and reverses on upward scrolling. Shorter and mobile windows use the complete static layout. FAQ and final inquiry remain ordinary readable, interactive HTML. A persistent motion control and the existing footer control pause the experience; OS reduced motion is respected.

`qa/whole-homepage-flow.gif` is an actual browser capture from the exceptions chapter through the later homepage chapters. It specifically documents the flow beyond the product demo. `qa/whole-homepage-flow-overview.jpg` is its contact sheet. The image texture is `public/brand/atmosphere/sunlit-ivory.webp`; generation method and final prompt are in `asset-notes.md`.

## Final transition review

`transition-review.md` contains the full 14-step desktop/mobile review against the supplied Dawn recording, with current-run before/after and reverse-flow evidence. The route now stays beside reading areas; mobile cards enter vertically; the opening follows a measured visible range; labels clear the moving card; demo frames stay stable and text layers do not overlap. Background follow is frame-rate-independent and geometry reads are batched/cached. A stable CSS viewport reference coordinates the story and replay pin. The automatic board entry runs once; replay and explicit approval remain user-controlled.

Review motion proofs: `qa/transition-review/desktop-after-motion.gif` and `qa/transition-review/mobile-after-motion.gif`. These are browser screenshot sequences, not frame-time recordings.

## Multi-page extension — 17 October 2026

The complete route map is in `website-coverage.md`. It includes five module detail pages, three audience detail pages, problem/workflow/platform pages, evaluation, replay, hypothetical pricing, governance, data requirements, resources and two guides, about/contact, inquiry flows, sign-in/access, draft legal notices and accessibility.

`/sign-in` is intentionally an honest access-status experience with synthetic demo and access-discussion actions. There are no production accounts, password collection, inactive SSO buttons or fake authentication success.

The interior motion system reuses the homepage’s fixed cream/gold light layers and native scroll. Workflow text advances a held evidence packet through source context, candidate reasoning and human review. Motion never approves a record. Smaller screens stack the narrative; both OS reduced motion and the shared motion control preserve the information.

`/demo` is a separate nine-case synthetic workbench: queue/state/location/owner filtering, case ID search, three spotlight cases, evidence pane, local clarification/version events, explicit handoff, rejection, reversal, audit history, report and in-page export preview. Counts are derived from the same records. Nothing books or sends.

Inquiry routes preserve module/team context and prepare editable in-memory summaries with a consent timestamp/notice version. Downloads are local. No server form submission, email, uploaded records, telemetry or payment is connected. Legal notices remain drafts requiring a responsible owner before collection.

Evidence: `qa/multipage-route-audit.json`, `qa/multipage-brand-comparison.jpg`, `qa/multipage-scroll-story.gif`, `qa/multipage-scroll-overview.jpg`, and desktop/mobile captures. Build and all four hosting/package tests pass. This remains a local frontend prototype, not a deployed or operating healthcare product.

## Full-site review and lag fix — 17 October 2026

All 31 planned routes plus 404 were rechecked against the brief/IA on desktop/mobile. The current review and route-by-route health table are at the top of `design-qa.md`; `qa/site-review-2026-10-17/` holds current-run captures, 95 passing interaction checks, source-link checks, performance readings and native-scroll proofs.

Motion now caches layout geometry and scopes animated CSS values to the consuming surface. Offscreen values are deduplicated, broad panel blur and idle background loops are removed, and the board settles pending work offscreen. The warm shared background, mechanical hero, native scroll and review boundaries remain. The paused-state background is explicitly preserved.

Module stories now use their own workflow previews, Review links to all three spotlight cases, Desk shows room/source exceptions, Report shares the nine-case fixtures, and inquiries preserve consent metadata/focus. Public source links were checked; blocked ISP pages were replaced with an accessible official ONC reference, while original research sources remain in the IA. The optional `?perf=1` local diagnostic is DEV-only and excluded from the production build.

## Inside the Board introduction

The homepage now uses the selected eight-second Remotion intro. Keep the sibling `WaitListFit-intro-video` source directory when developing this project; it owns the shared film source. The compiled deployment bundles the composition normally. Watch intro replays the sequence. Its geometry aligns once to the native board, and the real background/hero continue behind the final fade. The heavy Player/Three module is lazy-loaded, never loaded with motion off, and unmounted after playback. Pause, Skip, timeline, Escape and native scrolling are supported. See the sibling README and design-qa.md for Studio and testing details.
