## Refresh playback update — 17 October 2026

User requested the intro on every homepage refresh. This supersedes the earlier once-per-tab policy and its historical refresh assertion below. Removed the session-storage seen flag. An in-memory document flag prevents unwanted replay on ordinary SPA/back navigation, while each document reload starts fresh. Homepage reloads clear the hash and reset the scroll position before the intro; interior routes and direct anchor visits retain their routing behaviour. Reduced-motion fallback, Skip and native scrolling remain supported. Accessibility/privacy copy and source notes now describe the new behaviour.

Browser checks: two consecutive reloads both started the intro at scrollY 0. Reloading the homepage from #pricing at nonzero scroll returned to scrollY 0, removed the hash and displayed the intro. Evidence: `qa/refresh-starts-intro.png` and `qa/refresh-checks.json` in the video project. Production build and all four Sites checks passed.

final result: passed

## 17 October — Inside the Board introduction

The selected third visual direction is implemented as a shared eight-second Remotion/Three composition above the hero, with the same native background and DOM handoff. Desktop/tablet/mobile browser checks and source comparison are recorded in `../WaitListFit-intro-video/design-qa.md` and `../WaitListFit-intro-video/qa/`. Original homepage content and the sticky-column overlap fix remain intact.

The corrected issues were the initial copy/board mask, camera direction, mobile status gutters, visible screen-reader description, control collisions and unintended replay after motion enable. Skip/pause/timeline/replay, Escape/native scroll exit, header navigation, once-per-session behaviour and motion-off fallback passed. No website/Studio console errors; upstream developer warnings are documented in the detailed report. The heavy chunk is loaded only for the intro, and zero canvases remain afterward. The approved photograph-like direction is interpreted as live textured geometry; photographic depth of field remains optional P3 polish.

final result: passed

## 17 October — evidence/pricing text overlap correction

The user’s Safari screenshots exposed a sticky-column overlap missed in the preceding broad review. Reproduced pricing with the link bottom and stop-rule bottom both at 487.8px: the link occupied the note row. Evidence had the same layout cause.

Wrapped each two-column composition in a separate `.section-pair` grid. Sticky copy is now bounded by that row instead of the section containing the full-width note. Existing responsive tracks, gaps, background and motion remain intact; phones retain the stacked layout.

Verified in the browser at 1440×810, 775×804 and 390×844 with motion enabled, forward/reverse scrolling and a paused-motion check. Minimum observed link-to-note clearance was 70px (desktop evidence), 65px (desktop pricing), and 40px at tablet. Mobile showed no overlap or horizontal overflow. Browser console clean. Production build and all four Sites checks passed. This was Chromium preview verification; Safari-specific rendering was not separately automated.

Proof: `qa/text-overlap-fix/` contains desktop/tablet/mobile screenshots and measured checks. No content or product claims changed.

# WaitListFit website design QA

final result: passed

Reviewed through 17 October 2026 in the Codex in-app browser against the approved visual, brand kit v3, IA and scroll storyboard. This result covers the complete local frontend concept website; it does not establish product efficacy, a production backend, live authentication, compliance or full accessibility certification.

## Full-site brief / IA review and performance polish — 17 October 2026

**Result: passed for the local frontend concept scope.** All 31 planned routes and branded 404 were captured and reviewed at 1440 × 1000 and 390 × 844. Additional checks covered the original 775 × 804 viewport and a narrow 320 × 740 phone. No site was published and no external system was modified.

### Eight review steps

