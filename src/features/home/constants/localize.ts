export const LOCALES = ["en", "km"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function toLocale(language?: string | null): Locale {
  const code = (language ?? "").slice(0, 2).toLowerCase();
  return LOCALES.find((locale) => locale === code) ?? DEFAULT_LOCALE;
}

export type Resolved<T> = T extends { en: infer Value }
  ? Resolved<Value>
  : T extends (...args: never[]) => unknown
    ? T
    : T extends readonly (infer Item)[]
      ? Resolved<Item>[]
      : T extends object
        ? { [Key in keyof T]: Resolved<T[Key]> }
        : T;

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" &&
  value !== null &&
  Object.getPrototypeOf(value) === Object.prototype &&
  !("$$typeof" in value);

const isTranslation = (value: unknown): value is Record<string, unknown> =>
  isPlainObject(value) &&
  "en" in value &&
  Object.keys(value).every((key) =>
    (LOCALES as readonly string[]).includes(key),
  );

function pickLanguage(value: unknown, locale: Locale): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => pickLanguage(item, locale));
  }

  if (isTranslation(value)) {
    return pickLanguage(value[locale] ?? value.en, locale);
  }

  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        pickLanguage(item, locale),
      ]),
    );
  }

  return value;
}

const savedResults = new WeakMap<object, Map<Locale, object>>();

function getForLocale(data: object, locale: Locale): object {
  const results = savedResults.get(data) ?? new Map<Locale, object>();
  savedResults.set(data, results);

  if (!results.has(locale)) {
    results.set(locale, pickLanguage(data, locale) as object);
  }
  return results.get(locale) as object;
}

export function lazyLocalized<T>(data: object, getLocale: () => Locale): T {
  const current = () => getForLocale(data, getLocale());

  return new Proxy(data, {
    get: (_target, key) => Reflect.get(current(), key),
    has: (_target, key) => Reflect.has(current(), key),
    ownKeys: () => Reflect.ownKeys(current()),
    getOwnPropertyDescriptor: (_target, key) =>
      Reflect.getOwnPropertyDescriptor(current(), key),
  }) as T;
}
