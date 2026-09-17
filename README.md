# D&K Estates — Website

Premium, mobile-first real estate advisory website for **D&K Estates**
(Gurugram). Built to establish trust and convert Meta/Facebook/Instagram ad
traffic into property enquiries.

> **Zameen Se Sapno Tak.** · People • Properties • Progress

D&K Estates is a real estate **advisory / property consultancy — not a
developer**. The site keeps that distinction explicit everywhere (e.g. WAL
Serenia 92 is developed by WAL Developments Pvt. Ltd.; D&K Estates is the
property advisor).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (brand tokens in `src/app/globals.css`)
- Fonts: **Fraunces** (editorial serif) + **Inter** (UI/body) via `next/font`

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev                  # http://localhost:3000
npm run build                # production build
npm start                    # serve the production build (http://localhost:3000)
```

This is a standard **Next.js (Node) app** — `npm run build` then `npm start`.
It is deployed on Hostinger as a **Node.js application** (see
[Deployment](#deployment)), the same way as the Dolphin CRM site.

## Configuration (important)

All contact details and analytics IDs are **env-driven** with clearly-marked
placeholders — no personal phone/email is hard-coded in components. Central
config lives in `src/lib/config.ts`. Set these in `.env.local` before launch:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_CONTACT_PHONE` | Phone in E.164 for `tel:` links, e.g. `+919812345678` |
| `NEXT_PUBLIC_CONTACT_PHONE_DISPLAY` | Human display, e.g. `+91 98123 45678` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number for `wa.me` (falls back to phone) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Business email |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel — script loads only if set |
| `NEXT_PUBLIC_GA_ID` | GA4 Measurement ID — loads only if set |
| `NEXT_PUBLIC_FACEBOOK_URL` / `NEXT_PUBLIC_INSTAGRAM_URL` | Footer social links |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | **Required** for the enquiry form — free key from [web3forms.com](https://web3forms.com) |

> All `NEXT_PUBLIC_*` values are **inlined at build time**. On Hostinger, set
> them as environment variables on the Node.js application before building
> (see [Deployment](#deployment)).

Until the real phone is set, the site shows an obvious placeholder
(`+91 00000 00000`) so it never ships a fake real number.

## Pages

- `/` — Home (sells D&K Estates; featured project read from data)
- `/projects/wal-serenia-92` — Project detail (Meta-Ads landing + enquiry form)
- `/privacy-policy` — Privacy policy (for Meta Instant Lead Forms)
- `sitemap.xml`, `robots.txt` — generated

## Adding a new project

Projects are **data-driven** — no page code is duplicated. To add one:

1. Create `src/data/projects/<slug>.ts` satisfying the `Project` type
   (`src/lib/types.ts`).
2. Register it in the `PROJECTS` array in `src/lib/projects.ts`.
3. Add images under `public/images/projects/<slug>/` and point the data's
   `src` fields at them (set `placeholder: false`).

The homepage Featured Property, the `/projects/[slug]` template, and the sitemap
all update automatically.

## Images

Project renders live in `public/images/projects/<slug>/` and brand assets in
`public/images/brand/`, pre-compressed to **WebP**. `SmartImage` renders a
clearly-labelled placeholder for any image whose data has `placeholder: true`
(so a new project never shows a random render before its assets are added).

## Lead form & tracking

- The enquiry form submits directly to **[Web3Forms](https://web3forms.com)**
  (no server needed) using `NEXT_PUBLIC_WEB3FORMS_KEY`. Submissions arrive at the
  email tied to that key. A honeypot field blocks basic spam bots.
- **UTM parameters** are captured on landing and included in each submission.
- Meta/GA events: `PageView` (auto), `ViewContent` (project view), `Contact`
  (call/WhatsApp), `Schedule` (site-visit intent), and **`Lead` only after a
  successful submission** — never on form open.

## Deployment

Deployed on **Hostinger as a Node.js application** connected to this GitHub
repo — the same approach as the Dolphin CRM site. Push to `main` → Hostinger
pulls, builds and restarts the app. No GitHub Actions, no FTP, no static export.

**Hostinger Node.js app settings:**

| Setting | Value |
| --- | --- |
| Application root / repo | `github.com/viveksalesphin/D-Kestates`, branch `main` |
| Node version | `20` |
| Install command | `npm install` |
| Build command | `npm run build` |
| Start command | `npm start` (runs `next start`, listens on `$PORT`) |
| Application URL | `dkestates.co.in` |

Set the `NEXT_PUBLIC_*` values (and `NEXT_PUBLIC_WEB3FORMS_KEY`) as
**environment variables on the Hostinger app** so they're inlined during
`npm run build`.

## Trust & compliance notes

The copy deliberately avoids guaranteed-returns / No.1-advisor style claims,
does not invent possession dates, unit counts, distances, testimonials or
awards, and shows pricing with the required indicative-pricing disclaimer and
HARERA registration details on the project page.
