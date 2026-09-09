# LogicTech Solutions — Marketing Website

A premium corporate technology website built with React, Vite, Tailwind CSS v4,
Framer Motion, React Router, and Lucide icons.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build       # production build -> dist/
npm run preview     # preview the production build locally
```

## Project structure

```
src/
  assets/        Logo and static images
  components/    Reusable sections (Navbar, Hero, Services, Footer, etc.)
  data/          content.js — all copy and placeholder content in one place
  pages/         Route-level pages (Home, About, Services, Projects, Careers, Contact, Blog, 404)
  App.jsx        Route definitions
  main.jsx       App entry point
```

## Replacing placeholder content

Everything that needs real company data is centralized in `src/data/content.js`
and marked with square brackets, e.g. `[Company Address]`, `[Team Member]`,
`[Project Name]`. Search that file for `[` to find every placeholder.

## Brand tokens

Colors and fonts live in `src/index.css` under the `@theme` block:

- `--color-navy`, `--color-navy-deep`, `--color-blue` — primary brand blues
- `--color-gold`, `--color-gold-deep` — accent color for CTAs and highlights
- `--font-display` (Space Grotesk) for headings, `--font-body` (Inter) for body text

## Notes

- Respects `prefers-reduced-motion`.
- Contact form includes client-side validation and success/error states; no
  backend is wired up yet — connect `handleSubmit` in `src/components/Contact.jsx`
  to your email/CRM service of choice.
- Social links, testimonials, team bios, and blog posts are placeholders —
  replace before launch.
