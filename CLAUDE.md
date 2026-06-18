# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project Overview

<!-- One-paragraph description of what this project is and who it's for. -->

Create a website for the Liverpool City Region Data and AI Charter. The website should be modern, responsive and present content in a story style similar to https://emergencemagazine.org/engage/ or https://editors.maglr.com/raging-wildfire-rising. Images should be large and the design should be bright, engaging and friendly. The file content/CDC-Brand Guideines-2021 v1 (final).pdf contains information about colours and brand guidelines. content/content.md contains the suggested text. https://civicdatacooperative.com is the original CDC website and can be checked for consistency of design and modernised where needed (for example, the hamburger reflects the design of the CDC logo).

**Note: civicdatacooperative.com is being deprecated and shut down.** Content currently hosted there — including the Residents Assembly background, the "how to run an Assembly" materials, the implementation guide and supporting documents — may need to be migrated into this site over time. When adding links that point at the CDC site, treat those destinations as candidates for in-site replication rather than long-lived external pages.

## Repository Structure

<!-- High-level map of the directories that matter. -->

- `docs/` — the deployed website (served by GitHub Pages)
  - `docs/index.html` — single-page magazine-style site
  - `docs/styles.css` — CDC-brand styling (Quicksand stand-in for Mont, brand palette as CSS custom properties)
  - `docs/script.js` — header scroll state + light hero/image-band parallax
  - `docs/imgs/` — site assets: CDC logos, Assembly photography, signatory marks, favicon
- `content/` — source content not served from the site (`content.md`, `CDC-Brand Guidelines-2021 v1 (final).pdf`)
- `CLAUDE.md` — this file
- `PLAN.md` — current open work / implementation plan

## Tech Stack

<!-- Languages, frameworks, build tools, hosting. -->

Plain static site: HTML + CSS + a small vanilla JS file. No build step.
- Typography: Quicksand (Google Fonts) — the brand-approved substitute for Mont.
- Brand palette tokens live at the top of `styles.css` as CSS custom properties.

## Development

### Setup

No dependencies. Just clone the repo.

### Run locally

Serve from the `docs/` directory (so paths match the deployed site):

```sh
python3 -m http.server 8000 --directory docs
# then open http://127.0.0.1:8000/
```

Any static server works (`npx serve docs`, `caddy file-server -root docs`, etc.).

### Build

No build step. Deploy the files as-is.

### Test

No automated tests. Verify visually in a browser; check the hero, principles cards, quote bands, and footer at desktop and mobile widths.

## Deployment

<!-- Where the site is hosted and how it's deployed. -->
Deployed via GitHub Pages from the `docs/` folder on the `main` branch of `github.com/grazulis/charter-website`. Any push to `main` that touches files under `docs/` triggers a redeploy.

## Conventions

<!-- Code style, commit message format, branch naming, etc. -->

TODO: Capture conventions worth enforcing.

## Notes for Claude

<!-- Project-specific guidance: things to always do, things to avoid. -->

- `content/content.md` is the source of truth for site copy — keep wording aligned when editing the site.
- Brand colours and typography rules are in `content/CDC-Brand Guidelines-2021 v1 (final).pdf`. Brand palette: `#274271` (blue, primary), `#FF9797` (blush), `#FFCA66` (yellow), `#04B2BF` (teal), `#FFFFFF`. Ratio: blue dominant, blush secondary, yellow/teal as highlights.
- Brand typeface is Mont Bold / Mont Regular. The brand explicitly allows Quicksand as a substitute, which is what the site uses.
- The "petal" leaf shape is the brand's key graphic motif (the central negative space of the logo mark). In CSS it's `border-radius: 0 100% 0 100%`.
- Imagery: keep photos bright and natural; lean on the Assembly photos in `imgs/` rather than stock.
- Avoid heavy scroll-driven JS reveals on first paint — they hide content in print/PDF and from no-JS users. If reintroducing, gate behind a `.js` class added by JS and ensure content is visible by default.

## Todo
TODO: Add logos for the signatories (need to be added to he imgs folder)
TODO: When shrinking to narrow size the menu bar links disappear. Be useful to have option to fold them out
TODO: The principles have a short description and a long description. The long description should be hidden with the option to read more and fold out on a click
TODO: Need to think about / decide whether to add the how to guide here or not.
TODO: Update copyright notice to say (C) University of Liverpool and add creative commons license notice (if that isn't contradictory). The cc license should make it free to re-use content but requires acknowledgement of the Civic Data Cooperative and the residents of Liverpool City Region.
