// The locales Rosey builds translated copies of the site for. Adding one here is
// step 1 of 3 — it also needs `--locales` in .cloudcannon/postbuild and a
// `data_config.locales_<code>` entry in cloudcannon.config.yml.
export const defaultLocale = "en";

// blogCollection is the split-by-directory half of the model: whole articles that
// differ per language are separate content files, not Rosey keys. Adding a locale
// here without creating its collection breaks the [locale] blog routes at build.
export const locales = {
  fr: { label: "FR", blogCollection: "blog_fr", dateLocale: "fr-FR" },
  de: { label: "DE", blogCollection: "blog_de", dateLocale: "de-DE" },
} as const;

export type Locale = keyof typeof locales;

export const localeCodes = Object.keys(locales) as Locale[];

// English is served at the site root, not /en/ — `rosey build` runs with
// --default-language-at-root. The locale picker depends on this.
export const defaultLanguageAtRoot = true;

export const defaultBlogCollection = "blog";
export const defaultDateLocale = "en-US";

export type BlogCollection =
  | typeof defaultBlogCollection
  | (typeof locales)[Locale]["blogCollection"];

export function blogCollectionFor(locale?: string): BlogCollection {
  if (!locale || !(locale in locales)) return defaultBlogCollection;
  return locales[locale as Locale].blogCollection;
}

export function dateLocaleFor(locale?: string): string {
  if (!locale || !(locale in locales)) return defaultDateLocale;
  return locales[locale as Locale].dateLocale;
}
