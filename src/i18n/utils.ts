import { defaultLang, type Lang } from './content';

// Idioma a partir do primeiro segmento da URL (/en/... => 'en').
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return seg === 'en' ? 'en' : defaultLang;
}

// Caminho equivalente no outro idioma (usado no seletor de idioma).
export function getAltPath(pathname: string, currentLang: Lang): string {
  if (currentLang === 'en') {
    const stripped = pathname.replace(/^\/en(?=\/|$)/, '');
    return stripped === '' ? '/' : stripped;
  }
  return pathname === '/' ? '/en/' : `/en${pathname}`;
}
