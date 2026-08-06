// The locales Rosey builds translated copies of the site for. Adding one here is
// step 1 of 3 — it also needs `--locales` in .cloudcannon/postbuild and a
// `data_config.locales_<code>` entry in cloudcannon.config.yml.
export const defaultLocale = "en";

export const locales = {
  fr: { label: "FR" },
  de: { label: "DE" },
} as const;

export type Locale = keyof typeof locales;

export const localeCodes = Object.keys(locales) as Locale[];

// English is served at the site root, not /en/ — `rosey build` runs with
// --default-language-at-root. The locale picker depends on this.
export const defaultLanguageAtRoot = true;
