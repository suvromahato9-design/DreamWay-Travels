# DreamWay Travels (Stage 1: frontend)
React + Vite, 19 routes, HashRouter (GitHub Pages safe). Packages, reviews, gallery and policies are **SAMPLE content**; no prices, addresses or reviews are real.

## Run
`npm install && npm run dev` | build: `npm run build` | preview: `npm run preview`

## Enquiry emails (not yet active)
1. Create a form at formspree.io with recipient dreamwaytravel.in@gmail.com.
2. Set its ID as `VITE_FORMSPREE_ID` (local `.env` and GitHub repo Settings > Variables).
3. Enable Formspree's autoresponse for customer acknowledgements, then send a real test.
Without the ID, the form opens a pre-filled mailto: email. The form ID is public by design; never put secret keys in frontend code.

## Deploy
Repo Settings > Pages > Source: GitHub Actions. Push to `main`; `.github/workflows/deploy.yml` builds and publishes.

## Stage 2 (not built)
Admin dashboard, enquiry storage/status, and package/testimonial/gallery management need a backend (e.g. Supabase with auth + Row Level Security, or a Node API). Authorization must be enforced server-side.
