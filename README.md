# Blog pessoal — Matheus Oliveira

Blog estático em **Astro 5** + **Tailwind CSS v4**. Posts em Markdown/MDX
versionados no Git. Deploy gratuito na Vercel (ou Netlify / Cloudflare Pages).

## Stack

- [Astro 5](https://astro.build) — SSG, zero JS por padrão
- [Tailwind CSS v4](https://tailwindcss.com) — via `@tailwindcss/vite`
- MDX, RSS e sitemap (`@astrojs/*`)
- `@tailwindcss/typography` para o conteúdo dos posts
- Dark mode por classe, com persistência em `localStorage`

## Comandos

| Comando          | Ação                                         |
| ---------------- | -------------------------------------------- |
| `pnpm install`   | Instala dependências                         |
| `pnpm dev`       | Servidor local em `http://localhost:4321`    |
| `pnpm build`     | Gera o site estático em `./dist`             |
| `pnpm preview`   | Pré-visualiza o build localmente             |

## Estrutura

```
src/
├── components/        # Header, Footer, ThemeToggle, PostCard
├── content/
│   └── blog/          # posts em .md / .mdx  <-- escreva aqui
├── content.config.ts  # schema (frontmatter tipado com Zod)
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro        # Home / apresentação
│   ├── blog/index.astro   # Lista de posts
│   ├── blog/[...slug].astro
│   └── rss.xml.ts         # Feed RSS
├── styles/global.css
└── consts.ts          # título, descrição, URL, redes sociais
```

## Escrever um post

Crie `src/content/blog/meu-post.md`:

```md
---
title: 'Título do post'
description: 'Resumo curto para listagem e SEO.'
pubDate: 2026-07-21
tags: ['tag1', 'tag2']
draft: false
---

Conteúdo em Markdown...
```

`draft: true` esconde o post da listagem, do RSS e do build.

## Deploy na Vercel

1. Suba o repositório no GitHub.
2. Em [vercel.com](https://vercel.com) → **New Project** → importe o repo.
3. A Vercel detecta Astro automaticamente (build `astro build`, saída `dist`).
   Nenhum adapter é necessário para site estático.
4. Ajuste `site` em `astro.config.mjs` e `SITE_URL` em `src/consts.ts` para a
   URL final (necessário para canonical, sitemap e RSS corretos).

> Para páginas dinâmicas/SSR no futuro, adicione o adapter `@astrojs/vercel`.
