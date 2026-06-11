"use client"

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { defaultLocale, dir as dirMap, isLocale, type Locale } from "@/i18n/config"
import { type Dict, dictionaries } from "@/i18n/dictionaries"

type Theme = "light" | "dark"

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  dict: Dict
  dir: "ltr" | "rtl"
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

const LOCALE_KEY = "vibedocs-locale"
const THEME_KEY = "vibedocs-theme"

/**
 * Inline script injected before paint so the document picks up the persisted
 * theme/locale without a flash of the wrong appearance. Keep it dependency-free
 * — it runs as a raw string in the document head.
 */
export const noFlashScript = `
(function () {
  try {
    var theme = localStorage.getItem("${THEME_KEY}");
    if (!theme) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    var root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    var locale = localStorage.getItem("${LOCALE_KEY}") || "${defaultLocale}";
    root.setAttribute("lang", locale);
    root.setAttribute("dir", locale === "fa" ? "rtl" : "ltr");
  } catch (e) {}
})();
`

export function Providers({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [theme, setThemeState] = useState<Theme>("dark")

  // Hydrate from the values the no-flash script already applied to <html>.
  useEffect(() => {
    const root = document.documentElement
    const storedLocale = localStorage.getItem(LOCALE_KEY)
    if (isLocale(storedLocale)) setLocaleState(storedLocale)
    setThemeState(root.classList.contains("dark") ? "dark" : "light")
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(LOCALE_KEY, next)
    const root = document.documentElement
    root.setAttribute("lang", next)
    root.setAttribute("dir", dirMap[next])
  }, [])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    localStorage.setItem(THEME_KEY, next)
    document.documentElement.classList.toggle("dark", next === "dark")
  }, [])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale(locale === "en" ? "fa" : "en"),
      dict: dictionaries[locale],
      dir: dirMap[locale],
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
    }),
    [locale, theme, setLocale, setTheme]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within <Providers>")
  return ctx
}
