## Refresh playback update — 17 October 2026

User requested the intro on every homepage refresh. This supersedes the earlier once-per-tab policy and its historical refresh assertion below. Removed the session-storage seen flag. An in-memory document flag prevents unwanted replay on ordinary SPA/back navigation, while each document reload starts fresh. Homepage reloads clear the hash and reset the scroll position before the intro; interior routes and direct anchor visits retain their routing behaviour. Reduced-motion fallback, Skip and native scrolling remain supported. Accessibility/privacy copy and source notes now describe the new behaviour.

Browser checks: two consecutive reloads both started the intro at scrollY 0. Reloading the homepage from #pricing at nonzero scroll returned to scrollY 0, removed the hash and displayed the intro. Evidence: `qa/refresh-starts-intro.png` and `qa/refresh-checks.json` in the video project. Production build and all four Sites checks passed.

final result: passed

# Inside the Board — design and interaction QA

Date: 17 October 2026. Selected direction: third displayed ideation result, **Inside the Board**.

## Visual truth and normalization

Source: `references/selected-inside-the-board.png`, 1448×1086, a four-frame motion-direction storyboard. Implementation: browser-rendered homepage at 1440×900, 775×804 and 390×844 CSS pixels, with native header and actual hero. Frame captures were taken through the pause/timeline controls, not generated UI images. Desktop story states: frame 24 / macro; 63 / mechanical leaf; 120 / opening; 216 / handoff. Studio additionally verifies separate 1920×1080 and 1080×1920 compositions at frame 239.

Full-view evidence: `qa/source-comparison.jpg` places the actual selected storyboard and browser captures together. Storyboard film cells and browser content below the 90px desktop header are contained, without distortion, in 720×405 comparison cells. Browser capture density is 1×; desktop originals are 1440×900. The mock is a cinematic direction, not a pixel layout specification for the existing responsive homepage. Its photographic key finish, depth of field and tightly framed full-board hero differ from the interactive implementation. The actual approved hero geometry remains authoritative for the web handoff, including content continuing below the fold.

Focused evidence: `qa/mechanism-comparison.jpg` compares the selected numeral/hinge crop against the browser-rendered geometry. `qa/homepage-handoff-tablet.png` verifies the playback bar clears the hero eyebrow. `qa/homepage-handoff-mobile.png` verifies the complete status, time and separated controls.

## Findings and fixes

All actionable P0/P1/P2 findings below have been corrected.

- [P1, corrected] Copy over the dark board at the start. The initial camera/mask transition crossed the headline. The left film field now stays open through the copy beat; portrait film reserves its upper field. Post-fix: desktop and mobile macro captures.
- [P1, corrected] Camera aimed toward the wrong edge in the first pullback. Early evidence is retained at `qa/iterations/01-opening-before-camera-fix.png`. Corrected camera orientation, then separated the centered reveal from the later handoff. Post-fix: `homepage-mid-desktop.png`, `homepage-handoff-desktop.png` and final Studio captures.
- [P1, corrected] Screen-reader film description was visible behind the narrow header. Applied a standard visually hidden treatment. Post-fix: mobile captures show a clean header and visible concept label.
- [P2, corrected] Mobile controls overlapped the clock and global motion toggle. Controls now sit below the board; global motion and the concept label occupy separate upper positions. Post-fix: `homepage-handoff-mobile.png`.
- [P2, corrected] Tablet playback controls touched Watch intro. Moved the bar to 84px at 700–1000px widths. Measured bar bottom 126px, eyebrow top 130px at 775×804. Post-fix: `homepage-handoff-tablet.png`.
- [P2, corrected] Mobile status keys reached beyond the board frame. Tightened the portrait spacing and retained side gutters. Post-fix: mobile handoff.
- [P2, corrected] Re-enabling page motion after manual replay could restart the introduction. Trigger comparison now requires a new replay action. Browser check confirms enabling motion does not autoplay.

## Five fidelity surfaces

- **Typography:** approved Public Sans for editorial/hero copy and native UI monospace for board data. Corrected the early Courier slab-serif mismatch. The real hero keeps its existing line breaks. Type and synthetic status are readable at desktop/tablet/phone; all controls have focus states.
- **Spacing/layout:** macro copy and board have separate fields; progressive pullback holds the complete opening before aligning to the once-measured native board. Portrait board stacks its status and time. Header stays available. Playback controls and labels clear critical text at tested widths. No extra scroll height or horizontal overflow.
- **Colors/tokens:** existing cream/gold atmosphere, ink, original W mark and amber are preserved. The live background remains beneath the transparent composition. Native hero is revealed in place. No new mint/blue territory or backdrop blur layers.
- **Assets/image quality:** original generated charcoal material is applied to genuine Three geometry with hinges and rotating physical half-keys. Approved logos, background and licensed local font are reused. The implementation is live geometry, not a stretched storyboard or screenshot. See the remaining P3 finish note below.
- **Copy/content:** exact hero thesis, synthetic Tuesday 13 October 2026 scenario and Pending approval state. No autonomous approval, booking, outreach, real records, integrations or efficacy claims. Existing homepage coverage is preserved. Privacy and accessibility pages describe the local session flag and controls.

## Interaction and runtime checks

Evidence: `qa/interaction-checks.json`, plus final screenshots.

- Eight-second automatic completion restores the hero at full opacity, removes inert, and leaves zero canvas elements.
- Pause/play, timeline seeking, Home/PageUp/arrow keyboard input, Skip and replay operate in the browser.
- Skip returns focus to the hero heading. Escape dismisses the film.
- Native scrolling dismisses the intro without scroll interception. Header navigation remains usable during playback and the intro does not leak onto the inquiry route.
- Autoplay is once per tab session; refresh does not replay. The flag contains no business or patient data.
- Page motion off removes the intro and disables replay. Re-enabling motion does not replay automatically. This checks the shared reduced-motion path; no operating-system preference was changed during testing.
- Canvas renders on demand when paused and unmounts at completion/dismissal. Heavy Remotion/Three code is lazy-loaded separately from the ordinary page bundle.
- Browser console: no errors in website or Studio. Upstream developer warnings concern Remotion licensing information and Three Clock deprecation; no runtime failure was observed.
- Site production build and four Sites packaging checks pass. Studio bundle and lint/type checks pass. No MP4 was rendered or deployed.

## Follow-up polish / P3

The original storyboard uses photographic depth of field and foil-like lettering. The real-time implementation keeps a sharper, textured 3D finish. More elaborate optical effects can be explored for a rendered export; the current handoff, legibility and controls do not depend on them. Dedicated Safari, physical-device and assistive-technology testing were not performed in this pass.

## Implementation checklist

- [x] Selected direction resolved and source preserved.
- [x] Real moving geometry and frame-driven camera.
- [x] Continuous native background and actual DOM hero handoff.
- [x] Desktop, tablet and phone checks; source comparison reopened after fixes.
- [x] Skip, pause, timeline, replay, motion fallback and focus behaviour.
- [x] Canvas disposal and scope checked; no persistent idle animation added.
- [x] Source and validation artifacts saved.

final result: passed
