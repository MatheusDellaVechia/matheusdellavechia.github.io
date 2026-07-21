---
title: 'Welcome to the blog'
description: 'First post — what you will find here.'
pubDate: 2026-07-21
tags: ['meta', 'about']
---

I decided I needed a place to dump the things I learn before they evaporate.
That's what this is: **insights**, oddities and notes on software
engineering, architecture and whatever else shows up along the way.

## Why a blog, in 2026?

Because writing forces me to stop and organize my thinking. Some things I
"thought I knew" fall apart the moment I try to explain them in a paragraph
and get stuck on the second line. If a piece of code doesn't come out clear
in the text, it's almost always because I hadn't really understood it.

> "If you can't explain it simply, you don't understand it well enough."

## How new posts get created

Each post is a Markdown/MDX file in `src/content/blog/pt/`, with a matching
translation in `src/content/blog/en/`. Just create both files, fill in the
frontmatter and `git push` — deploy is automatic.

```ts
// typed frontmatter example (src/content.config.ts)
schema: z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});
```

See you in the next one!
