# WaitListFit brand identity and visual direction

Recommended direction: **Open Interval**. Version 1, 16 October 2026. Prepared for review; this is a brand asset package, not a website implementation or an approved trademark.

WaitListFit should feel like a thoughtful operational tool built for people who understand scheduling. Its identity combines an expressive editorial voice with clear, restrained product detail. The main visual object is an interval in a clinic day: it becomes a resource map, then a candidate comparison, then a review trail.

The developed direction extends the IA's warm-paper and mineral-green proposal. This package supersedes the IA's provisional color suggestions for future design work. The supplied five offers, product boundaries and required hero thesis remain unchanged.

## 1. Visual territories

The comparison board presents exactly three directions with different compositions and storytelling devices:

| Territory | Visual character | Story device | Assessment |
|---|---|---|---|
| Open Interval | Warm paper, evergreen, pale sage, restrained apricot; editorial serif headlines and calm sans-serif UI | Continuous resource lanes and a recurring interval | Recommended. Best fit for the Dawn-inspired continuity and a humane specialty operations brand. |
| Schedule Journal | Ivory, charcoal and rust; documentary typography, sharp rules and numbered annotations | An operational field notebook that exposes evidence step by step | Strong alternative for a more investigative, consulting-led identity; less cinematic. |
| Resource Atlas | Pale mineral lavender, deep plum, muted citron; structured sans typography | A spatial map of labeled scheduling dependencies | Strong alternative for a more technical platform identity; less warm. |

Only Open Interval has been developed into production-format identity assets. The two alternatives are visual territories, not three interchangeable palette options or three completed brand systems.

## 2. Positioning and personality

Audience: specialty-practice COOs, ambulatory access directors, practice administrators, scheduler managers and practice-management consultants. The first invitation is a one-week cancellation replay.

Brand traits:

- **Humane:** language respects the operator and the people affected by scheduling decisions.
- **Precise:** names, intervals, source dates and reasons remain legible.
- **Accountable:** a named human owns review; uncertainty is visible.
- **Calm:** rich motion is coordinated and purposeful, without competing loops.

Category descriptor: **Specialty capacity review**. This is a positioning description for the concept, not evidence of a new market category.

Required website hero thesis remains: **“Make specialty appointment capacity visible before a scheduler fills the slot.”**

Optional short brand line for identity applications: **“See the fit. Keep the decision.”** It does not replace the required hero. “Clarity, with a human in the loop” is an explanatory brand-board line, not a validated benefit claim.

Use concrete verbs: inspect, compare, explain, review, clarify, replay. Avoid autonomous-care language, inflated AI claims, guaranteed savings, fabricated proof or language implying clinical decision-making.

Example copy:

| Context | Preferred language |
|---|---|
| Candidate state | Awaiting scheduler review |
| Missing information | Interpreter availability is unknown in this source. |
| Rejection reason | Required room is unavailable for this interval. |
| Replay CTA | Request a one-week cancellation replay |
| Demo action | Simulate reviewed handoff |
| Boundary | Concept preview. Synthetic data. No booking or outreach occurs. |

## 3. Logo system

The original mark is a rounded W formed from two continuous lanes. A detached interval above its center creates an identifiable focal point. It can support the motion system without becoming a medical cross, calendar icon or automated-approval checkmark.

The wordmark uses an outlined Public Sans construction at weight 650 with measured spacing. Use the supplied assets rather than retyping the name in a nearby weight. Brand spelling is **WaitListFit**.

Variants:

- `logo-primary.svg/png`: evergreen wordmark and mark with an apricot interval; transparent background.
- `logo-monochrome.svg/png`: single ink color; transparent background.
- `logo-reverse.svg/png`: paper wordmark and mark with apricot interval for evergreen/dark surfaces.
- `logo-stacked.svg/png`: centered mark above wordmark.
- `mark-primary`, `mark-monochrome`, `mark-reverse`: standalone symbols.

SVG wordmarks are outlined vectors and need no installed font. PNGs preserve transparency. The mark is original artwork; distinctiveness and trademark clearance have not been legally assessed.

### Clear space and sizing

Let X equal the main stroke thickness in the mark. Keep at least 2X clear around the outside of the complete lockup and at least 1.5X around a standalone mark. Supplied canvases include useful padding; maintain clear space when placing them near text or container edges.

Use the horizontal lockup at roughly 180–240px wide in a typical desktop header, subject to actual layout. Minimum recommended lockup width is 160px; below that, use the standalone mark. Standalone mark minimum: 16px for favicon use, preferably 24px or larger in UI. Use monochrome or the contained favicon at small sizes; the apricot interval is decorative and must not carry essential meaning.

Do not stretch, rotate, outline, bevel, add shadows to, recolor individual wordmark letters, or alter the interval's location. Avoid the primary logo on similarly dark backgrounds. Use reverse on evergreen and monochrome where color reproduction is uncertain. Do not animate the wordmark on every navigation or page load.

### Favicon and app icons

