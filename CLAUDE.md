# CLAUDE.md

## Project Overview

**quirk-generator** is the Quirkverse's AI image generator: one prompt in, images from multiple fal models out, side by side. It is derived from Vercel's fal image-generator template and realigned to Quirk Systems `project-scaffold` conventions (Bun, ESLint flat config, Prettier, Vitest, Playwright, t3-env, GitHub Actions CI).

Layout note: this app keeps the template's root-level `app/` / `components/` / `lib/` / `hooks/` structure (Next.js's other supported layout) rather than `src/`; the `@/` alias maps to the repo root.

## Tech Stack

| Category   | Tool                                 |
| ---------- | ------------------------------------ |
| Runtime    | Bun                                  |
| Framework  | Next.js 15 (App Router)              |
| Language   | TypeScript (strict)                  |
| Styling    | Tailwind CSS v3 + shadcn/ui          |
| AI         | Vercel AI SDK (`ai`) + `@ai-sdk/fal` |
| Unit tests | Vitest + Testing Library             |
| E2E        | Playwright                           |

## Commands

| Command            | Description                            |
| ------------------ | -------------------------------------- |
| `bun run dev`      | Dev server                             |
| `bun run validate` | lint + type-check + unit tests + build |
| `bun run test`     | Unit tests (watch)                     |
| `bun run test:e2e` | Playwright E2E                         |

## Environment

- `FAL_KEY` — fal.ai API key, validated in `lib/env.ts` (t3-env). Optional: the app boots/builds without it; `POST /api/generate-images` returns 503 until it is set.
- `SKIP_ENV_VALIDATION=1` skips validation (CI).

## Feature map

- `app/api/generate-images/route.ts` — generation endpoint (validates params, 503 without `FAL_KEY`, 55s timeout).
- `components/ImagePlayground.tsx` + `components/ImageGenerator.tsx` — the main surface (prompt box, model selection, results grid).
- `lib/suggestions.ts` — randomized prompt suggestions (unit-tested).
- `lib/image-helpers.ts` — base64→blob, filenames, share/download (unit-tested).
- `lib/provider-config.ts` — fal model list and provider config.
- `e2e/home.spec.ts` — playground renders without secrets.

## Conventions

- Server Components by default; `"use client"` only for interactivity.
- Import via the `@/` alias (repo root).
- Keep pure logic in `lib/` and unit-test it; use E2E for page-level behavior.
- Conventional commit messages.

## Known follow-ups

- Tailwind is still v3 with `tailwind.config.ts` (the scaffold uses v4 CSS-first). Migrate deliberately in its own PR — the UI surface is large and should be visually verified.
