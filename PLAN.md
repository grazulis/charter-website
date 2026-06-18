# Implementation Plan

Current open work for the charter site. The previous round (logos, mobile menu, principle expand/collapse, footer licence) has shipped. This plan covers the next set of changes.

---

## A. Add the NHS to the signatories band

**Approach.** Add a fourth `<li>` to `.signatory-logos` in `index.html` containing the official **NHS Reversed Out** mark (white on coloured background). The existing flexbox row already wraps responsively, so no layout rework is needed.

**Asset.** Use the official NHS Reversed Out logo (white version), sourced from the NHS Identity site (`https://www.england.nhs.uk/nhsidentity/identity-guidelines/`). Save into `imgs/` as `NHS-Logo-white.png` (or `.svg` if available). Do **not** recolour the standard `#005EB8` NHS blue logo — the Reversed Out variant is the only legitimate way to render the mark white-on-blue under the NHS identity rules.

**Sizing.** The NHS mark is roughly square (logo block + "NHS" wordmark) while the other three signatory logos are wide rectangles. Constraining by height alone (`max-height: 64px`) makes the NHS visually smaller than its neighbours. Two options:

- Tag the NHS `<li>` with a modifier class and clamp it by *width* (~100–120px) for visual weight parity. **Recommended.**
- Bump its `max-height` to ~80px. Simpler but the wordmark dominates.

**Copy alignment.** The Get-Involved prose already names the NHS as one of the three original signatories ("The NHS, the University of Liverpool and the LCRCA's Office for Public Service Innovation…"). Adding the NHS to the visual strip brings the logos in line with the prose. CHIL stays on the strip as the hosting organisation.

**Complexity.** Tiny. One image asset + ~5 lines HTML/CSS.

---

## B. Bring Assembly materials into the charter site

The CDC website's Public Participation › Residents Assembly page hosts three things the charter site does not yet cover well:

1. **Background on the Assembly** — what it was, who took part, outcomes
2. **Materials for running an Assembly** — methodology, facilitator pack, for other regions
3. **Implementation guide** — practitioner-facing, currently linked inline

**Constraint that drives the design.** `civicdatacooperative.com` is being deprecated and shut down (see CLAUDE.md). External deep-links into it will eventually rot. So "just link out" is **not** the lightweight option it would normally be — anything we link to over there is a future broken link unless we mirror the content here first.

**Implication.** A Resources section that simply links out to CDC is short-term thinking. The real work is to **migrate the Assembly background, the run-an-Assembly pack, and the implementation guide into this repo** (as in-site pages or downloadable assets in `content/`) and have the new section link to those local copies.

**Status.** Deferred for now per current scope. Re-open once we know:
- which CDC pages/assets need to migrate (full inventory)
- whether the implementation guide PDF can be hosted here
- timeline of the CDC shutdown vs. when we need this live
- how much editorial work each piece needs to fit the magazine-style tone of this site

When picked back up, the work order will be: **inventory → migrate assets → add Resources section linking to local copies** (not the reverse).

---

## Order to build

**A now.** It is unblocked the moment the NHS Reversed Out asset is in `imgs/`.

**B parked**, pending the CDC-shutdown migration scope.

## Open decisions / asks

- **NHS logo asset.** Confirm we can use the official NHS Reversed Out mark and drop the file into `imgs/`. Without that file, A cannot be implemented.
- **B re-opening trigger.** What signals readiness to start the migration work — e.g., a known shutdown date, or a content inventory from the CDC site owner?
