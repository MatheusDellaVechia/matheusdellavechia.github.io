import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/content';

// Posts vivem em src/content/blog/pt/*.md e src/content/blog/en/*.md.
// A pasta define o idioma; o id sem o prefixo é o slug da URL — igual nas
// duas rotas, então o LanguageToggle troca de idioma sem trocar de post.
const folderFor: Record<Lang, string> = { 'pt-br': 'pt', en: 'en' };

export function postSlug(id: string): string {
  return id.replace(/^(pt|en)\//, '');
}

export async function getPostsByLang(
  lang: Lang,
): Promise<CollectionEntry<'blog'>[]> {
  const prefix = `${folderFor[lang]}/`;
  const posts = await getCollection(
    'blog',
    ({ id, data }) => !data.draft && id.startsWith(prefix),
  );
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

// Slugs (sem prefixo de idioma) que têm tradução publicada no idioma dado.
// Usado pelo LanguageToggle na página do post, pra não linkar pra uma
// tradução que não existe.
export async function getTranslatedSlugs(lang: Lang): Promise<Set<string>> {
  const posts = await getPostsByLang(lang);
  return new Set(posts.map((p) => postSlug(p.id)));
}
