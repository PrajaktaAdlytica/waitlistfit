# WaitListFit — Inside the Board

Selected direction 3, 17 October 2026. A silent eight-second Remotion composition at 30fps. Original textured 3D split-flap board, sequential hinge rotation, camera pullback and human-review status. No booking or outreach occurs.

## Preview

Run `npm ci`, then `npm run dev -- --no-open`. Studio offers `InsideTheBoard` (1920×1080) and `InsideTheBoardMobile` (1080×1920). No MP4 has been exported; both are editable compositions.

## Shared homepage implementation

Keep this directory next to `WaitListFit-homepage`. The website lazy-loads `src/IntroFilm.jsx` directly into its Remotion Player; there is one shared animation source. Its Vite configuration deduplicates React, Remotion and Three. Production website output contains the bundled composition and has no runtime dependency on this source directory.

On the homepage the real cream/gold background remains underneath the transparent canvas. The native hero headline and CTAs fade in during the last 1.5 seconds. The native board is measured once and aligned with the camera; it fades in while the 3D board fades out. No homepage content is rasterized or duplicated. The opening appears above the hero as a temporary visual layer, with no extra scroll height or forced scroll.

Autoplay restarts on every homepage refresh, with Pause, Skip, a keyboard-accessible timeline and Watch intro for replay. Escape, scrolling, resizing, route changes or disabling page motion dismiss the introduction. Reduced motion goes straight to the still live hero. The canvas renders on demand and unmounts after completion. Film playback is silent. No analytics, network lead collection or patient information is included.

## Assets and provenance

- `references/selected-inside-the-board.png`: the selected ImageGen storyboard, direction 3.
- `public/brand/intro/charcoal.webp`: original generated powder-coated charcoal material, created with the built-in ImageGen tool. Source prompt: “1024×1024 seamless matte charcoal micro-pebbled powder-coated aluminum; flat evenly lit PBR albedo scan; no objects, text, baked light or shadows; average #242a27.” Compressed to a 512×512 WebP for the real-time scene.
- Background, Public Sans and logos reuse the approved website brand assets. Font license is retained.
- Geometry, hinge rotations, lighting and camera movement are authored in Three via `@remotion/three`, driven only by Remotion frames.

## Verification

`npm run build` bundles the Studio composition. `npm run lint` checks the registration. Website verification also runs its production build and four Sites checks. See `design-qa.md` and `qa/` for browser evidence and interaction checks. Real browser checks cover desktop 1440×900, tablet 775×804 and phone 390×844. Dedicated Safari and physical-device testing remain separate release checks.

Reference documentation: https://www.remotion.dev/docs/three and https://www.remotion.dev/docs/player/player
