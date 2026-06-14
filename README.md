# WebPro México — Landing Page

A high-converting landing page for a Mexican web design and digital automation agency, targeting small and medium businesses (SMBs) across Mexico.

## What it does

The site acts as a sales funnel sent via cold email campaigns to businesses that don't yet have a website. It:

- Captures attention immediately with a bold hero section in Spanish
- Showcases website solutions for 9 industries (restaurants, hotels, dental clinics, lawyers, real estate, HVAC, salons, construction, gyms)
- Explains the automation flows that turn website visitors into customers automatically
- Presents transparent pricing in MXN (Mexican Pesos)
- Captures leads via a Netlify Form with 8 fields + spam protection
- Includes a floating WhatsApp button and social proof testimonials
- Covers major Mexican cities (CDMX, Guadalajara, Monterrey, Cancún, etc.)

## Tech stack

- **Framework**: TanStack Start (React 19, SSR)
- **Styling**: Tailwind CSS v4 + custom CSS animations
- **Forms**: Netlify Forms (serverless, no backend needed)
- **Routing**: TanStack Router (file-based)
- **Deployment**: Netlify (with `@netlify/vite-plugin-tanstack-start`)

## Running locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`.

For Netlify feature emulation (Forms, Edge Functions):

```bash
netlify dev --port 8889
```

## Build

```bash
npm run build
```

The build output goes to `.netlify/` for serverless deployment on Netlify.
