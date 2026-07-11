# quirk-generator

One prompt, many models — AI image generation for the Quirkverse.

Derived from Vercel's open-source [fal image generator template](https://github.com/vercel-labs/vercel-fal-image-generator), realigned to Quirk Systems scaffold conventions: Bun · Next.js 15 (App Router) · TypeScript strict · Tailwind CSS · shadcn/ui · Vitest · Playwright.

## MVP feature

- **One input, multiple models**: type a prompt (or pick a suggestion) and generate images across fal models side by side, with per-model timing.
- **Share / download** results straight from the grid.
- Boots and builds **without** any secret; generation requests return a clear `503` until `FAL_KEY` is set (validated via t3-env in `lib/env.ts`).

## Getting Started

```bash
bun install
cp .env.example .env   # add your FAL_KEY
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

Get a fal API key at [fal.ai](https://fal.ai) and set `FAL_KEY` in `.env`.

## Scripts

| Command            | Description                            |
| ------------------ | -------------------------------------- |
| `bun run dev`      | Start dev server                       |
| `bun run validate` | Lint + type-check + unit tests + build |
| `bun run test`     | Unit tests (watch)                     |
| `bun run test:e2e` | E2E tests (Playwright)                 |

## License

[Apache 2.0](LICENSE)
