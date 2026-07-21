---
title: 'Bem-vindo ao blog'
description: 'Primeiro post — o que você vai encontrar por aqui.'
pubDate: 2026-07-21
tags: ['meta', 'sobre']
---

Resolvi que precisava de um canto pra despejar as coisas que aprendo antes que
elas evaporem. É isso aqui: **insights**, curiosidades e anotações sobre
engenharia de software, arquitetura e o que mais aparecer pelo caminho.

## Por que um blog, em 2026?

Porque escrever me obriga a parar e organizar o pensamento. Tem coisa que eu
"achava que sabia" até tentar explicar num parágrafo e travar na segunda linha.
Se um trecho de código não sai claro no texto, quase sempre é porque eu não
tinha entendido de verdade.

> "If you can't explain it simply, you don't understand it well enough."

## Como novos posts são criados

Cada post é um arquivo Markdown/MDX em `src/content/blog/pt/`, com uma
tradução correspondente em `src/content/blog/en/`. Basta criar os dois
arquivos, preencher o frontmatter e dar `git push` — o deploy é automático.

```ts
// exemplo de frontmatter tipado (src/content.config.ts)
schema: z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});
```

Até o próximo!