The contained evergreen icon uses a paper mark and apricot interval. Included: SVG, ICO with 16/32/48px entries, PNGs at 16/32/48/192/512px, and a 180px Apple touch icon. `manifest.webmanifest` is a reusable asset manifest, not a deployed application. Resolve its relative asset paths during future integration.

## 4. Color system

| Name | Hex | Primary role |
|---|---|---|
| Paper | #F7F4EC | Main canvas; warm reading background; reverse button labels |
| Ink | #202E2A | Body text and primary hierarchy |
| Evergreen | #285447 | Brand mark, primary actions, structural diagram lines |
| Sage | #E3EBE3 | Secondary chapter atmosphere, quiet panels and ready-for-review surface |
| Apricot | #E7AA7D | Interval highlight, warm background light, limited identity accent |
| Secondary | #59665E | Supporting copy, captions and metadata on light surfaces |

Suggested large-area distribution: paper 60%, sage 20%, evergreen 15%, apricot 5%. These are art-direction proportions, not mandatory pixel quotas. A deep inspection chapter can temporarily use an evergreen field. Most of the website remains light.

### Semantic interface colors

| Role | Foreground | Surface / behavior |
|---|---|---|
| Ready for review | #285447 | #E3EBE3; text label required; never means booked |
| Needs clarification | #8A5A21 | #F6EAD6; explain missing evidence |
| Blocked / error | #A3443C | #F8E5E1; show the reason and next action |
| Informational | #415B72 | #E9EFF4; supporting facts, not primary brand blue |
| Keyboard focus | #544BB3 | Visible ring with light offset; use on light controls |
| Quiet divider | #D3DBD3 | Decorative grouping only |
| Essential field/control boundary | #7C8980 | On white or paper; do not substitute the quiet divider |
| Elevated surface | #FFFFFF | Evidence panels and tightly bounded UI details |

Status uses text and icon/shape as well as color. Apricot is not a small-text color on paper. Do not treat sage as a generic “success” color for automatic booking. For controls on dark backgrounds use a light focus treatment with a contrasting offset.

Action variants included in tokens: hover #21473C, pressed #183C32, disabled surface #DDE2DC and disabled label #69756E. Disabled contrast is not a substitute for a visible explanation. Hover and pressed feedback must also work through focus and activation.

### Calculated contrast

The supplied `contrast-checks.json` records tested foreground/background pairs. Examples: Ink/Paper 12.86:1; Secondary/Paper 5.48:1; Paper/Evergreen 7.80:1; Secondary/Sage 4.95:1; clarification text/surface 4.95:1; blocked text/surface 5.01:1. The essential input boundary is 3.32:1 against paper.

These pairs meet the listed 4.5:1 normal-text or 3:1 non-text threshold. They are not certification of a future site. Check actual size, focus, overlays, gradients, states and browser rendering during implementation.

## 5. Typography

**Newsreader, regular 400:** brand headlines, short narrative statements and editorial chapter titles. Use optical sizing appropriate to the rendered size. Its contrast and softer shapes bring a human voice to the operational content.

**Public Sans, regular 400 / medium 500 / semibold 600–650:** body, navigation, forms, labels, evidence and product UI. Use tabular numerals for times, counts and comparisons: `font-variant-numeric: tabular-nums`.

| Role | Desktop starting point | Mobile starting point | Leading / tracking |
|---|---|---|---|
| Main display | 64–80px Newsreader 400 | 40–48px | 1.02–1.08 / -0.02em |
| Chapter heading | 44–56px Newsreader 400 | 30–36px | 1.08–1.15 / -0.015em |
| Product heading | 24–32px Public Sans 600 | 22–26px | 1.2 / -0.01em |
| Lead | 20–22px Public Sans 400 | 18–20px | 1.5 / normal |
| Body | 17–18px Public Sans 400 | 16–18px | 1.55–1.65 / normal |
| Dense interface | 14–16px Public Sans 400/500 | 14–16px | 1.4–1.5 / normal |
| Eyebrow | 12–14px Public Sans 600 | 12–13px | 1.4 / 0.08em |

Keep narrative body width around 55–70 characters. Dense evidence must not be scaled down as a desktop screenshot on mobile. Avoid serif text in tables, excessive all-caps copy, stretched letter spacing, fake bold and auto-typed legal or required text.

