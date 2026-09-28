# ByteSpace — Landing Page

A responsive build of the **ByteSpace New** landing page from the
[Figma design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1),
plus the bonus **Login** and **Register** pages.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Routes

| Route       | Page                                         |
| ----------- | -------------------------------------------- |
| `/`         | Landing page (all sections from the design)  |
| `/login`    | Sign in (bonus)                              |
| `/register` | Create an account (bonus)                    |

## Project structure

```
src/
├─ app/                    # routes, root layout, global styles + design tokens
├─ components/
│  ├─ layout/              # Header (responsive nav), Footer, NewsletterForm
│  ├─ sections/            # one component per landing-page section
│  ├─ auth/                # AuthLayout, AuthForm, TextField, SocialLogin, AuthIllustration
│  └─ ui/                  # reusable primitives: Button, Pill, Logo, SectionHeading, SearchBar, CourseCard
└─ data/                   # typed content (courses, categories, testimonials, nav/footer links)
```

Content lives in `src/data`, so sections are plain presentational components and new
courses/testimonials can be added without touching markup.

## Design system

Tokens come straight from the Figma **Style Guide** page and are defined once in
`src/app/globals.css` (`@theme`):

- **Colors** — Neutral (Shuttle Gray 50–950), Primary (Persian Blue 50–950, brand `#003BE2`),
  Secondary (Electric Lime 50–950, accent `#D4FB20`).
- **Typography** — Poppins SemiBold for headings (72 / 44 / 36 / 20 px, 120%),
  Satoshi for body and labels (18 / 16 / 14 / 12 px, 160%).
- **Layout** — 12-column grid, 1200px content width (120px margins at 1440px).

## Behaviour

- Category pills filter the course grid; the hero search (`?q=`) filters it by title/creator.
- Mobile menu in the header; the category pills scroll horizontally on small screens.
- Newsletter and auth forms use native validation and show a confirmation message
  (there is no backend in this assessment).

## Notes for reviewers

- Images and 3D shapes were exported from the Figma file. The decorative 3D layers of the hero
  and CTA are single exported layers positioned exactly as in the frame; cards, text and buttons
  are real HTML.
- The two illustrations in the "Your Path / Create & Manage" section are exported as composite
  images, as they are artwork in the design.
- Footer newsletter button reads **Subscribe** (the design reuses the "Search" label there).
- Satoshi is loaded from Fontshare (it isn't available on Google Fonts); Poppins uses `next/font`.
