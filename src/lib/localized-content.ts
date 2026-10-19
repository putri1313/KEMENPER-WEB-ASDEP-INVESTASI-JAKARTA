import type { SiteLanguage } from "@/lib/site-preferences";

/** User-facing content must provide both languages at the point it is authored. */
export type LocalizedContent = Readonly<{
  en: string;
  id: string;
}>;

export const localizedContent = (en: string, id: string): LocalizedContent => ({ en, id });

export const getLocalizedContent = (content: LocalizedContent, language: SiteLanguage) =>
  content[language];