Font files are included in TTF and WOFF2 with their SIL Open Font License notices. Provenance: [Newsreader by Production Type](https://github.com/productiontype/NewsReader) and [Public Sans license in Google Fonts](https://github.com/google/fonts/blob/main/ofl/publicsans/OFL.txt). Preserve the included notices when redistributing the fonts. No paid-font purchase is required for the supplied files.

## 6. Layout and visual materials

Use warm, mostly uninterrupted reading surfaces. Prefer an editorial composition with clear asymmetry, generous margins and a meaningful product object. The brand board's diagram is a composition specimen, not the final website layout.

Starting geometry: 4/8/12/16/24/32/48/64/96/128px spacing scale; 16px product cards; 32px large chapter surfaces; fully rounded primary actions. Larger curves belong to broad transitions, not every nested element. Keep data panels structurally crisp.

Depth is shallow: a subtle border and a restrained ambient shadow for raised evidence, never heavy floating glass on every surface. Background light may softly shift from paper to sage to apricot; a stable opaque surface must sit behind dense evidence and small type. Avoid generic blue gradients, bright glowing orbs, decorative 3D medical objects, endless identical cards or an unexplained mesh of nodes.

Photography is not required for the first direction. Start with original resource maps and review-interface compositions. Any later human photography should depict operators at work naturally and must not imply a patient, clinician, customer or endorsement without appropriate rights and context.

## 7. Diagram and icon language

Resource lanes are gently curved lines with clear labels and bounded intervals. A source connection terminates at an explicit port or edge; it never runs through a label. Line endings and arrowheads distinguish evidence, proposed handoff and user action. Use dashed lines plus “Unknown” for missing evidence; do not rely on opacity alone.

Use Public Sans for diagram labels, tabular times, consistent source/date formatting and visible ownership. A decorative mark may morph into the interval, but the visible clinic-day facts stay fixed and readable.

The five modules retain one identity with five related 24px icons:

1. Clinic Desk: aligned lanes and interval.
2. Clinic Review: candidate list and review cue.
3. Clinic Proof: administrative routing branch.
4. Clinic Signal: resource/assumption controls.
5. Clinic Report: comparative bars and baseline.

Use the exact offer descriptors from the IA beside the working module names. Do not create five unrelated sub-brands or let the word “Proof” imply validated outcomes. Icons use 1.8px strokes on a 24px viewBox; scale consistently and label icon-only controls.

## 8. Motion identity

Motion should look designed as one sequence. The interval is the persistent object; backgrounds change around it. It becomes a resource alignment, then a candidate rationale, then a review state. The GIF and static storyboard are direction samples, not a working product interaction.

Timing tokens: micro 180ms; panel 320ms; chapter 650ms. Suggested easing: `cubic-bezier(0.22, 1, 0.36, 1)`. Scroll-scrubbed movement follows scroll directly, while entrance reveals can settle and remain visible. Use native scrolling.

Behavior rules:

- Show the hero statement and primary CTA immediately.
- Draw a line to reveal a relationship; use a short surface transition to show a state.
- Keep motion sparse around dense sources, forms and pricing.
- Let the button arrow shift subtly and its surface darken; no universal card tilt.
- End at Awaiting scheduler review. Scrolling never approves, books or sends anything.
- User decisions persist through reverse scrolling; Reset demo is explicit.
- Reduced-motion users get complete labeled still states. No text depends on typing timing.
- Pause unnecessary offscreen animation. Future long automatic sequences need appropriate user controls.

The rich-motion site should derive its energy from coordinated changes in scale, line continuity, atmosphere and state—not perpetual movement on every element.

## 9. Concept-stage disclosures

For all future product previews and captures, use persistent **DEMO — SYNTHETIC DATA** and **CONCEPT PREVIEW** labels. Add “Not clinical guidance” in the relevant preview context. An illustrative state is not an operating integration, measured fill, actual review, patient record or customer result.

The master brief's safeguards remain in force. Brand polish must not imply a shipped SaaS, real customers, live EHR permissions, outbound outreach, booking, compliance certification or validated ROI. Pricing remains a hypothesis in the IA; branding introduces no new offer or price.

## 10. Package inventory and verification

- `assets/WaitListFit-brand-board.svg/png`: developed recommended direction.
- `assets/WaitListFit-visual-directions.svg/png`: three-territory comparison.
- `assets/WaitListFit-logo-proof.svg/png`: primary, reverse, monochrome and 16–96px size specimens.
- `assets/WaitListFit-motion-study.gif`: animated direction study.
- `assets/WaitListFit-motion-storyboard.svg/png`: still companion.
- `assets/logo-*` and `assets/mark-*`: transparent identity variants.
- `assets/favicon.svg`, `favicon.ico`, PNG/app icons and `manifest.webmanifest`.
- `assets/icon-desk.svg`, `icon-review.svg`, `icon-proof.svg`, `icon-signal.svg`, `icon-report.svg`.
- `assets/social-preview.svg/png`: 1200×630 social composition; not published metadata.
- `fonts/`: two variable families in TTF and WOFF2, plus license notices.
- `tokens/brand.css` and `tokens/brand-tokens.json`: reusable identity values.
- `contrast-checks.json`: numerical pair checks.

All SVGs were parsed and rendered. Main boards and small-size logo specimens were visually inspected. Font files and notices were included; text, button, status and control contrast pairs were calculated. Final browser, responsive, accessibility, production build and deployment QA belong to the later website implementation.

The next design phase can use Open Interval as the recommended baseline, or replace it with one of the two displayed territories after review. No website, external account or domain was changed in this branding assignment.