1. **Homepage — passed.** Hero/board → opening → constraints/candidates/reviewer → exceptions → five offers → buyer roles → incumbent comparison → evidence → replay → hypothetical pricing/gate/stop rule → FAQs → inquiry → footer. The selected brand and native-scroll story remain intact.
2. **Products/platform — passed.** All five source offers retain their exact responsibilities and order. Desk now exposes the dated room-hold/missing-source views; Proof has administrative evidence, an identified staff owner, explicit local approval and reversal; Signal preserves baseline/assumptions/owner; Report uses the same nine fixtures with consistent filtered denominators and unresolved-source counts. Module walkthroughs no longer default to unrelated candidate graphics. Missing equipment evidence explicitly has an unknown effective time and the matching fictional template owner; no timestamp is invented for an absent source. Review shows all three exception states with real case deep links. The platform retains the six objects, provenance and permission boundary.
3. **Buyer journeys — passed.** Specialty practice, access department and consultant pages have distinct ownership stories and deliverables. Inquiry links preserve the relevant role/product context.
4. **Pilot/evidence/commercial — passed.** One-week means five workdays after readiness, with cohort agreed separately. The endpoint, matched baseline, feasible/infeasible/unknown denominators, review minutes, constraint guardrails, 8/2/1 target, signed approvals and stop rule remain explicit. $900/site/month + $2,000 setup remains a hypothetical test price, with no invented replay fee, TAM or ROI.
5. **Synthetic workbench — passed.** Nine cases; three spotlight cases; eight operational constraints plus outreach permission; sources, versions, owners and dated actions; missing/conflicting evidence; manual review; unsent draft; clarification/rejection; sequential reversals; consistent report and in-page export preview. No booking, patient contact, PHI, clinical guidance or external write exists. Mobile back/empty reset return keyboard focus appropriately.
6. **Forms/access — passed.** All inquiry paths validate, prepare a local “not sent” summary, preserve entries on Edit, and download locally. Consent timestamp/notice version now also appear in the homepage flow. Focus moves to the summary and returns to editable controls. The confirmation is explicitly scrolled below the fixed header so the local “not sent” message remains visible on phones. Sign-in honestly states no production accounts and has functioning demo/access/help links; no credentials or inactive SSO controls.
7. **Company/resources/notices — passed.** About, contact, governance, data requirements, two explainers, draft privacy/terms, accessibility and recovery paths retain the concept boundaries. Two original ISP URLs returned 403; all three public occurrences were replaced with an accessible official ONC bulletin, verified via Perplexity discovery, browser inspection and HTTP check. The original research URLs remain in the original IA/source record. All eight currently linked external URLs returned HTTP 200.
8. **Navigation/motion/performance — passed.** Real destinations, no invalid anchors, no broken images or empty named controls, and no detected page/header overflow. Back restores reading position; Home clears an old anchor. Native mobile drawer focus/Escape, shared motion setting, still states and narrow layout were checked. Full scroll proofs cover homepage and interior chapters on desktop/mobile. Pausing motion now preserves the warm gold texture.

### Performance findings and changes

The code review found likely contributors to the reported lag: repeated per-frame layout measurements, animated values published on the document root, unchanged offscreen style writes, multiple translucent backdrop blurs, and continuously animated background layers. These were replaced with cached geometry invalidated by real layout changes, scoped/deduplicated style values, one composited light surface, quieter panel materials and event-driven updates. Split-flap entry still plays mechanically; pending timers settle when the board leaves the viewport and replay remains explicit. No scroll hijacking or automatic review action was added.

Short native-scroll diagnostics at 775 × 804, using the same down/up input and screenshot workload:

| Sample | Frames sampled | Median gap | 95th-percentile gap | Gaps >24ms | Recorded long tasks |
|---|---:|---:|---:|---:|---:|
| Before | 117 | 16.7ms | 50.0ms | 27 | 1 / 65ms |
| After, repeat | 134 | 16.7ms | 17.7ms | 5 | 0 |

These are short instrumented browser samples, not a controlled device benchmark or an FPS guarantee. The first post-change capture contained a 716.7ms outlier; its raw file is retained alongside the repeat (max 51ms). Screenshot capture, viewport changes and initial rendering can affect samples. The DEV-only diagnostic uses no network and is excluded from production output.

### Visual iteration and accepted evidence

The entire page set was captured before changes. Full-page screenshots were used for content/layout review; fixed viewport backgrounds cannot be judged from stitched full-page captures alone. Current native-scroll sequences, rather than those stitched images, establish continuity.

- Before and after Products are normalized to the same 1440 × 1000 viewport and paused state in `before-after-products.jpg` and were opened together for comparison.
- First comparison found the paused organic layer obscuring the gold texture. Fixed its opacity and recaptured the same state; the approved warm palette and composition now remain visible with motion off.
- Four `final-pages-*.jpg` sheets pair actual desktop/mobile route captures. All were opened and inspected. Source/control labels were separately inspected at ordinary viewport size.
- Native sequences: `desktop-home-flow.gif`, `mobile-home-flow.gif`, `desktop-workflow-flow.gif`, `mobile-review-flow.gif`, with corresponding overview sheets. These are sampled actual browser frames, not generated UI or frame-time recordings.
- Numbered evidence includes Desk missing source, filtered Report denominator, mobile inquiry summary, mobile still state and final Products still state.

