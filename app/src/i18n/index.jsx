import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "../locales/en.json";
import lv from "../locales/lv.json";
import ru from "../locales/ru.json";

const LOCALE_STORAGE_KEY = "locale";
export const SUPPORTED_LOCALES = ["ru", "lv", "en"];

const dictionaries = { ru, lv, en };

function getInitialLocale() {
  if (typeof window === "undefined") return "ru";

  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (SUPPORTED_LOCALES.includes(stored)) return stored;

  const browser = window.navigator.language.toLowerCase();
  if (browser.startsWith("lv")) return "lv";
  if (browser.startsWith("en")) return "en";
  return "ru";
}

function getByPath(source, path) {
  return path.split(".").reduce((acc, key) => {
    if (acc && Object.prototype.hasOwnProperty.call(acc, key)) {
      return acc[key];
    }
    return undefined;
  }, source);
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const value = useMemo(() => {
    const dict = dictionaries[locale] || dictionaries.ru;

    const t = (path, fallback = "") => {
      const resolved = getByPath(dict, path);
      return resolved ?? fallback;
    };

    const setLocale = (nextLocale) => {
      if (!SUPPORTED_LOCALES.includes(nextLocale)) return;
      setLocaleState(nextLocale);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
      }
    };

    return {
      locale,
      setLocale,
      t,
      dict,
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
