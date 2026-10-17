# WaitListFit

A research-stage specialty appointment capacity website and isolated synthetic product demonstration. This is a concept preview, not an operating scheduling service.

## Run locally

Use Node.js 22.x (tested with 22.23.3).

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Production preview and checks:

```sh
npm run build
npm test
npm run preview -- --host 127.0.0.1
```

The packaging test reads build output, so build before testing on a fresh checkout. GitHub Actions follows this order.

## Repository layout

- `WaitListFit-homepage/`: Vite/React website, 31 routes, synthetic review workbench, local inquiry previews, responsive navigation and scroll storytelling.
- `WaitListFit-intro-video/`: shared Remotion/Three introduction source and optional Remotion Studio project. The website imports this sibling source; keep both folders in the same checkout.
- `WaitListFit-*/`: branding, approved direction updates, IA, original brief, storyboard, and historical QA evidence. Earlier direction artifacts document exploration; the website source is the current implementation.
- `qa-release/`: fresh production-preview screenshots and route checks for the GitHub handoff.
- `VERCEL_SETUP.md`: exact import/build/domain instructions.
- `QA_RELEASE.md`: scope, findings, verification and remaining limitations.

Optional Remotion Studio:

```sh
npm run studio:install
npm run check:video
npm run studio
```

The website install does not require the Studio dependencies. Its Vite configuration deduplicates React, Remotion and Three dependencies. The intro is rendered in the browser, not a pre-exported MP4, and its canvas unmounts after playback. Refreshing the homepage resets to the introduction; reduced-motion preference or the page motion toggle provides a static experience. Manual motion toggles apply to the current document and reset on a full reload to the operating-system preference.

## Deployment

Import the repository root into Vercel. `vercel.json` provides the install command, build command, output directory and SPA deep-link rewrite. No environment variables are required for this frontend preview. The existing Sites worker scaffold is also preserved; Vercel serves the static client build.

## Product boundaries

All demo records are fictional. No patient data, automatic booking, EHR integration, patient contact, active accounts, payments or healthcare compliance certification are implemented or claimed. Inquiries are held in memory and can be downloaded locally; they are not sent to a backend. Pricing is explicitly hypothetical. The public page remains `noindex, nofollow` while it is a research-stage preview.

Before running a real commercial pilot, establish the brief's interview, commitment, data-access, security and human-oversight gates. Remotion displays its upstream licensing notice; assess applicable vendor license terms before commercial use. No license clearance is asserted by this repository.

Generated dependency folders, build artifacts, local environment files and duplicate source ZIP archives are excluded from Git. All editable website and intro source, project assets, design deliverables and QA evidence are included.
