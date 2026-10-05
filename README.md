# Liverpool City Region Community Charter on Data & AI

A modern, responsive, magazine-style website for the **Liverpool City Region Community Charter on Data and AI** — a charter of 11 principles, written by 59 Liverpool City Region residents, on how data and AI should work for their community.

🌐 **Live site:** https://civic-health-innovation-labs.github.io/data-charter-website/

## About

The site presents the Charter in a bright, engaging, story-driven format, drawing on the Civic Data Cooperative (CDC) brand guidelines. It surfaces the Charter principles, the Residents' Assembly story, the signatories, and ways to get involved.

## Tech Stack

Plain static site — HTML + CSS + a small vanilla JS file. No build step.

- **Typography:** [Quicksand](https://fonts.google.com/specimen/Quicksand) (Google Fonts) — the brand-approved substitute for Mont.
- **Palette:** CDC brand tokens as CSS custom properties — `#274271` (blue, primary), `#FF9797` (blush), `#FFCA66` (yellow), `#04B2BF` (teal), `#FFFFFF`.

## Repository Structure

- `docs/` — the deployed website (served by GitHub Pages)
  - `docs/index.html` — single-page magazine-style site
  - `docs/styles.css` — CDC-brand styling
  - `docs/script.js` — header scroll state + light hero/image-band parallax
  - `docs/imgs/` — site assets: logos, Assembly photography, signatory marks, favicon
- `content/` — source content not served from the site (`content.md`, brand guidelines PDF)
- `CLAUDE.md` — guidance for working in this repository
- `PLAN.md` — current open work / implementation plan

## Run locally

No dependencies. Serve from the `docs/` directory so paths match the deployed site:

```sh
python3 -m http.server 8000 --directory docs
# then open http://127.0.0.1:8000/
```

Any static server works (`npx serve docs`, `caddy file-server -root docs`, etc.).

## Deployment

Deployed via **GitHub Pages** from the `docs/` folder on the `main` branch. Any push to `main` that touches files under `docs/` triggers a redeploy to https://grazulis.github.io/charter-website/.

## License

Charter content is © the Liverpool City Region Civic Data Cooperative and contributors. See the site footer for licensing details.
