# Prototype Instructions

## WaitListFit design decisions

- The user has now authorized the full multi-page IA, including sign-in. Build every planned route with real navigation. Keep the approved homepage intact; extend its warm, continuous background and purposeful native-scroll motion across supporting pages. Workspace access remains an honest no-production-accounts page; no credentials are collected.
- Selected reference: ../WaitListFit-four-directions/06-departure-board-ivory-organic.png. Keep the departure-board hero, warm ivory palette, overlapping organic background shapes and lower-left leaf geometry.
- Brand assets and Public Sans come from ../WaitListFit-brand-kit-v3. Other sections follow Berth Schedule: thin rules, time strips, aligned evidence and restrained amber.
- Follow ../WaitListFit-scroll-storyboard for choreography. Native scroll; a continuous opening/constraint/candidate/reviewer story. Keep the pinned sequence working at the user’s 775 × 804 browser size. Narrow mobile and reduced-motion modes retain all evidence.
- User feedback: static resemblance is insufficient. The board must mechanically flip keys one by one when visible, with a replay control; motion must connect scenes and backgrounds rather than finish offscreen on page load. Preserve the corrected warm cream/ivory background colors.
- Latest user direction: the WHOLE homepage must feel like one continuous scroll story. Keep a shared, visibly warm cream-and-gold atmospheric background, scroll/pointer response, and elements/lines that carry through all later chapters. A static stack after the demo is insufficient. Preserve legibility, native scrolling, the selected hero and source content.
- The one-week plan may advance its informational day tabs through native scroll on sufficiently tall desktop/tablet windows (700px width, 780px height minimum). It must retain manual tabs and a static fallback. This does not approve or run a real workflow.
- Transition polish: keep the route in gutters and empty handoffs, preserve full label readability, use vertical-only entrances on narrow phones, and keep the opening tile inside the visible route range. Use the stable CSS viewport reference for scene timing. Avoid overlapping text layers or resetting the board merely because the user scrolls back.
- Performance review: scope animated CSS values to the background or section that consumes them, cache geometry until layout actually changes, and avoid layered backdrop blurs or idle background loops. Preserve the warm shared atmosphere, native scrolling and visible story motion. Interior narratives must show their own module workflow, and interactive focus must not be removed by scroll-driven panel changes.
- Synthetic, read-only preview only. No automatic booking, contact, PHI, actual integrations or fake business proof. A simulated approval is explicitly local and reversible.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

- Sticky evidence/pricing copy must be contained by `.section-pair`, never the outer section with full-width questions/stop-rule notes. Keep those notes outside the sticky containing block.

- Intro selected: direction 3, Inside the Board. Preserve the eight-second shared Remotion/Three source in sibling `WaitListFit-intro-video/src/`. Use the actual page background and DOM hero for the handoff, with no duplicate screenshot hero or extra scroll height. Autoplay on every homepage refresh, native scroll dismissal, Pause/Skip/timeline/replay, reduced-motion still fallback and canvas disposal are required. Keep playback controls and synthetic labels clear of hero text and clock at 390, 775 and desktop widths.

- Latest intro behaviour: every homepage refresh starts at the top and replays the intro, including refreshes from a scrolled/hash position. Respect reduced motion. Keep ordinary SPA/back navigation separate from a document reload; no session-storage seen flag.
