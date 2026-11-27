import type { Lang } from './text';

export const homePath = (lang: Lang) => (lang === 'pt' ? '/pt/' : '/');

export const projectPath = (lang: Lang, slug: string) => `${homePath(lang)}projects/${slug}/`;
