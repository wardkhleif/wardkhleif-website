# Ward Khleif — Personal Portfolio

A production-ready static portfolio for Ward Khleif, an independent software developer building iOS apps, browser extensions, automation tools, and digital products.

## Technology

- Astro with TypeScript and static output
- Reusable Astro components and centralized typed project data
- Plain CSS with responsive light and dark themes
- Minimal JavaScript for theme persistence, navigation, and restrained reveals

## Local development

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Node 22.12 or newer is required. The production build is written to `dist/`.

## Project structure

- `src/components/` — reusable interface components
- `src/data/site.ts` — site metadata and optional contact/profile links
- `src/data/projects.ts` — project content and preview configuration
- `src/layouts/` — shared page and project layouts
- `src/pages/` — route files
- `src/styles/global.css` — global tokens and foundational styles
- `public/` — favicon, social image, and robots policy

## Updating content

Edit `src/data/site.ts` to change metadata or configure email, GitHub, and LinkedIn links. Empty values are hidden automatically. To add a project, add a typed entry in `src/data/projects.ts`; create a page under `src/pages/projects/` only when a detail page is needed.

## Cloudflare Pages deployment

Connect the GitHub repository through Cloudflare Pages Git integration using:

```text
Production branch: main
Build command: npm run build
Build output directory: dist
```

No environment variables are required. The intended canonical domain is `https://wardkhleif.com`. Add `wardkhleif.com` and `www.wardkhleif.com` from the Pages project's Custom domains panel, then configure `www` to redirect to the apex domain.
