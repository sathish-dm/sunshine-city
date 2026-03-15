# CLAUDE.md

## Project Overview

Static community website for **Sunshine Residents Welfare Association (SRWA)** — the residents' association of Sunshine City, Thirumazhisai, Chennai. Built with Astro v6 + Tailwind CSS v4, deployed to GitHub Pages.

## Commands

```bash
npm run dev      # Dev server at localhost:4321
npm run build    # Build static site to dist/
npm run preview  # Preview production build
```

## Architecture

- **Astro v6** static site generator — outputs pure HTML, zero client JS by default
- **Tailwind CSS v4** — custom theme tokens defined via `@theme` in `src/styles/global.css` (not a config file)
- Pages are in `src/pages/`, components in `src/components/`, shared layout in `src/layouts/`
- Data (committee, events, announcements) lives in `src/data/*.json` and is imported in frontmatter

## Key Conventions

- **Base path:** Site is deployed at `/sunshine-city/` subpath on GitHub Pages. All internal links use `import.meta.env.BASE_URL` via a `const base` variable in each file's frontmatter. When linking, use `${base}/page-name`.
- **Tailwind theme colors:** `primary`, `primary-light`, `primary-dark`, `secondary`, `secondary-light`, `secondary-dark`, `bg`, `bg-alt`, `text`, `text-light`, `text-muted`. Use as utility classes: `bg-primary`, `text-secondary`, etc.
- **Fonts:** `font-heading` (Playfair Display) for headings, `font-body` (Inter) for body text.
- **Dark mode:** Uses `.dark` class on `<html>`. Toggle via `dark:` Tailwind variants. State stored in `localStorage`.
- **No phone numbers on the site** — it's publicly accessible. The only contact method is the Web3Forms contact form.
- **Announcements page exists** (`/announcements`) but is hidden from navigation and homepage. Data file is kept for future use.

## Content Updates

- Committee members: `src/data/committee.json`
- Events: `src/data/events.json`
- Announcements: `src/data/announcements.json`
- Contact form key: `src/components/ContactForm.astro` (replace `YOUR_ACCESS_KEY_HERE`)

## Naming

- **Community name:** Sunshine City (not "RWD Spotlight" or "gated community")
- **Association name:** Sunshine Residents Welfare Association (SRWA)
- **Not a gated community** — refer to it as "residential community"
