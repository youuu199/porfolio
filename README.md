# Portfolio — Zar Ni Thway

Personal portfolio website built with **React + Vite**, styled with **Tailwind CSS**, and animated with **Framer Motion**.

## Sections

- **Hero** — Full-viewport intro with avatar, tagline, and CTAs
- **About** — Bio, NCC diploma highlights, and key stats
- **Skills** — Filterable skill bars by category (Backend, Database, Frontend, Languages, DevOps)
- **Projects** — Showcase of my 3 main projects (POS System, Giga Chad Store, Food Fusion)
- **Education** — NCC Level 4 & 5 Diploma in Computing timeline
- **Contact** — Validated contact form with email and social links

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Forms | Custom controlled form with validation |
| Deployment | Static build (`dist/`) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customize

All portfolio content lives in one file — edit `src/data/portfolio.js` to update:

- Personal info (name, title, email, location)
- Social links
- Bio and highlights
- Skills and proficiency levels
- Projects and descriptions
- Education timeline
- Navigation links

## Deploy

```bash
npm run build
```

Deploy the `dist/` folder to any static host:

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)

## License

MIT
