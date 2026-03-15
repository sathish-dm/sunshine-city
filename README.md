# Sunshine City - Community Website

Static website for **Sunshine Residents Welfare Association (SRWA)**, the residents' association of Sunshine City, a 36-acre RERA-approved residential community in Thirumazhisai, Chennai with 599 plots developed by Ramky Wavoo Developers.

**Live site:** https://sathish-dm.github.io/sunshine-city/

## Tech Stack

- [Astro](https://astro.build/) v6 — static site generator, zero JS shipped to browser
- [Tailwind CSS](https://tailwindcss.com/) v4 — utility-first styling via `@theme` directive
- GitHub Actions — automated build & deploy to GitHub Pages

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero banner, president's welcome, upcoming events, quick links, emergency SOS |
| About | `/about` | Community intro, vision & mission, objectives, infrastructure highlights |
| Committee | `/committee` | Elected committee member cards |
| Events | `/events` | Upcoming and past community events |
| Documents | `/documents` | Downloadable community documents (bylaws, forms, minutes) |
| Gallery | `/gallery` | Filterable photo grid with lightbox |
| Residents Corner | `/residents` | Complaint form, emergency contacts, waste management, maintenance info |
| Contact | `/contact` | Contact form (Web3Forms), address, email, Google Maps |
| 404 | — | Custom not-found page |

## Project Structure

```
src/
├── components/        # Reusable Astro components (Navbar, Footer, Hero, cards, form)
├── data/              # JSON data files (committee, announcements, events)
├── layouts/           # BaseLayout with shared HTML shell, SEO meta, dark mode
├── pages/             # Each .astro file = one page route
└── styles/            # global.css with Tailwind @theme tokens
public/
├── images/            # Community photos, placeholder assets
├── documents/         # Downloadable PDFs (to be added)
├── favicon.svg        # SRWA logo
└── robots.txt
```

## Features

- **Dark mode** — toggle with localStorage persistence, respects system preference
- **Responsive** — mobile-first design with hamburger navigation
- **Scroll animations** — fade-in on scroll via Intersection Observer
- **SEO** — Open Graph & Twitter Card meta tags on every page
- **Contact form** — Web3Forms integration (AJAX, no page reload, spam honeypot)
- **Data-driven** — committee members, events, and announcements loaded from JSON

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via the workflow in `.github/workflows/deploy.yml`.

To deploy to a custom domain (e.g., `srwa.in`):
1. Update `site` and remove `base` in `astro.config.mjs`
2. Remove `const base = ...` lines and `${base}` prefixes from all files (search for `import.meta.env.BASE_URL`)
3. Add a `CNAME` file to `public/` with your domain
4. Configure DNS to point to GitHub Pages

## Configuration

- **Form submissions:** Replace `YOUR_ACCESS_KEY_HERE` in `src/components/ContactForm.astro` with your [Web3Forms](https://web3forms.com) access key
- **Committee members:** Edit `src/data/committee.json`
- **Events:** Edit `src/data/events.json`
- **Announcements:** Edit `src/data/announcements.json` (currently hidden from navigation)
- **Colors/fonts:** Edit `@theme` block in `src/styles/global.css`
