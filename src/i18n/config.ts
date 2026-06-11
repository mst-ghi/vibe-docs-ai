export const locales = ["en", "fa"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

/** Persian is right-to-left; everything else is left-to-right. */
export const dir: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  fa: "rtl",
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  fa: "فارسی",
}

export function isLocale(value: string | null | undefined): value is Locale {
  return value != null && (locales as readonly string[]).includes(value)
}
