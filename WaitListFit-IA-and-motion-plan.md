# WaitListFit information architecture and motion plan

Planning draft • 16 October 2026 • waitlistfit.com • Concept 22

WaitListFit should tell the story of **one cancelled specialty appointment, the constraints behind it, and the scheduler who decides what happens next**. A continuous clinic-day timeline carries the visitor from an apparent opening to an explainable, human-reviewed candidate. The commercial invitation is a one-week cancellation replay.

This is a research and planning deliverable. Every route, interaction, form and screen below is a specification for future work. No website, prototype, integration, tracking, advertising, account or deployment has been created. WaitListFit is the user-selected name; ownership of the domain and clearance of the mark remain unverified.

## 1. Scope and instruction priority

The user's WaitListFit request and supplied concept brief govern the work. STARTUP_WEBSITE_MASTER_GUIDE.md supplies craft and coverage guidance where compatible. Earlier Appointment Dock branding is superseded; the underlying five offers remain intact. The brief contains an earlier one-page/static-specification assignment and a later multi-page concept-site/prototype handoff. This plan preserves both: a self-contained validation homepage, supporting offer pages, and a separate future synthetic demo specification. The current instruction is research and IA only.

Three distinct layers prevent research-stage work from looking like a shipped product:

| Layer | What belongs here | Status language |
|---|---|---|
| Public company and validation website | Problem, all five proposed modules, method, demo narrative, limitations, hypothetical pricing, replay inquiry | Research-stage concept; proposed module; request a discussion |
| Separate synthetic demo | Fictional clinic-day map, candidate rationale, evidence, review states, unsent draft | DEMO — SYNTHETIC DATA; CONCEPT PREVIEW; not clinical guidance |
| Internal validation and parent handoff | Interview scripts, ad experiment, data-rights gate, pilot letter, stop rule, tracking schema, verification ownership | Proposed protocol; not proof of readiness |

Nothing is omitted merely because it should not be a marketing section. Sections 12–16 hold the internal requirements. The original pasted brief is preserved verbatim in the companion file; the coverage checklist maps every brief heading to this plan.

## 2. What the reference inspection and research establish

### Dawn and the supplied recording

Inspected the live Dawn homepage and How It Works page, and 17 frames at four-second intervals across the supplied 65-second recording. Live scrolling confirmed the drawn arc, staged text and chat scene. Recording times below locate visual states, not exact animation trigger timings; source code and animation libraries were not inspected.

| Recording position | Observed design behavior | WaitListFit adaptation |
|---|---|---|
| 00:00 | Split opening: warm gradient, portrait, large serif headline, minimal navigation | Editorial opening beside an original clinic constraint composition; no borrowed portrait or Dawn identity |
| 00:04 | Dark brown field and a progressively drawn illuminated arc | A clinic-day line that exposes a 30-minute cancellation |
| 00:08 | Broad orange/gold field, centered thesis, generous negative space | A warm transition from the visible gap to its hidden constraints |
| 00:12 | Conversation bubbles enter against cream/gold continuity | Source facts and review notes appear in a readable sequence |
| 00:16–00:20 | Connected personal-context scene, small portraits, progressively appearing reasoning/content | Three fictional candidate rows connect to explicit constraints and source evidence; no clinical or opaque AI reasoning |
| 00:24–00:28 | Calendar/connected-service scene and evolving messages | Data artifacts feed a proposed read-only workspace; never imply a live EHR connection |
| 00:32 | Expert cards close a large cream surface with a rounded boundary | Explainable evidence and named fictional reviewer roles; no fabricated expert endorsements |
| 00:36 | Dark contrast chapter with paired before/after labels | Compare fragmented checking with a consolidated review packet, labeled illustrative |
| 00:40 | Curved, layered testimonial cards | Use three review-case selectors instead of invented testimonials |
| 00:44–00:48 | Arc returns over sky imagery, then calm FAQ | Return the clinic-day line to the replay invitation, followed by readable FAQs |
| 00:52–01:00 | Up-scroll revisits scenes and returns to opening | Ensure deterministic reverse scrolling without undoing an explicit demo decision |
| 01:04 | Narrower browser window stacks the opening | Plan a true mobile story; this resized desktop view is not evidence of mobile QA |