### Route-by-route health

| Step | Page / local preview | Desktop | Mobile |
|---|---|---|---|
| 1 | [Specialty appointment capacity, made visible](http://127.0.0.1:4173/) | Passed | Passed |
| 2 | [The specialty scheduling problem](http://127.0.0.1:4173/problem) | Passed | Passed |
| 3 | [How the proposed workflow works](http://127.0.0.1:4173/how-it-works) | Passed | Passed |
| 4 | [Five proposed product modules](http://127.0.0.1:4173/products) | Passed | Passed |
| 5 | [Clinic Desk — Capacity and template visibility](http://127.0.0.1:4173/products/clinic-desk) | Passed | Passed |
| 6 | [Clinic Review — Cancellation-fill candidate queue with opt-in outreach drafts](http://127.0.0.1:4173/products/clinic-review) | Passed | Passed |
| 7 | [Clinic Proof — Referral triage/routing for staff approval](http://127.0.0.1:4173/products/clinic-proof) | Passed | Passed |
| 8 | [Clinic Signal — Procedure/resource constraint simulator](http://127.0.0.1:4173/products/clinic-signal) | Passed | Passed |
| 9 | [Clinic Report — Access-equity and leakage analytics by clinic/location/patient segment](http://127.0.0.1:4173/products/clinic-report) | Passed | Passed |
| 10 | [Platform concept & evidence model](http://127.0.0.1:4173/platform) | Passed | Passed |
| 11 | [Who WaitListFit is for](http://127.0.0.1:4173/solutions) | Passed | Passed |
| 12 | [Specialty practices](http://127.0.0.1:4173/solutions/specialty-practices) | Passed | Passed |
| 13 | [Access departments](http://127.0.0.1:4173/solutions/access-departments) | Passed | Passed |
| 14 | [Practice-management consultants](http://127.0.0.1:4173/solutions/practice-consultants) | Passed | Passed |
| 15 | [Evaluation method & pilot readiness](http://127.0.0.1:4173/evaluation) | Passed | Passed |
| 16 | [The one-week cancellation replay](http://127.0.0.1:4173/pilot) | Passed | Passed |
| 17 | [Hypothetical pilot pricing](http://127.0.0.1:4173/pricing) | Passed | Passed |
| 18 | [Synthetic cancellation review workbench](http://127.0.0.1:4173/demo) | Passed | Passed |
| 19 | [Prepare a replay inquiry](http://127.0.0.1:4173/request-replay) | Passed | Passed |
| 20 | [Plan a synthetic walkthrough](http://127.0.0.1:4173/request-demo) | Passed | Passed |
| 21 | [Governance & human accountability](http://127.0.0.1:4173/governance) | Passed | Passed |
| 22 | [Data and permission discovery](http://127.0.0.1:4173/data-requirements) | Passed | Passed |
| 23 | [Research & field guides](http://127.0.0.1:4173/resources) | Passed | Passed |
| 24 | [Field guide: the cancellation replay](http://127.0.0.1:4173/resources/cancellation-replay) | Passed | Passed |
| 25 | [Field guide: scheduling data & permissions](http://127.0.0.1:4173/resources/scheduling-data-and-permissions) | Passed | Passed |
| 26 | [About the WaitListFit concept](http://127.0.0.1:4173/about) | Passed | Passed |
| 27 | [Business contact preview](http://127.0.0.1:4173/contact) | Passed | Passed |
| 28 | [Sign in & workspace access status](http://127.0.0.1:4173/sign-in) | Passed | Passed |
| 29 | [Privacy notice — concept preview](http://127.0.0.1:4173/legal/privacy) | Passed | Passed |
| 30 | [Terms — concept preview](http://127.0.0.1:4173/legal/terms) | Passed | Passed |
| 31 | [Accessibility & motion](http://127.0.0.1:4173/accessibility) | Passed | Passed |
| 32 | [Page not found](http://127.0.0.1:4173/this-route-does-not-exist) | Passed | Passed |

### Test results and limits

- 95 recorded interaction checks passed; see `interaction-checks.json`.
- 31 distinct internal route targets resolve; all in-page anchors exist. Eight active external targets returned HTTP 200; before/after link records retained.
- Final desktop/mobile DOM checks: one H1, main landmark, no detected horizontal page/header overflow, no broken images; mobile controls have accessible text or labels.
- `npm run build` and all four `npm run test:sites` checks passed. No app console errors/warnings were observed. The production bundle contains no performance diagnostic.
- This is not a full assistive-technology certification or a real-device battery/GPU benchmark. OS reduced-motion wiring was inspected; visible motion-off behavior was tested, rather than claiming an unavailable OS emulation.
- Live authentication, connected inquiry receipt, legal/entity approval, real data/interface permissions, pilot readiness, deployment and domain connection remain outside this local preview and are not presented as complete.

Evidence directory: `qa/site-review-2026-10-17/`. No actionable P0/P1/P2 issue remains in the requested local website scope.

## Multi-page implementation QA — 17 October 2026

Source visual: `../WaitListFit-four-directions/06-departure-board-ivory-organic.png`, with the subsequently approved sunlit cream/gold homepage atmosphere, W mark and brand kit v3. Rendered implementation: http://127.0.0.1:4173/. Source and implementation are combined in `qa/multipage-brand-comparison.jpg` and were opened for visual review together. The reference includes more page height than the 1440 × 1000 browser viewport; the interior is an original adaptation, not a pixel clone of that hero. The newer W mark and brighter continuous light are intentional approved changes.

Evidence:

- `qa/multipage-route-audit.json`: all 31 planned routes and branded 404 at 1440 × 1000 and 390 × 844. Each has one H1 and main landmark; no detected horizontal page overflow or broken images.
- `qa/multipage-products-desktop.png`, `multipage-sign-in-desktop.png`, `multipage-home-desktop.png`: actual browser captures, not generated UI images.
- `qa/multipage-review-mobile.png`, `multipage-sign-in-mobile.png`, `multipage-inquiry-mobile.png`: 390px full-page responsive captures.
- `qa/multipage-scroll-story.gif` / `multipage-scroll-overview.jpg`: native browser screenshot sequence through the workflow, advancing held evidence packet, curved governance chapter, final CTA and footer. This is a sampled scroll proof, not an FPS measurement.
- Additional actual-browser review at 775 × 804, plus narrow-phone checks at 320 × 740. The 320px header issue below was fixed and rechecked: menu right edge 309px, header scroll width 320px.

Iteration findings and fixes:

1. P2: the homepage's existing mobile motion control occupied the new replay CTA. Moved the control to the lower-right with a visible label on narrow phones. Post-fix phone screenshots show clear navigation and full CTA.
2. P2: evidence/source text was too small at normal zoom. Increased queue states, owner text, source references, timestamps and opened-record labels. Rechecked the nine-case workbench with an open evidence pane.
3. P2: the 320px fixed header extended to 354px, even though the page itself clipped overflow. Reduced narrow-phone brand/gaps/padding and rechecked the actual menu bounding box.
4. P2: keyboard route focus produced an unwanted outline around the entire main frame. Kept programmatic focus/skip destination while removing the main-container outline; interactive controls retain explicit focus styles.
5. Added the eighth operational constraint (staff-recorded administrative eligibility) separately from outreach permission. No clinical determination is implied.
6. Strengthened reversal behavior: sequential manual decisions can be reversed with appended audit events. Reversing an earlier decision after a fictional source update preserves the newer source and reopens review.

Primary interaction checks:

- Product menu / mobile accordion exposes all five modules in order. Native modal drawer closes with Escape, restores focus and unlocks body scroll. A module link closes the drawer and navigates to its real route.
- Shared motion on/off survives internal navigation and Back, including the homepage. Native scroll remains available and never approves a record. Reduced-motion CSS and first-render media query wiring were inspected; OS preference emulation was not available in the browser controls.
- Resource lanes reveal their source; candidate buttons disclose rationale; routing missing-field switch retains staff approval; constraint simulator updates only its hypothetical scenario; report location filter updates numerator and denominator.
- Case 001 handoff: Ready 2→1, Reviewed 1→2; total remains 9. Draft is UNSENT, no appointment booked. Undo restores counts and appends history.
- Case 002 has unknown interpreter/authorization evidence and no handoff action. A simulated source-version update leaves authorization unresolved. Reversal retains CV-04-DEMO and reopens review.
- Case 003 has required evidence missing and only a manual exception route. No ranked recommendation, outreach draft or approval action appears.
- Sequential reversals leave report totals at 9 and retain all five generated audit events. Empty search has a useful reset. Reset restores the explicit 09:12 fixture snapshot.
- Inquiry context preselects Clinic Signal and Access director from its entry link. Missing fields prevent preparation. A fictional example.com inquiry prepares a focused local “not sent” summary, and Edit restores all values. No remote submission or credential collection code is connected.
- Sign-in is a complete, branded unavailable-access experience with working demo, access discussion, help and notice links, as specified in the IA. It does not imitate a successful login.
- Per-route title/description, browser back, direct deep links, custom 404, source links, logo and favicon checked. No fabricated customer proof, integrations, compliance or pricing acceptance.
- Browser console errors/warnings: none observed. `npm run build` passes; all four hosting/package tests pass.

No actionable P0/P1/P2 issue remains in the requested local frontend scope. Authentication, connected lead handling, entity/legal approval, deployment and domain connection remain explicit launch dependencies, not claimed implementations.

## Full transition audit and polish — latest revision

Source: the supplied Dawn recording, now shown in `qa/transition-review/dawn-reference-sequence.jpg`, and the established WaitListFit visual/brand sources. Source and current implementation were both opened and visually inspected. No pixel-clone claim is made across the different products.

Current-run review, every section: `transition-review.md`. It contains the numbered 14-step health table, accepted chapter screenshots, findings, fixes and test limits.

- Before evidence: `qa/transition-review/desktop-before-overview.jpg` and `mobile-before-overview.jpg`.
- After evidence: `desktop-after-overview.jpg`, `mobile-after-overview.jpg`, their motion GIFs, reverse-flow sheets and separate footer captures in the same directory.
- Final focused checks: `17-mobile-opening-final.jpg` (bounded tile / label clearance), `16-reviewer-775.jpg` (stable 654px panels / reachable action), `15-mobile-motion-off.jpg` (complete still state).
- P2 fixes: route crossing copy; offscreen mobile card entry; an early offscreen opening; overlapping panel text; faint labels; viewport-sensitive pin timing. Each is described with before and after evidence in the review.
- Typography, colors, source assets and all required content remain. Foreground rotation/distance was reduced; the light field and gutter route provide continuity. Labelled native controls and synthetic-only behavior remain intact.
- Inspected 1440 × 900, 390 × 844, 775 × 804 and 775 × 720, density 1. Both full sweeps and reverse sweeps encountered all main sections, with no horizontal document overflow. No sampled mobile opening or visible module card was horizontally clipped.
- Motion-off, manual week tabs, forward/reverse day selection, pending-only scroll, explicit approval/reset and empty inquiry validation were exercised. Console logs were empty; build and four retained tests pass.
- Physical-device toolbar behavior, full assistive-technology coverage and frame-time/GPU benchmarks remain unmeasured. Stable viewport sizing and hidden-page animation pausing are implementation safeguards, not certification claims.

No actionable P0/P1/P2 transition issue remained in the inspected states. The earlier reviews below are historical records; this current-run review governs transition acceptance.

## Whole-homepage continuity and background revision

Latest request: extend the Dawn-inspired flow across the entire homepage and make the background richer and interactive. This explicitly supersedes the earlier static background treatment and the initial motion-only sign-off. The existing brand, departure board, exact five offers and concept boundaries remain the content/identity sources of truth.

### Source and rendered evidence

- Source identity: `../WaitListFit-four-directions/06-departure-board-ivory-organic.png` (1086 × 1448). Scaled to 1440px width and cropped to 1440 × 1000 for the hero comparison. The W brand-kit logo intentionally supersedes its earlier placeholder mark.
- Motion/art direction: source recording frames `../../work/frame-4.jpg`, `frame-8.jpg`, `frame-20.jpg`, `frame-32.jpg`, `frame-36.jpg`, `frame-40.jpg`. Their broad light fields, recurring curve and curved section handoffs inform the flow. Different product copy and layout mean this is a direction comparison, not pixel cloning.
- Current implementation: `http://127.0.0.1:4173/`. Desktop 1440 × 1000; user viewport 775 × 804; mobile 390 × 844 and 360 × 800; short-window fallback 775 × 720. Screenshot density 1.
- Full identity comparison: `qa/world-hero-brand-comparison.jpg`. Focused board comparison: `qa/world-board-comparison.jpg`. Direction comparison: `qa/world-direction-comparison.jpg` (recording browser chrome cropped; differing compositions explicitly retained).
- Actual post-demo motion: `qa/whole-homepage-flow.gif`, `qa/whole-homepage-flow-overview.jpg`. Covers exceptions, toolkit, audiences, comparison, evidence, week, hypothesis pricing, questions and final inquiry. Raw screenshot frames remain under `../../work/full-world-captures/`.
- Current stills: `qa/world-775-hero-final.jpg`, `qa/world-desktop-hero.jpg`, `qa/world-desktop-toolkit.jpg`, `qa/world-mobile-toolkit.jpg`, `qa/world-775-evidence.jpg`, `qa/world-775-replay-week.jpg`, `qa/world-775-inquiry.jpg`, `qa/world-775-faq.jpg`, `qa/world-775-review.jpg`.

### Findings and fixes

- P1, entire page: the previous shared background was too subdued, and motion beyond the demo remained mostly independent fades. Replaced it with one generated sunlit texture across the whole document, thirteen connected camera/color poses, pointer response, a continuous route, held headings and coordinated surfaces. The actual browser sequence above documents the later chapters, rather than relying on a static hero check.
- P2, first background framing: excessive zoom cropped the illuminated edges out of view. Reduced camera crop/zoom and moved the richer gold field into the toolkit, comparison, week and inquiry chapters. Current hero/evidence/inquiry captures show luminous sweeps with readable cream centers.
- P2, mobile motion control: the first fixed-bottom position could cover a status label. Moved it into the header gap on narrow screens; tested 390px and 360px widths. Tablet/desktop uses an icon at the edge or a compact text control.
- P2, short-window week: the held replay scene could exceed a short tablet viewport. Its pin now requires 780px height; verified 775 × 720 uses ordinary flow. The 775 × 804 held week fits and advances/reverses between its five days.

### Required fidelity surfaces

- Typography: current Public Sans and tabular/monospaced data are retained. The exact hero thesis, hierarchy, native icons and W logo remain. Larger editorial headings and the vertical module layout are intentional changes to achieve the requested page-wide story. No truncation or horizontal document overflow was observed at the inspected widths.
- Spacing/layout: chapter handoffs replace disconnected gaps; the toolkit thesis stays beside one advancing column. Informational cards have bounded motion and remain reachable. Short and mobile layouts stack. Demo approval controls fit within the inspected user viewport.
- Colors/tokens: brighter cream, champagne and amber light enrich the established ivory palette. No mint/cyan substitution. The one curved ink chapter stays distinct and readable. Text and form surfaces use opaque-enough warm paper rather than placing small text directly over bright texture.
- Image fidelity: original logo, module SVGs, Public Sans and Phosphor icons remain. New asset `public/brand/atmosphere/sunlit-ivory.webp` is original generated texture, not UI. All product screens, text and controls remain native frontend elements. Original organic background SVG remains a secondary layer.
- Copy/content: all five proposed module descriptors, scenario and seven constraints, exclusions/abstentions, sources, reviewer, baseline/guardrails, hypothetical pricing, 8/2/1 prerequisites, stop rule, FAQ and local inquiry boundaries remain intact. No claims or real system actions were added.

### Interaction checks

- Native scroll through the entire later homepage, plus forward/reverse week progress (Day 02 → Day 05 → Day 02) and manual Day 03 selection.
- Desktop pointer response observed in the actual computed world transform and pointer coordinates; no pointer telemetry is collected.
- Persistent pause button disables background animation, removes pinning and retains all content. OS preference handling is implemented; the host OS preference was not changed.
- Mobile menu navigation, module expansion at 360px, audience tabs, FAQ expansion and primary inquiry navigation work. Required empty inquiry validation still blocks preparation.
- The new scroll sequence leaves the product state PENDING APPROVAL. Explicit Simulate approval still produces a local handoff; Reset reverses it. No booking or outreach occurs.
- No horizontal overflow at the inspected sizes. Checked browser error/warning logs were empty.
- Build and retained worker/package checks pass.

No actionable P0/P1/P2 issue remains in the inspected revision. Follow-up P3: subjective timing and light intensity can be refined after owner review. This pass does not establish full assistive-technology coverage, low-end-device performance, clinical efficacy or production backend readiness.

## Motion revision after user feedback

The initial visual pass did not adequately verify the reference recording's motion. Its load-only glyph rotation finished before visitors saw the board, and its width/height cutoffs disabled the main scene in the user's 775 × 804 browser. The earlier unconditional motion sign-off and pin cutoff below are superseded by this revision.

- Replaced rotating glyphs with four actual half-faces per tile, top/bottom hinge rotations, sequential character settling and delayed clock digits. Starts at 42% board visibility, restarts after leaving/re-entering, and has an explicit replay button. No perpetual autoplay or automatic approval.
- Added a native-scroll opening scene. The 30-minute slot follows the same SVG path as its progressively drawn route; position is measured from path geometry. No scroll interception or artificial wheel easing.
- The supplied warm ivory/organic background continues through the scene with scroll-linked position and depth. Timetable, constraint rules, candidates, workbench transitions, module rows, replay timeline and closing background share the motion language.
- Main constraint/candidate/reviewer pin now works at 775 × 804 and 1440 × 900. Native scrolling draws seven lanes, changes stages forward/backward, and releases into the curved exceptions surface. Inactive panels are inert and hidden from accessibility navigation. Expanded content can scroll inside a bounded panel.
- 390 × 844 retains native scrolling, moving opening and individual lane/candidate reveals. Evidence stacks without pinning, and no horizontal overflow was detected.
- Motion-off was exercised: no flap animation, no pin, all evidence available. OS preference handling remains implemented; the host OS preference was not changed during review.
- Verified the end state remains PENDING APPROVAL after scrolling through. Only clicking Simulate approval creates a local reviewed handoff. Reset returns it to pending and records the reversal. Neither action books or sends anything.
- Browser error/warning logs were empty in the checked interactions.
- Production build and the four retained worker/package tests pass after the revision.

Current-run evidence: `qa/split-flap-motion.gif`, `qa/motion-flip-contact.jpg`, `qa/scroll-story-motion.gif`, `qa/scroll-story-motion-overview.jpg`, `qa/motion-775-constraints.jpg`, `qa/motion-775-candidates.jpg`, `qa/motion-775-review.jpg`, `qa/motion-mobile-hero.jpg`, `qa/motion-mobile-journey.jpg`, `qa/motion-desktop-constraints.jpg`, and `qa/motion-desktop-candidate-expanded.jpg`. GIFs are browser screenshot sequences. The storyboard interpretation is inspired by the reference's continuous scenes, curves and tonal shifts; it is not a pixel clone of Dawn.

## Original static comparison record

The following records the preceding static design review. It remains useful for brand/layout comparison; the revised motion section above governs scroll behavior and responsive pinning.

## Comparison target and normalization

- Source visual truth: `/Users/prajaktagaikwad/Documents/Codex/2026-10-16/see-this-site-how-the-bg-2/outputs/WaitListFit-four-directions/06-departure-board-ivory-organic.png`.
- Source dimensions: 1086 × 1448. Normalized to 1440 × 1920 and cropped to the first 1110px for the hero comparison.
- Implementation: `http://127.0.0.1:4173/`, pending-review state, page top, motion on.
- Implementation capture: `qa/desktop-hero-final.jpg`, 1440 × 1110 pixels at a 1440 × 1110 CSS viewport, density 1.
- Combined full-view evidence: `qa/hero-comparison-final.jpg`.
- Combined focused board evidence: `qa/board-comparison-final.jpg`.
- Mobile evidence: `qa/mobile-hero-final.jpg`, 390 × 844; `qa/mobile-constraints.jpg`, `qa/mobile-candidates.jpg`, `qa/mobile-form.jpg`.
- Further states: `qa/desktop-constraints.jpg`, `qa/desktop-candidate-detail.jpg`, `qa/desktop-reviewed.jpg`, `qa/desktop-exceptions.jpg`, `qa/desktop-inquiry-preview.jpg`.
- Whole-page reading review: `qa/homepage-full-static.jpg` / `qa/homepage-full-overview.jpg`. This explicitly uses motion-off mode; it is not a claim that all story panels appear simultaneously in the pinned desktop sequence.

## Comparison history

1. P2: the original background image crop hid the lower-left leaves on tall screens. Changed fitting to retain the complete supplied background composition. Post-fix evidence: desktop hero v2 and final comparison.
2. P2: original split-flap letters were too thin and narrow relative to the selected board. Changed to a heavier monospaced face and a wider optical scale. Post-fix evidence: final focused board comparison.
3. P2: mobile headline wrapped to an isolated final word. Reduced the mobile size and tracking; at the narrowest breakpoint, stacked CTAs prevent awkward button wrapping. Post-fix: final 390px hero. 360px was additionally inspected for overflow; the narrowest CTA treatment uses vertical buttons.
4. P2: the provisional short-screen pinned layout could put the bottom of a workbench below the readable area. The initial pass required at least 900px width and 820px height (superseded by the motion revision above). Smaller/shorter and motion-off modes stack all three panels; stage controls navigate to their panels. Verified at 1280 × 720 and both mobile widths.
5. Keyboard refinements: tab groups support arrow keys/Home/End; the mobile drawer focuses its first link and makes underlying main/footer inert. Native dialogs provide a focus boundary and a meaningful name.

This initial static review missed the user-visible motion issues documented and addressed above.

## Required fidelity surfaces

- **Fonts and typography:** self-hosted Public Sans from the selected kit; the exact hero thesis and three-line desktop hierarchy are retained. Monospaced time/IDs and split-flap lettering remain restricted to data/status surfaces. Mobile body text was increased where the first pass was too small. No unexpected fallback or truncation was found.
- **Spacing and layout:** hero heading, CTAs, board width, metadata and status line follow the source's proportions. The small added scroll cue and concept boundary are storyboard requirements. Fine ruled rows and distinct section compositions follow Berth Schedule. Controls and panels remain within their viewport at tested breakpoints.
- **Colors and tokens:** warm ivory/cream/stone background, deep ink, amber status and teal review action use kit v3 roles. No mint/blue background substitution remains. Source-safe semantic pending/blocked/review labels are paired with text.
- **Image quality and asset fidelity:** supplied kit SVG logos, module icons, background and favicon are reused; Public Sans and licenses are bundled. The W logo intentionally replaces the earlier two-bar placeholder. The departure board is functional text/UI, not a screenshot. Phosphor supplies standard interface icons. No patient photos, customer logos or invented proof are used.
- **Copy and content:** all five exact module descriptors in order; synthetic scenario, exclusions, reviewer ownership, uncertainty, first-validation buyers, incumbent alternatives, evaluation endpoint/guardrails, one-week method, hypothetical price, 8/2/1 readiness gate, stop rule, FAQ and inquiry boundaries are present. No live integration, automatic booking, compliance, clinical benefit or ROI claim is made.

## Browser checks

- Viewports inspected: 1440 × 1110, 1440 × 900, 1280 × 720, 390 × 844, 360 × 800.
- No horizontal document overflow at tested sizes. The decorative invitation image extends inside an intentionally clipped section; it does not create page overflow.
- Main anchors, desktop nav, mobile drawer and primary replay CTA work.
- Constraint/candidate/review navigation, rationale expansion, explicit approval, reset and audit event rendering work. Returning to the hero after approval preserves the Reviewed handoff state and updates the board to its explicitly simulated label.
- Exception tabs show clean, missing/unknown and blocked cases; no blocked recommendation is implied.
- All five modules expand; audience and replay-day tabs change content. Keyboard ArrowRight was exercised on an audience tab.
- FAQs expand; privacy notice and other informational dialogs open/close.
- Required empty-form validation blocks confirmation. A synthetic example inquiry prepares a local summary; edit restores the entered values. The download button produced the expected text file, retained as `qa/inquiry-download-preview.txt`. No external request is sent.
- Motion off removes pinning and animations and reveals all evidence. The OS preference listener and CSS reduced-motion media query are also implemented; the host OS preference itself was not changed for this review.
- Browser error/warning logs: empty in the checked interactions.
- Build passes. All four retained Sites worker/package checks pass.

## Expected differences and follow-up polish

- The board is an interactive implementation with a clean matte surface; the raster concept has additional photographic grain and mechanical texture. Further material detail is optional P3 polish.
- The supplied vector background and the raster reference have slightly different curve contours. The kit's warm palette and organic/leaf composition are retained.
- The approved W wordmark, the IA's Who it’s for nav item, a scroll cue and clearer concept disclosures are intentional updates to the older raster composition.
- Supporting routes, live collection, analytics, domain connection and deployment are outside this homepage-first pass.

## Implementation checklist

- [x] Selected hero and current brand assets.
- [x] Complete homepage chapters and exact five offers.
- [x] Native scroll / bounded story / stacked fallback.
- [x] Functional primary interactions and local inquiry preparation.
- [x] Desktop and mobile visual comparison.
- [x] Keyboard, motion, labels, overflow and console checks.
- [x] Successful build and retained hosting checks.
- [ ] Owner review of the homepage before supporting pages and publication.
