# tnm-rope-access

Next.js site for TMN Rope Access Projects.

## Requirements

- Node.js 20+

## Setup

```bash
pnpm install
cp .env.example .env.local   # optional
```

If `pnpm` is not installed globally, use **npx** (same commands everywhere):

```bash
cd /path/to/tnm
npx pnpm@9 install
npx pnpm@9 dev
```

Install [pnpm](https://pnpm.io/installation) if you prefer the short `pnpm` command.

## Scripts

| Command | Description |
|--------|-------------|
| `pnpm dev` | Dev server at [http://localhost:3000](http://localhost:3000) |
| `pnpm build` | Production build |
| `pnpm start` | Run production build locally |
| `pnpm lint` | ESLint |
| `pnpm lint:fix` | ESLint with auto-fix |
| `pnpm typecheck` | TypeScript check (no emit) |

## Deploy

Deploy on [Vercel](https://vercel.com) or any Node host: Node 20+, `pnpm build` and `pnpm start` (or use the Vercel Git integration).