Dawn feels continuous, but it is not literally one unchanging background. Large related surfaces, gradual tonal changes, repeated motifs and curved section edges create continuity. Reproduce that coherence across WaitListFit, rather than putting unrelated gradients behind a conventional card stack. [Dawn homepage](https://joindawn.com/)

Dawn's live navigation exposes Blog, How it works and Try Dawn. Its How It Works page has Morning, Midday, Evening and Night anchors and follows a day in use. That temporal structure is particularly relevant: WaitListFit can follow a clinic day while retaining direct chapter navigation. [Dawn walkthrough](https://joindawn.com/how-it-works)

### Market and website architecture findings

Perplexity's research tool was used with its high research preset, supplemented by Perplexity searches for official EHR and interoperability sources. Dawn, Qventus and Kyruus navigation/content were also inspected directly in the browser. Linear and Stripe patterns below are content-based research findings, not claims of observed animation.

| Reference | Evidence and structure | IA consequence |
|---|---|---|
| Qventus | Live navigation separates Solutions, Care Areas, Resources and Company, with Request demo. Homepage moves through solutions, care settings, customer material and inquiry. Surgical Growth addresses OR capacity and related operations. | Separate module responsibilities from buyer journeys. Explain adjacent surgical context accurately; do not assert Qventus lacks outpatient capabilities. [Qventus](https://www.qventus.com/) · [Surgical Growth](https://www.qventus.com/solutions/operating-room-utilization/) |
| Kyruus Health | Live menus group Providers/Payers, audiences, solutions and EHR integrations. Its Schedule offering includes self-scheduling and last-minute openings. | Give each proposed module a page and descriptor. Retain persona routes, but use data-access discovery instead of integration badges. [Kyruus](https://kyruushealth.com/) · [Schedule](https://kyruushealth.com/solutions/schedule-for-health-systems/) |
| Epic | Official scheduling material describes specialty scheduling, staff decision support, self-scheduling and Fast Pass offers to waitlisted patients. | Cancellation filling alone is not a credible differentiation claim. Ask whether the buyer's incumbent configuration already solves the problem. [Epic scheduling](https://www.epic.com/software/appointment-scheduling/) |
| Linear | Capability detail and pricing have dedicated pages around a recognizable product workflow. | Make the complete offer easy to inspect beyond the homepage. Do not copy subscription tiers for five unvalidated modules. [Linear features](https://linear.app/features) · [Pricing](https://linear.app/pricing) |
| Stripe | Product pages and technical documentation provide progressively deeper explanations. | Let buyers understand the replay first; let operators inspect workflow and reviewers inspect data requirements. [Payments](https://stripe.com/payments) · [Documentation](https://docs.stripe.com/payments) |
| HL7 and ONC/ASTP | Appointment, Schedule and Slot describe related scheduling concepts. Resource availability does not establish booking permission or satisfaction of every resource/business rule. | The signature visual should explain why an opening may not be fillable. Never equate interoperability with authorized write-back. [HL7 Schedule](https://hl7.org/fhir/R4/schedule.html) · [Appointment](https://hl7.org/fhir/R4/appointment.html) · [ONC Appointment](https://isp.healthit.gov/uscdi-data/appointment) · [ONC Schedule](https://isp.healthit.gov/uscdi-data/schedule) |
| Oracle API documentation | Appointment creation is documented with authorization and operational constraints; application registration/customer permissions are separate concerns. | A possible endpoint is not an available WaitListFit integration. Record EHR, tenant, scopes, enabled operations and permission owner before promising booking. [Appointment API](https://docs.oracle.com/en/industries/health/millennium-platform-apis/mfrap/op-appointment-post.html) · [Authorization](https://docs.oracle.com/en/industries/health/millennium-platform-apis/fhir-authorization-framework/) |

Competitor capabilities and results are vendor descriptions, not independent evidence of WaitListFit efficacy. The supplied brief rates adjacent product evidence medium and incremental ROI evidence low; retain these as brief assessments, not a new formal evidence grading. No market-size estimate, revenue forecast or quantified savings belongs in public copy.

**Positioning hypothesis:** specialty capacity review that makes constraints, sources and human decisions inspectable. This is a hypothesis to compare against configured EHR tools, call-center workflows, spreadsheets and online self-scheduling—not a proven unique capability.

The referenced healthcare.md section 22 and screenshots/22-website-preview.png were not supplied as separate files. Fresh official sources support this research, but do not reconstruct or certify the missing file's citation chain. Parent review must reconcile those original citations and verify any existing screenshot separately.

## 3. Brand and product foundation

### Brand direction

Use **WaitListFit** consistently in navigation, copy and metadata. The story should feel calm, precise, humane and operationally literate. The page can have rich motion while remaining predominantly light.

Proposed visual territory: warm paper surfaces, deep ink typography, muted mineral green, and a limited apricot accent. A thin clinic-day line becomes a capacity map, a candidate comparison and finally an audit trail. Use one evolving atmosphere per page with a shared visual system across routes; route transitions must not depend on a single giant persistent scene.

Provisional color roles, to be tested in design: paper #F7F4EC; ink #202E2A; pale sage #E3EBE3; deep pine #203A32; apricot #E7AA7D; quiet border #D3DBD3. Apricot is a highlight rather than small body text. Warning, blocked and ready states need icon/text labels as well as color. These are proposals, not contrast-certified tokens.

Typography direction: an editorial serif for short chapter headlines, a highly legible humanist sans for body/UI, and tabular numerals for times and counts. Candidate pairing: Newsreader with Public Sans, subject to licensed asset/version verification. Keep the dense workbench primarily sans-serif. Avoid enormous generic slogans and overly small screenshot labels.

Before high-fidelity work, create and approve an original mark built around a slot and matching interval, wordmark, favicon, monochrome/reverse variants, clear-space rules, palette, type scale and diagram/icon kit. Do not use Dawn's arc as the logo, a medical cross implying endorsement, or a default calendar/checkmark mark. No brand assets are being generated in this assignment.

### Audience and jobs

| Role | Main question | Path |
|---|---|---|
| Multi-site specialty-practice COO / ambulatory access director | Is there a measurable operational gap worth a governed pilot? | Story → method and evidence → pricing hypothesis → replay inquiry |
| Scheduler manager / daily operator | Does the queue expose the checks I actually make, and what happens when information is missing? | Synthetic story → opened record → exceptions → replay |
| Specialty practice administrator | Can one specialty/site be assessed without replacing our scheduling workflow? | Solutions → Clinic Desk/Clinic Review → data requirements → replay |
| Access department | Can review remain consistent across templates, owners and locations? | Platform concept → governance → evaluation → replay |
| Practice-management consultant | Can I sponsor a bounded review and compare it with the incumbent process? | Consultant solution → method → scoped inquiry |
| Oversight/security/data owner | What data, permissions, reviewers and stop conditions are required? | Governance → data requirements → pilot prerequisites |

### Exact module inventory

Names below adapt the supplied working names to WaitListFit. They remain proposed module names, not cleared trademarks or active plans. Descriptors preserve the five source offers and their order.

| Order and working name | Exact offer | Dedicated route | Stage |
|---|---|---|---|
| 1. WaitListFit Clinic Desk | Capacity and template visibility | `/products/clinic-desk` | Proposed module |
| 2. WaitListFit Clinic Review | cancellation-fill candidate queue with opt-in outreach drafts | `/products/clinic-review` | First pilot direction; read-only; scheduler approval; no automatic booking |
| 3. WaitListFit Clinic Proof | referral triage/routing for staff approval | `/products/clinic-proof` | Proposed administrative routing module; no automated clinical triage |
| 4. WaitListFit Clinic Signal | procedure/resource constraint simulator | `/products/clinic-signal` | Proposed scenario simulation module |
| 5. WaitListFit Clinic Report | access-equity and leakage analytics by clinic/location/patient segment | `/products/clinic-report` | Proposed exploratory analytics module |

The labels Desk, Review, Proof, Signal and Report must always appear with plain-language descriptors. “Proof” is a working product name, not a claim of validated evidence. Do not silently rename the five offers or sell them as five live tiers.

Vision: a human-accountable operating layer with traceable sources, exceptions and owners. Mission: validate a read-only cancellation-fill queue before expansion. The expansion hypothesis is one specialty → additional locations/resources → referral access workflows, contingent on useful evidence, authorized access and repeatable onboarding. Site, provider or workflow-volume pricing can be tested later; no TAM or million-dollar outcome is asserted.

## 4. Sitemap and navigation

### Global navigation

Desktop: **Products · How it works · Who it's for · Pilot & pricing · Resources · Company**, with **Request a replay** as the primary CTA. Products opens a compact menu listing all five modules in order, plus All proposed modules and Platform concept. How it works links to the story and contains See synthetic demo. Resources contains Evaluation method, Governance and Data requirements. Company contains About and Contact.

A small “Concept preview” label remains visible. Put **Workspace access** in utility navigation/footer; its destination is an honest unavailable-access page until authentication exists. Do not advertise a working sign-in or self-serve trial.

Mobile: the same destinations in an accessible drawer with accordion groups, focus management, Escape/close support and a persistent replay action. The five modules remain individually reachable. No horizontal menu is the only way to discover the offer.

Footer: five module links, product overview, platform concept, problem, solutions, method, governance, data requirements, pricing, demo, about, contact, privacy, terms, accessibility and workspace access. Include LinkedIn and Crunchbase only as verified links when supplied; until then omit the active links rather than use `#` or another company's profile. No fabricated address, team, certification or social proof.

### Public route inventory

Every route below is planned, not built. Shared layouts are acceptable; repeated copy and thin placeholder pages are not.

| Route | Purpose and required section order | Conversion |
|---|---|---|
| `/` | Complete validation narrative in section 5 | Request a one-week replay |
| `/problem` | Cancellation event → constraints → incumbent staff/EHR process → leakage and labor questions → what to measure | Explore replay method |
| `/how-it-works` | Inputs → constraint map → candidate reasoning → exceptions → scheduler review → retrospective comparison | View synthetic demo / replay inquiry |
| `/products` | Stage explanation → five modules in exact order → first-pilot boundary → shared responsibilities | Explore specific module |
| `/products/clinic-desk` | Template/visibility story and module specification in section 6 | Discuss visibility needs |
| `/products/clinic-review` | Cancellation queue, consented draft, evidence and review story | Request a replay with Review selected |
| `/products/clinic-proof` | Administrative referral routing and staff ownership | Discuss routing needs |
| `/products/clinic-signal` | Resource scenario comparison and assumption controls | Discuss simulator needs |
| `/products/clinic-report` | Access/leakage definitions, denominators and missingness | Discuss analytics needs |
| `/platform` | Proposed shared objects → provenance → constraints → reviewer queue → versioned audit trail → permission boundaries | Read data requirements |
| `/solutions` | Distinct journeys for specialty practices, access departments and consultants | Choose relevant journey |
| `/solutions/specialty-practices` | One specialty/site → template owner → scheduler process → replay deliverables | Request a specialty replay |
| `/solutions/access-departments` | Multi-site ownership → resource consistency → review/measurement → permission path | Scope an access review |
| `/solutions/practice-consultants` | Sponsor role → baseline audit → client authorization → handoff and independent comparison | Discuss a client-sponsored replay |
| `/evaluation` | What is and isn't demonstrated → retrospective method → matched baseline → guardrails → 8/2/1 gate → stop rule | Discuss evaluation |
| `/pilot` | One-week offer → participants → inputs → daily plan → output → rights and entry requirements → inquiry link | Request a scoped pilot |
| `/pricing` | Hypothetical price → what is being tested → site/provider budgeting → scope limitations → FAQs | Discuss scope and price |
| `/demo` | Synthetic introduction → 9-case queue → three spotlight cases → evidence/reviewer/report views | Request a walkthrough / replay |
| `/request-replay` | Qualification form → consent/privacy → what happens next | Submit inquiry only after a backend is approved |
| `/request-demo` | Guided synthetic walkthrough option using the same form component; request type and product interest preselected | Request walkthrough |
| `/governance` | Concept boundaries → human owners → abstention → fairness → audit/permission responsibilities → unanswered questions | Discuss oversight |
| `/data-requirements` | Artifact checklist → required history → field dictionary → freshness → missing data → EHR/permission discovery | Discuss data feasibility; no upload |
| `/resources` | Curated research links, replay explainer and scheduling-permissions explainer | Read an explainer |
| `/resources/cancellation-replay` | Method, example review packet, caveats and evaluation links | Request replay |
| `/resources/scheduling-data-and-permissions` | Appointment/Schedule/Slot concepts → read versus write → vendor/customer permissions → discovery checklist | Discuss data access |
| `/about` | Mission → concept stage → why this operational question → validation approach → contact | Talk with the project team |
| `/contact` | Business inquiry routing and minimum-data form; no patient-support claim | Send business inquiry when connected |
| `/sign-in` | Workspace access status → no active accounts → synthetic preview → business access inquiry | Open demo or request access |
| `/legal/privacy` | Draft business-contact privacy notice, purposes, processors, retention, rights and deletion route to be finalized before collection | Contact privacy owner |
| `/legal/terms` | Draft concept-preview use terms and limitations for owner/legal review | Contact |
| `/accessibility` | Motion controls, keyboard support, known limitations and contact path | Report an issue |
| Custom 404 | Branded recovery with Home, Products, Demo and Replay links | Resume journey |

No `/customers`, certification center, checkout, patient registration or fabricated integration directory is proposed. Results coverage is supplied by `/evaluation`, trust by `/governance`, and integration coverage by `/data-requirements`. Feature detail lives within each module page. This preserves the master guide's information coverage without implying business maturity.

## 5. Homepage scroll story and copy outline

The homepage is a complete validation page even when supporting pages are not visited. Its narrative is **see the gap → reveal the constraints → compare candidates → inspect uncertainty → preserve human control → evaluate the idea**. Direct anchors let a busy buyer skip to Modules, Method, Pricing or Replay.

| Chapter | Draft copy and information | Visual composition and transition | Next action |
|---|---|---|---|
| 1. Opening | Eyebrow: “Specialty capacity • Research-stage concept.” H1: “Make specialty appointment capacity visible before a scheduler fills the slot.” Body: “Explore a read-only way to review cancelled appointments against waitlist, template and resource constraints—with a scheduler responsible for every next step.” | Light paper atmosphere; large editorial headline beside a layered clinic-day map. A 10:30–11:00 interval is visible immediately. Full headline and CTAs never depend on animation. | “Request a one-week cancellation replay”; secondary “Follow a synthetic clinic day” |
| 2. The cancellation | “Tuesday. One cancellation. More than one constraint.” Explain that an open interval is only the beginning of the scheduler's check. | The same interval opens; its 30-minute span expands while the surrounding day stays visible. Warm apricot illumination enters the shared background. | Continue to constraint map |
| 3. What the calendar doesn't show | “See what has to line up.” Clinician, room, visit length, equipment, eligibility, payer/authorization, interpreter and transport are individually labeled. Source links and dated evidence are introduced. | The timeline separates into aligned resource lanes. Thin connectors reveal dependencies without crossing labels. No generic calendar grid as hero. | “Explore the constraints” opens an accessible detail view |
| 4. Three candidates | “Three candidates. Show the reason for each.” Candidate A fails room/equipment fit; B fails available interpreter coverage; C fits the recorded constraints. All are synthetic. | One bounded pinned sequence brings three rows into alignment. Reasons remain readable beside each candidate; nobody is ranked by supposed clinical worth. | “Inspect candidate rationale” → demo record |
| 5. A human decision | “The scheduler still decides.” Sources, constraint version, owner, reviewed time, consent state and an unsent draft are visible. No reservation or booking is implied. | Map settles into a review workbench. Scrolling ends at Awaiting scheduler review. Optional “Simulate review” explicitly changes local demo state. | “See the synthetic demo” |
| 6. When the answer is uncertain | “Missing evidence is a reason to pause.” Introduce clean handoff, ambiguous exception, blocked/abstained case. | Three case tabs; selected record opens an evidence pane. Dark pine inset signals deeper inspection while the shared line remains visible. | “Explore all three cases” |
| 7. The complete proposed offer | “Five proposed modules. One accountable workflow.” Show all five exact descriptors in order, with Clinic Review marked First pilot direction. | Five editorial rows with a distinct mini-scene each: lanes, queue, route, resource comparison, segmented report. They are individually linked, not an identical icon-card grid. | Each module page plus “View all proposed modules” |
| 8. Who would use it | “Start where the scheduling work happens.” Specialty practices, access departments and practice-management consultants; name COO/access director and scheduler manager. | The same review packet moves between role-labeled workspaces. Use role labels, not invented customer logos. | Persona pages |
| 9. How it fits today | “Start with the workflow you already have.” Explain existing EHR scheduling/waitlists, call-center teams, spreadsheets, self-service and adjacent vendors. Proposed read-only replay vs existing workflow comparison. | Two aligned process rails: fragmented checks and consolidated review packet. Caption: illustrative workflow comparison; no measured time saving. | “Compare the approach” → problem/evaluation |
| 10. Evidence and boundaries | “A useful question before a product promise.” Show research sources, known gaps, permission discovery and evaluation plan. Human approval, uncertainty, consent and fairness stay visible. | Source cards resolve into a compact review scorecard. No KPI counter pretending to show success. | “Read the evaluation method”; “Data requirements” |
| 11. One-week replay | “Start with one week of cancellations.” Explain agreed historical sample, staff comparison, findings, unknowns and a decision to proceed or stop. Clarify that one-week engagement timing begins after scope/data access is ready. | The day-line broadens into five workday markers; outputs attach to each, ending in a review gate. | “Request a scoped pilot” → replay form with pilot interest |
| 12. Commercial hypothesis | “Test the workflow. Then test the price.” “Hypothetical test price: $900 per specialty site per month + $2,000 setup.” Site/provider model to be tested; no active purchase and no separate replay price established. | Calm paper surface, one clear price block and scope notes. No three-tier pricing theater or animated revenue counter. | “Discuss scope and pricing” |
| 13. FAQ | Address product status, automatic booking, data access, EHR overlap, consent, price, uncertainty, equity, measurements and pilot entry. | Quiet accordion; full answers accessible by keyboard and normal scrolling. | Relevant deep links |
| 14. Closing invitation | “Could a one-week replay clarify your cancellation workflow?” Identify the relevant operations role and show what information is needed. | The original 30-minute interval returns as an open question connected to the review packet; it never turns into a fake booked appointment. | “Request a replay”; compact inquiry form or link |
| 15. Footer | Complete second navigation, concept disclosure, privacy/contact, verified social links when available | Shared background settles into paper; line ends in the brand mark | Direct access to every important destination |

Persistent demo caption wherever the scene appears: **“DEMO — SYNTHETIC DATA · CONCEPT PREVIEW · Not clinical guidance.”** Public body copy must also state that the product is not operating. Do not hide the status exclusively in a footer.

### FAQ answer commitments

1. Is it available? Research-stage concept; first step is a scoped replay discussion.
2. Does it book appointments? No. The first scope is read-only with scheduler approval and no automatic booking.
3. Does it send messages? No demo outreach. Drafts remain unsent, and permission is a separate recorded field.
4. Does it integrate with our EHR? Integration and export feasibility must be established for the specific system and organization.
5. Why not use our existing waitlist? Existing tools may be sufficient; the replay tests a concrete gap against current practice.
6. What data do you need? Historical appointments, cancellations, waitlist and required resource/rule history, subject to separately agreed access. Never upload records through the public site.
7. What if evidence is missing? Mark unknown and request review or abstain; do not silently infer a fit.
8. Is the price an offer? No, the stated price is a test hypothesis.
9. How is fairness considered? Surface outreach eligibility, coverage and exclusions for review; do not penalize people for language or transport needs.
10. How do we measure value? Separate retrospective feasibility from actual pilot fills, alongside scheduler time and constraint violations.
11. What starts a pilot? The 8/2/1 readiness gate plus signed data-access/security and human-oversight approvals.
12. Is it clinical advice? No diagnosis, treatment or automated clinical determination is included.

## 6. Dedicated module content specifications

Every page retains the concept label, buyer/operator, input artifacts, concrete workflow, source pane, exceptions, human owner, proposed output, current limitations, related modules, FAQ and product-aware replay CTA. Pricing references point to the single hypothetical model; no module price is invented.

| Module | Page narrative and visual | Proposed input → output | Mandatory boundary and question |
|---|---|---|---|
| Clinic Desk | “An opening needs context.” Begin with template lanes; reveal a room hold, resource version and missing constraint. Show a filtered clinic/day view and an evidence drawer. | Appointment/cancellation history, clinician templates, room/equipment schedules and rule versions → source-linked capacity view | Visibility is based on supplied records, not live availability. Can historical holds and template overrides be reconstructed? |
| Clinic Review | “Review the fit before the next step.” Cancellation → candidate comparison → consent/source check → staff review → unsent outreach draft. Include all three spotlight cases. | Slot, waitlist/referral, constraints, permissions → candidate queue with explained inclusion/exclusion and reviewer state | First pilot direction. No booking, outreach or write-back. Does this reduce rather than add review work compared with the incumbent? |
| Clinic Proof | “Make referral routing reviewable.” Intake artifact → administratively incomplete/ambiguous field → proposed destination → named staff reviewer → unresolved or approved-for-handoff state. | Referral metadata and staff-authored routing rules → reviewable route suggestion and evidence trail | “Triage” means administrative workflow here, never diagnosis or clinical prioritization. Who owns referral appropriateness and escalation? |
| Clinic Signal | “Test the constraint before changing the template.” Compare current vs hypothetical room/equipment/time allocation; show both feasible and blocked scenarios. | Versioned resource/visit-duration/template assumptions → illustrative scenario comparison | Proposed simulator, not live optimization or an instruction to alter care. Are staffing/setup/cleanup and resource details actually available? |
| Clinic Report | “Understand who is left waiting—and what is unknown.” Separate denominators, missingness and reasons; compare clinic/location/segment with small-sample caution. | Authorized review events and documented referral disposition → exploratory access/leakage report | Unresolved referral does not establish leakage; no disparity, equity improvement or retention claim without evidence. Who approves segment use and suppression rules? |

Platform page: diagram the six required objects—appointment slot, referral, waitlist candidate, opt-in outreach permission, scheduling owner and constraint version—around a shared evidence/review record. Proposed artifacts move into a read-only review boundary; the external scheduling system stays outside it. Permission state is a visible property, not an unlabeled integration arrow.

Solutions pages must have different emphasis. Specialty practices focus on local template ownership; access departments on cross-location accountability; consultants on authorized client sponsorship and a comparable baseline. Referral coordinators are a potential co-selling/channel participant, not a separate product or an existing partner.

## 7. Motion system across the entire site

### Continuous scene rules

One coherent atmosphere connects each page's chapters. On the homepage: paper → warm apricot wash → pale sage during candidate checks → deep pine during exceptions → paper/sage during the five-module sequence → warm paper for replay/pricing. Gradients blend at boundaries; no hard alternation of unrelated full-screen colors. Use stable opaque surfaces behind dense evidence and small type.

The persistent line changes meaning deliberately: **time interval → resource lanes → candidate connections → evidence trail → replay week**. It carries context without forcing every section to reuse the same diagram. Background movement stays shallow; foreground text moves little. High motion comes from coordinated state changes, not constant decorative activity.

Native scrolling remains intact. Desktop pinning is limited to the constraint/candidate sequence, provisionally about 200–250vh of scroll for three readable steps plus entry/exit; refine with real content. Short screens, widths below roughly 900px and reduced-motion mode use stacked steps. No full-page snap or forced scroll speed.

### Homepage motion score

| Scene | Trigger and visible change | Reverse and state behavior | Mobile / reduced motion |
|---|---|---|---|
| Hero | Initial render: headline/CTA already visible; line draws once and gently exposes the cancellation interval | Entrance stays complete; returning to top does not restart a blocking intro | Complete map still; no delayed text |
| Cancellation | Scroll progress opens a bounded 30-minute gap and carries its ID into the next scene | Scrub reverses geometry predictably | Stacked before/after interval with labels |
| Constraint map | Successive progress ranges reveal clinician, room, duration, equipment, authorization, interpreter and transport lanes | Lanes retract in reverse; text remains in DOM and accessible | Complete lanes as a compact vertical checklist |
| Candidate comparison | Three progress steps align A, B and C; incompatible links end beside explicit reasons | Visual progression reverses; synthetic data and reason labels do not mutate | Three stacked candidate cards with all reasons visible |
| Reviewer handoff | End of scroll resolves into Awaiting review. A deliberate “Simulate review” control changes demo state | Up-scroll does not undo a user decision. A separate Reset demo control restores fixture | Same explicit controls; no animation needed |
| Exceptions | Click/tap selects clean, ambiguous or blocked case; source pane crossfades and opens | Selection persists within route; back navigation is predictable | Stacked disclosure with preserved focus |
| Five modules | Each row entering the viewport highlights its relevant line branch and mini-workflow | Entrance stays visible once read; no endless replay | All five shown in order, no forced horizontal gallery |
| Roles | User selects role; review packet highlights ownership and next action | Selected role persists; no automatic carousel | Three readable role sections or tabs |
| Alternatives | Entering section aligns old/new process steps | One reveal, then stable comparison | Static comparison with clear headings |
| Evidence | Source marker expands into reference and timestamp on click/focus | Closes without losing scroll position | Inline evidence disclosure |
| Replay week | Scroll reveals five sequential workday markers and final review gate | Reverse changes highlight only, not content or form state | Numbered five-step list |
| Pricing/FAQ/form | Small entrance fade; button/focus/accordion state transitions only | No replay of values; form input always persists through motion | Normal native form and accordion behavior |
| Footer | Line ends; background settles | No looping animation | Static |

### Motion on supporting pages

| Page family | Story and motion | Still-state equivalent |
|---|---|---|
| Problem / how it works | Trace a fragmented check into a consolidated evidence packet; deep links jump to steps | Numbered workflow with full labels |
| Products overview | Five distinct diagrams connect to a common review spine | Complete portfolio list and diagram |
| Desk | Resource lanes align; a hold reveals its source and date | Lane table plus source drawer |
| Review | Candidate comparison opens into evidence and reviewer state | Queue/detail layout with direct controls |
| Proof | Proposed route branches into staff approval or unresolved exception | Administrative routing diagram |
| Signal | User adjusts a synthetic assumption; scenario changes explicitly | Side-by-side scenario tables; no implicit recommendation |
| Report | Filter updates illustrative counts/denominators together | Accessible table with sample label |
| Platform | Objects connect to review record, ending at permission boundary | Labeled object/flow diagram |
| Persona pages | Record passes between relevant roles; ownership changes are annotated | Role responsibility sequence |
| Evaluation / pilot | Timeline becomes baseline comparison and gate checklist | Methodology, definitions and numbered steps |
| Pricing / governance / data requirements | Restrained reveals; optional explanatory diagrams | Fully readable content and tables |
| Resources / about | Editorial pacing and short contextual diagrams | Standard reading flow |
| Demo | Direct user actions control record, evidence, review and reset | Fully usable interface without motion |
| Contact / replay / sign-in / legal | Only functional feedback and menu/accordion transitions | Native inputs and plain notices |

### Interaction details and accessibility

Provisional timings: micro-interactions 160–220ms; panel changes 250–400ms; chapter reveals 500–800ms. Use gentle deceleration, no bouncing data labels. A type-on treatment may introduce a short synthetic review note once, but the final text must be immediately available via Skip and to assistive technology. Never type the H1, legal notice, evidence timestamp or required form label character by character.

Primary buttons use a short directional arrow motion and a measured surface change. Module rows highlight their related diagram rather than tilt. Evidence links show focus as clearly as hover. Status chips have icon, label and source, not color alone. Menu and overlay controls use predictable focus return.

Provide a visible Motion on/off control and honor `prefers-reduced-motion` from first render. Pause/stop/hide applies where automatically moving content meets WCAG 2.2.2 conditions; avoid long auto-running loops. Interaction-animation disablement is also covered by WCAG 2.3.3 (AAA); adopting it is a design choice, not a claim of site certification. [W3C pause guidance](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) · [Interaction motion](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) · [Reduced-motion technique](https://www.w3.org/WAI/WCAG22/Techniques/css/C39)

Plan keyboard/touch parity, 44px comfortable targets, visible focus, AA contrast checks, semantic headings, no color-only exclusions, and no flashing. Animation must not obscure copy or capture focus. Reserve media dimensions, stop offscreen work, and load noncritical assets later. Proposed implementation direction after authorization: structured HTML/SVG and coordinated scroll timelines; GSAP ScrollTrigger may fit, with Lenis optional only if native navigation/accessibility is preserved. No WebGL is necessary for this story.

## 8. Synthetic demo specification

### Common data and state contract

All records are invented. Use non-routable IDs such as WLF-DEMO-001 and synthetic file references. Show “Fictional scheduler role A,” never a real clinician/patient identity. Example date: Tuesday 13 October 2026; timezone fixed to America/New_York and displayed as ET for the fictional clinic. These are fixtures, not historical production records.

Core objects: appointment slot; referral; waitlist candidate; opt-in outreach permission; scheduling owner; constraint version. Supporting properties: source file/row, source effective time, export time, review time, clinic/location, template window, required resources, unknown fields, decision state and reason. Keep event time separate from record-ingestion time.

Permission model distinguishes **data access**, **review authority**, **outreach opt-in**, and **booking/write authority**. One does not imply another. No live permissions exist in the demo.

States: Pending review → Ready for review / Needs clarification / Blocked → Reviewed handoff or Rejected. “Reviewed handoff” completes a synthetic review task only. Uncertainty is expressed as a named missing fact, not a fabricated confidence percentage. An invalidating source/version change reopens review. All manual decisions are attributed, timestamped and reversible via a new audit event.

### Spotlight case A — clean handoff

Slot WLF-DEMO-001: Tuesday 13 October, 10:30–11:00 ET, Fictional Clinic North, clinician role D-01, Room R-02, permitted template type VISIT-30, equipment EQ-01 available. Cancellation timestamp 08:55. Evidence snapshot at 09:00; constraint version CV-03 effective 08:00. Candidate checks occur at 09:04.

| Candidate | Recorded constraints | Result and reason |
|---|---|---|
| CAND-A | 30 minutes; requires Room R-03 / equipment EQ-02; R-03 unavailable at 10:30 | Excluded from this slot because required room/equipment combination is unavailable. Do not say the person is ineligible for care. |
| CAND-B | 30 minutes; R-02/EQ-01 compatible; requires interpreter service INT-B, available only from 11:30 | Excluded from this 10:30 slot because required interpreter coverage is unavailable. Preserve a reviewable unmet-support reason. |
| CAND-C | 30 minutes; R-02/EQ-01 compatible; interpreter INT-C confirmed 10:30–11:00; transport arrival feasible; staff-entered authorization validity covers the time; outreach opt-in recorded | Eligible for scheduler review against the recorded constraints. This is not a clinical eligibility or booking decision. |

At 09:06 the fictional scheduler reviews C, inspects all eight constraint categories and source rows, then explicitly chooses “Simulate reviewed handoff.” A draft appears as UNSENT. The slot stays “Not booked in demo.” Audit event references the reviewer role and CV-03. A later Undo creates a reversal record rather than erasing history.

Suggested draft: “An earlier appointment time may be available. A scheduling team member would confirm details through an authorized channel.” No address, phone number or Send control exists. The wording is illustrative and never transmitted.

### Spotlight case B — ambiguous exception

Slot WLF-DEMO-002: 11:30–12:00, Room R-02. A candidate fits duration and room, but the interpreter roster version is missing and authorization status is not confirmed in the snapshot. Source pane explicitly says “Unknown—not cleared.” Owner: Fictional scheduler role B; review 09:08; next action 09:15, verify source with the authorized owner.

The system abstains from marking the candidate ready. Show Request clarification, Record unresolved and Reject suggestion as local demo choices; no external message. Missing support cannot become an automatic patient exclusion. Updating a fictional source version creates a new review event and does not bypass review.

### Spotlight case C — blocked or abstained

Slot WLF-DEMO-003: 13:00–13:30. Required equipment source is absent and template owner approval for an override is unknown. Candidate outreach opt-in is unrecorded. Owner: Fictional template-owner role; review 09:10; next review 09:20.

State: Blocked—required resource evidence missing. No ranked recommendation, outreach draft or handoff approval is available. Display the missing artifacts and a manual exception route. This demonstrates an honest failed recommendation/abstention without making a clinical determination.

### Nine-case review queue

Queue rows are cancellation review cases; the three candidate rows inside case 001 are not added to the queue count. The default snapshot is 09:12 ET before the visitor performs an action.

| ID | Slot | Snapshot state | Owner | Evidence / last event / next action |
|---|---|---|---|---|
| 001 | 10:30–11:00 | Ready for review | Scheduler A | CV-03; 09:04 checks; inspect C at 09:15 |
| 002 | 11:30–12:00 | Needs clarification | Scheduler B | Interpreter/authorization unknown; 09:08; clarify 09:15 |
| 003 | 13:00–13:30 | Blocked | Template owner | Equipment source absent; 09:10; source review 09:20 |
| 004 | 14:00–14:30 | Pending review | Scheduler A | CV-03; 09:02 intake; review 09:25 |
| 005 | 14:30–15:00 | Rejected | Scheduler B | Duration exceeds window; 09:03; no candidate handoff |
| 006 | 15:00–15:30 | Reviewed handoff | Scheduler A | CV-03; 09:05; unsent packet available, not booked |
| 007 | 15:30–16:00 | Pending review | Scheduler B | CV-03; 09:07; review 09:30 |
| 008 | 16:00–16:30 | Blocked | Template owner | Conflicting room hold; 09:09; reconcile 09:35 |
| 009 | 16:30–17:00 | Ready for review | Scheduler A | CV-03; 09:11; review 09:40 |

Default counts: 9 total; 2 Ready; 1 Needs clarification; 2 Blocked; 2 Pending; 1 Rejected; 1 Reviewed handoff. If case 001 is reviewed, Ready becomes 1 and Reviewed handoff becomes 2; total remains 9. Reports use these same fixture counts and clearly state “Illustrative sample, n=9; not performance results.” No arbitrary ROI, booked-slot or live-activity number is added.

### Demo interaction inventory

Views: queue, opened case, evidence drawer, candidate comparison, reviewer action, version history, illustrative report and synthetic export preview. Export is a view of fictional content; no external export or integration is implied. Filters: state, fictional site, owner; empty filters explain how to reset. States include loading skeleton, empty, missing evidence, conflict/stale version, action confirmation, reversible decision and reset. All frames retain DEMO and CONCEPT PREVIEW badges.

Exclude imported EHR/CRM/claims/government records, PHI, diagnoses, treatment, real contacts, live telemetry, outbound messages, payment, automatic determinations and external writes. This is an operational workbench, not a generic CRM or patient portal.

## 9. Screenshot storyboard and capture handoff

This assignment produces storyboard instructions only. Future captures must come from the implemented synthetic prototype, not an AI-generated UI bitmap and not the older concept image referenced in the brief.

| Frame | Desktop composition | Required visible proof | Mobile plan |
|---|---|---|---|
| 1. Clinic day | 16:9 at 1440×810: day/constraint lanes with 10:30 gap | Eight constraint categories, DEMO watermark, date, source time and CV-03 | 390px wide: stacked resource lanes; full labels; no miniature desktop scaling |
| 2. Candidate comparison | Same 1440px workbench with A/B/C and rationale | Two explicit exclusions, one reviewable candidate, sources and uncertainty labels | Stack candidate rows; preserve reason + evidence link on each |
| 3. Queue and opened record | Queue left, selected case center, source/evidence pane right | 9-row count, owner, timestamp, evidence row, visible review action | Queue list → full-width record → evidence drawer; breadcrumb/back control |
| 4. Ambiguous exception | Case 002 opened with missing fields emphasized | Unknown authorization/interpreter status, reviewer and dated next action, abstention | Source and missing fields shown before action buttons |
| 5. Blocked case | Case 003 and absent resource evidence | Blocked reason, source requirement, disabled handoff with explanation | Same information as desktop; no tooltip-only explanation |
| 6. Report and audit | n=9 state breakdown and case audit events | Illustrative watermark, consistent totals, decision/reversal timestamps, no ROI | Accessible summary table, then event list |

At 100% zoom, check labels, numbers, contrast and consistency. Parent captures/verifies actual 1440px desktop and separate 390px mobile images, retains evidence of viewport dimensions, and publishes only after approval. Alt text describes the actual decision and boundary, e.g. “Synthetic 30-minute cancellation with two candidates excluded by resource constraints and one awaiting scheduler review; no booking.”

## 10. Inquiry, pricing and access flows

### Replay inquiry

Use the same form system for replay, guided demo and module-interest requests; retain the entry context without making visitors repeat it. Two concise steps are acceptable if an accessible single-page alternative is available.

Required business fields: role, organization, work email, specialty, site count/range, site/region, scheduling system (include Unknown/Other), and one workflow-fit question: **“When a cancellation opens, what most often prevents your team from offering that slot?”** Use structured choices plus optional short text with “Do not include patient or clinical information.” Product interest can be optional/preselected: one of the five modules or Not sure. Do not request patient records, clinical details, attachments, phone number or sensitive examples.

Show consent for follow-up about this inquiry and link to the privacy notice. Record consent timestamp and notice version. Marketing consent, if ever added, is separate and unchecked. Explain next step as a scope/fit conversation; do not promise an unstaffed response SLA or guaranteed replay start.

Future connected form states: idle, field errors, submitting, confirmed receipt, server failure with preserved input, duplicate-safe retry, consent missing and rate-limited. Confirmation is shown only after actual receipt. For an unconnected preview, prevent transmission and state “Preview only—your inquiry has not been sent.” A fake success toast is unacceptable. No forms are built or submitted now.

### Pricing

Display exactly: **“Hypothetical test price: $900 per specialty site per month plus $2,000 setup.”** Supporting copy: “A research price hypothesis for a bounded pilot discussion. Scope, authorized data access, owner, review gate and commercial terms must be agreed. We are testing per-site versus provider-based budgeting.”

The brief supplies no separate price for the one-week replay and no module-level prices; do not invent them or call the replay free. No checkout, trial countdown, billing assurance, reimbursement claim, clinical-outcome claim or guaranteed ROI. Pricing page can show what must be scoped—site, workflow, participants, artifacts, review load and endpoint—without pretending an entitlement package is finalized.

### Workspace access and contact

`/sign-in` is a polished “Workspace access is not available in this concept preview” page, with Open synthetic demo, Request access discussion and Help/contact. Do not collect credentials or expose inactive SSO buttons. Authentication, password recovery and onboarding are future implementation decisions only if a real workspace is authorized.

Contact routes business enquiries to the correct request type. A future privacy request path must work before personal business-contact data is collected. No unverified support email is published merely because the domain name is known.

## 11. Data, evidence and governance architecture

### Replay input contract

Agree with each sponsor on the historical cohort, specialty, locations, timezone, collection window, authorized source, resource owners, retention/deletion plan, and named reviewers. Data comes through a separately authorized channel, never the marketing form. The public demo remains synthetic regardless of later pilot permissions.

Minimum feasibility dictionary:

- Appointment/slot ID, clinic/location, clinician/template owner, start/end, duration, visit-type/template rules and status history.
- Cancellation time, notification time if recorded, original window and reason category only where appropriate and authorized.
- Waitlist/referral record reference, eligibility/routing status recorded by staff, requested windows and entry time.
- Room, equipment, clinician availability, interpreter coverage, transport constraints, authorization validity and relevant historical versions.
- Opt-in/outreach permission, channel preference and its effective time; absent permission is Unknown.
- Source identifier/row, export timestamp, event-effective timestamp, constraint version and assigned reviewer.

These fields are a discovery checklist, not a claim that every EHR export provides them. Unknown required values must be visible and may make replay infeasible. Avoid hindsight: candidate eligibility and resource state must be reconstructed from information available at cancellation time, not later corrections.

Read-only export permission, live read API scope and write-back are distinct. Inspect actual EHR/version, customer tenant approval, vendor process, enabled operations, freshness and write restrictions before any future booking claim. No ONC entry, FHIR resource definition or vendor logo establishes authorization.

### Human accountability and fairness

Scheduler manager owns candidate review; template owner owns template exceptions; referral owner owns routing decisions; data owner authorizes access; oversight owner reviews permitted use and safeguards; sponsor/budget owner owns pilot scope and gate. These are proposed responsibilities to confirm in interviews.

Language and transport are support requirements to surface and resolve, not proxies for a person's value. Do not rank by revenue, protected attributes or assumed responsiveness. If several candidates meet constraints, apply sponsor-approved ordering policy and show the rule and version. Display who was not contacted and why; do not claim access-equity improvement from this preview. Small segments and missing data require approved reporting rules before any real analysis.

Governance content describes intended controls and unanswered implementation questions. It must not claim HIPAA compliance, SOC 2, encryption/deployment guarantees or security certifications without established evidence. No clinical guidance or healthcare compliance assertion is inferred from the demo.

## 12. One-week replay and validation protocol

### Offer and workflow

The first validation targets are specialty practice administrators, health-system access departments and practice-management consultants. Seek two specialty groups willing to authorize historical appointment, cancellation and waitlist exports with the necessary resource context. Compare manually reconstructed opportunities against scheduler choices.

“One-week cancellation replay” is proposed as a five-workday engagement after scope, access and usable artifacts are ready, examining an agreed historical sample. Confirm whether the sponsor instead expects a one-week data cohort; do not silently promise both a fixed turnaround and adequate statistical evidence.

| Stage | Work and participants | Output |
|---|---|---|
| Before day 1 | Sponsor, data/oversight owner and scheduler agree scope, permission, baseline, retention, endpoint and guardrails | Signed scope and access path; feasibility checklist; no public upload |
| Day 1 | Interview buyer/operator separately; inspect incumbent configuration and exported field coverage | Baseline workflow, resource gaps, cohort definition; stop early if essential context is absent |
| Day 2 | Reconstruct cancellation events and constraints as known at the time | Source-linked replay cases and explicit unknowns |
| Day 3 | Scheduler independently reviews candidate sets and exclusions | Agreement/disagreement reasons, review minutes, constraint issues; no contact or booking |
| Day 4 | Compare against historical scheduler choices and matched baseline context | Feasible opportunities, excluded/unknown cases, process findings and limitations |
| Day 5 | Buyer, scheduler and oversight owner review findings | Decision memo; paid-pilot letter only if justified and contingent on rights/guardrails |

Replay outputs: constraint map, case-by-case rationale, source/exception log, scheduler comparison, measured review burden, missing-data inventory and a proceed/reposition/stop recommendation. No actual patient contact, automatic booking or clinical outcome is part of replay.

### Metric definitions

Preserve the brief's primary endpoint: **feasible cancellation slots filled within the original template window compared with matched baseline; guardrails: scheduler review minutes and constraint violations.**

Operationalize before a real pilot:

| Measure | Definition and interpretation |
|---|---|
| Feasible-slot denominator | Unique cancellation slots meeting pre-agreed feasibility rules using time-appropriate evidence; publish total reviewed, feasible, infeasible and unknown separately |
| Actual pilot fill rate | Feasible slots actually filled within their original template window ÷ feasible cancellation slots; reconcile confirmed scheduling records; one slot counts once |
| Matched baseline | Comparable specialty, site, weekday/time, visit duration/type, notice period and resource context; document date window, differences, other process changes and uncertainty |
| Replay feasibility | Number/proportion of reconstructed slots with at least one staff-confirmed feasible candidate; this is an opportunity estimate, not incremental slots filled |
| Scheduler review burden | Logged minutes per reviewed case and total review time including exceptions; compare to agreed baseline method |
| Constraint violations | Count/rate of reviewed suggestions inconsistent with approved constraints; state denominator and severity; resolve before progression |
| Fairness and leakage context | Review eligibility/exclusion/unknown reasons by approved clinic/location/segment; distinguish unclosed referral from verified leakage |

A retrospective replay cannot prove the candidate would have accepted or attended, or that the slot would have been filled because of WaitListFit. Avoid conversion of simulated opportunities into revenue or ROI. Preserve decision-maker role, baseline period, denominators and uncertainty in every evaluation report. Ad clicks are not validation.

### Readiness gate and kill rule

Proceed to a limited governed pilot only after **8 specialty access/COO interviews, 2 export/replay commitments, and 1 paid pilot letter with a named scheduler owner**, plus signed data-access/security and human-oversight approvals. The letter must specify authorized export/interface access, scope, owner, review gate, measurable slot-fill or scheduler-time endpoint and stop conditions. These are targets, not completed milestones.

Preserve the supplied stop rule: **Stop if exports omit required resources or scheduling write-back is unavailable and the read-only queue creates more work than it saves.** Treat missing required data as independently blocking valid replay. Lack of write-back alone does not invalidate a deliberately read-only study; lack of write-back combined with added work defeats the proposed workflow value. Do not reinterpret this as permission to add automatic booking.

## 13. Interviews and acquisition experiments

### Separate interview guides

| Participant | Prompts |
|---|---|
| Buyer / COO / access director | Which cancellations matter operationally, and why? What is the actual baseline and its source? Which EHR features are enabled today? Where do referrals leave the workflow? Who owns budget and template changes? What evidence would justify a scoped pilot? How do the hypothetical site price and provider-based budgeting compare? What would make you stop? |
| Scheduler manager / operator | Walk through a recent cancellation using a non-identifying process description. Which checks happen in what order? Where are room, duration, interpreter, transport and authorization constraints recorded? Which information is stale or missing? Why would you reject each demo suggestion? What extra work would the queue add? Who can approve exceptions? How are permission and outreach order recorded? |
| Safety / compliance / security / data owner | Who can authorize exports and permitted use? Which fields and historical versions are available? What channel, retention, deletion and access controls are required? Who approves candidate ordering and segment analysis? What triggers abstention/escalation? What must be signed before replay or a live pilot? What evidence would block the project? |

Record role, institution type, sponsor, baseline source, incumbent, objections, reason for response and next action. Do not convert an interviewee into a testimonial or customer without permission.

### Channels

Start with specialty-group administrators, access departments and practice-management consultants. Explore EHR marketplace/integration partners only after permissions and fit are understood. Referral coordinators may co-sponsor discovery where delays are visible; do not present them as existing partnerships. LinkedIn content should address the named operational buyer and adjacent scheduler operator, not broad patient targeting.

Suggested organic teardown: describe one cancellation, explain why a calendar opening does not settle resource fit, link to the official HL7 Schedule explanation, then invite a scoped operations review. Use no clinical efficacy or compliance claim. This is draft copy only; nothing is posted.

### Ad A and B

**A — workflow exception angle**

Headline: “A cancellation is only the first check.”

Body: “For specialty-practice COOs and access leaders: explore a one-week cancellation replay that examines template, room and support constraints with your scheduling team. See a synthetic concept demo, then discuss a scoped review.”

CTA: “Request a cancellation replay.”

**B — baseline and manual audit angle**

Headline: “Replay the week before changing the workflow.”

Body: “For specialty-practice COOs and access leaders: compare historical cancellation opportunities with your schedulers' decisions. Start with a bounded, human-reviewed process audit. Concept preview; no live scheduling or guaranteed savings.”

CTA: “Discuss a scoped replay.”

Both landing variants retain the same five offers, buyer geography, consent, inquiry fields, hypothetical price label and core boundaries. The only primary experimental difference is exception-first versus baseline-audit framing. Set a shared written spend cap and test window before launching; no budget is invented here. If price appears in an ad, label it hypothetical beside the figure. No individualized patient attributes, patient-derived lookalikes, diagnosis/treatment claims, reimbursement/billability assurances or compliance claims. Pause ads if misleading interpretation is reported.

Measure impressions, qualified visits, role-confirmed requests and form drop-offs; interview qualification determines lead quality. Small samples remain directional, and clicks or submitted emails do not meet the pilot gate.

## 14. Future analytics and tracking plan

No analytics is deployed now. Before collection, finalize the real privacy owner, processor list, notice, retention period, consent behavior and working deletion-request route.

Proposed events: story_started, story_chapter_viewed, module_opened, demo_case_opened, evidence_opened, replay_cta_clicked, inquiry_started, inquiry_validation_error, inquiry_received, role_confirmed, interview_completed, replay_committed, pilot_letter_signed. Keep submission success separate from qualification; the last four statuses require verified follow-up, not client-side auto-labeling.

Minimal attribution: source/UTM, campaign variant, CTA, page and module interest. Inquiry record: business fields, consent timestamp, notice version, qualified-lead status and deletion request status. Avoid analytics collection of free-text answers, patient information, email addresses in event payloads, sensitive session replay or unnecessary fingerprinting. Review any future replay tool's masking and consent rather than assuming it is appropriate.

Parent-managed tracking schema, preserved for later Notion work only:

`concept_number=22; working_title=Clinic Capacity Agent; buyer_role; operator_role; sponsor; interview_date; incumbent; baseline_source; data_rights_status; safety/compliance_owner; offer_of_interest; hypothetical_test_price_response; demo_objection; retrospective_cohort_status; pilot_budget_owner; pilot_commitment; primary_metric; stop_rule; next_action; evidence_url; screenshot_verified_by_parent`

Store the full primary metric and exact stop-rule text from section 12. Add `brand_name=WaitListFit` as a proposed separate field without overwriting the underlying concept title. No Notion database or Page is changed.

## 15. Parent handoff and unresolved decisions

Parent-facing order: thesis/caveats → buyer/problem/incumbents → exact five offers → read-only demo → hypothetical pricing → storyboard → synthetic rules → validation and traffic plan → metric/prerequisites/stop rule → research sources. This document supplies that content in an expanded IA order and preserves the original separately.

Parent owns name/domain/trademark checks, original healthcare.md citation reconciliation, verification of any prior screenshot, capture/verification of final prototype images and Notion publication. A future builder owns implementation only after separate authorization and the applicable validation boundary. No production product is authorized by this plan.

Resolve before design or implementation dependencies require them:

- Domain ownership and brand clearance; legal entity, verified contact path and social URLs.
- Whether the first specialty remains dermatology beyond the synthetic example.
- Exact meaning and commercial scope of the one-week replay; historical cohort and usable export fields.
- Actual EHR, deployment/tenant permission path, template owner and consent model.
- Accepted module working names and final visual assets/type licenses.
- Sponsor-approved candidate ordering, support-need handling and segment/reporting policies.
- Baseline window, acceptable review burden/violation thresholds and signed gate owners.
- Real form delivery, privacy terms, retention/deletion owner and eventual workspace access model.

These do not block the present IA. They prevent future copy or implementation from inventing facts.

## 16. Acceptance and future quality checklist

### Planning acceptance

The five source offers are retained in order, shown on the homepage, listed in navigation, assigned individual pages and included in inquiry context. The central dermatology example, three review cases, nine-case fixture, source/timestamp/owner model, screenshot storyboard, pricing hypothesis, ad angles, interviews, metrics, gate and kill rule are specified. The original brief and a section-by-section coverage map accompany this plan.

No patient data, diagnosis, treatment, live integration, outbound contact, external writes, security certification, customer, revenue, market size or measured benefit is asserted. Research describes official/vendor material with appropriate limits. Missing original research/screenshot assets remain explicit dependencies.

### Future implementation QA

- Branding: original logo and favicon, consistent typography/colors, no Lovable/builder marks or default assets.
- Content: all planned pages complete; no dead CTAs; all five products discoverable; stage labels and hypothetical pricing visible.
- Data: fixture IDs, chronology, counts, source references and report denominators agree; user review updates counts and reversal history correctly.
- Controls: no hidden booking/send action; no PHI collection; no false integration/telemetry; unknown and blocked cases work.
- Responsive: desktop 1440px, tablet, 390px mobile, narrow and short screens; long labels and tables remain usable.
- Motion: down/up scroll, rapid scroll, anchors, route changes/reloads, focus and reduced motion; no trapped pinning, horizontal overflow or unreadable mid-transition text.
- Usability: touch/keyboard parity, accessible menus, feedback, forms, loading/empty/error states, readable evidence and meaningful alt text.
- Truthfulness: honest unconnected form/auth behavior; actual screenshots only after implementation; no illustrative chart labeled as measured results.
- Delivery: production build and browser QA, metadata/social preview, legal/contact links, assets and no secrets. GitHub, Vercel, domain connection and deployed review are later authorized phases, not completed tasks here.

## 17. Research source register

Official/vendor sources used for the specific findings above, accessed/researched 16 October 2026. They support category context and design decisions, not WaitListFit outcomes.

1. [Dawn homepage](https://joindawn.com/) — direct visual and structure inspection.
2. [Dawn How It Works](https://joindawn.com/how-it-works) — temporal navigation and day-in-use narrative.
3. [Qventus homepage](https://www.qventus.com/) — live solution/care-area navigation.
4. [Qventus Surgical Growth](https://www.qventus.com/solutions/operating-room-utilization/) — adjacent OR capacity positioning.
5. [Qventus Surgical Services](https://www.qventus.com/solutions/surgical-services/) — surgical workflow context.
6. [Kyruus homepage](https://kyruushealth.com/) — live audience/product structure.
7. [Kyruus Schedule](https://kyruushealth.com/solutions/schedule-for-health-systems/) — self-scheduling, rules and openings.
8. [Epic Appointment Scheduling](https://www.epic.com/software/appointment-scheduling/) — native scheduling and Fast Pass alternative.
9. [HL7 FHIR R4 Schedule](https://hl7.org/fhir/R4/schedule.html) — availability/resources and booking caveats.
10. [HL7 FHIR R4 Appointment](https://hl7.org/fhir/R4/appointment.html) — scheduling event and workflow model.
11. [HL7 Slot](https://www.hl7.org/fhir/slot.html) — time slots on schedules.
12. [ONC/ASTP Appointment](https://isp.healthit.gov/uscdi-data/appointment) and [Schedule](https://isp.healthit.gov/uscdi-data/schedule) — interoperability data concepts; submission commentary must not be mistaken for universal API obligations.
13. [Oracle Appointment create](https://docs.oracle.com/en/industries/health/millennium-platform-apis/mfrap/op-appointment-post.html) and [Authorization](https://docs.oracle.com/en/industries/health/millennium-platform-apis/fhir-authorization-framework/) — API operation and separate permission requirements.
14. [Linear features](https://linear.app/features) and [pricing](https://linear.app/pricing) — capability/detail architecture.
15. [Stripe Payments](https://stripe.com/payments) and [documentation](https://docs.stripe.com/payments) — progressive disclosure into technical detail.
16. [W3C Pause Stop Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) — conditional control requirements for moving content.
17. [W3C Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) and [C39](https://www.w3.org/WAI/WCAG22/Techniques/css/C39) — disableable interaction motion and reduced-motion technique.

The screen recording and the supplied master guide are user-provided references, not public proof of product capability. No third-party screenshots, UI, logos or prose are proposed for reuse in WaitListFit assets.
