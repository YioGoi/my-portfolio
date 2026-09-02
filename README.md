# Yiğit Doğan — Senior Frontend Engineer

Portfolio built with Next.js, React, TypeScript, SCSS, Framer Motion, and Three.js. The site presents architecture-led frontend work, production foundations, selected writing, and contact information while retaining the original geometric visual language.

## Local development

Requirements:

- Node.js 20.9 or later (CI uses Node.js 24)
- npm, using the committed `package-lock.json`

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality gates

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Run all checks in the same order as CI:

```bash
npm run check
```

The content-policy tests protect the public location language, homepage location neutrality, Signal Ops SSE positioning, and flagship project links. GitHub Actions runs the full check on pull requests and pushes to `main`.

The production script uses Next.js's supported webpack builder because the current Next.js 16.3.4 Turbopack builder stalls in this repository during optimisation; the webpack production build completes and prerenders all routes.

## Content architecture

- `content/profile.ts`: personal profile, navigation, and production-foundation content.
- `content/projects.ts`: flagship architecture case studies and supporting project links.
- `content/writing.ts`: selected article metadata.
- `plan.md`: implementation record and content guardrails.

The CV remains generated on demand from `components/ResumePDF/index.tsx`. There is no static CV PDF in `public/`.

## Deployment

No deployment is performed automatically by this repository task.

### Vercel

1. Push the reviewed changes to the GitHub repository.
2. In Vercel, select **Add New → Project** and import `YioGoi/my-portfolio`.
3. Keep the detected framework preset as **Next.js**.
4. Use `npm ci` as the install command and `npm run build` as the build command; no environment variables are required by the current site.
5. Deploy, then attach `www.yigit-dogan.dev` in **Project Settings → Domains**.
6. Verify `/`, `/projects`, `/contact`, `/robots.txt`, and `/sitemap.xml`, and confirm the CV download in a browser.

### Standard Node host

```bash
npm ci
npm run check
npm run start
```

The host should run Node.js 20.9 or later, expose the port supplied to Next.js, terminate HTTPS at the platform or reverse proxy, and set the production process to restart on failure.
