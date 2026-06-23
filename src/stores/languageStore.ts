import { create } from "zustand";
import type { Locale, Translations } from "@/i18n/translations";
import { translations } from "@/i18n/translations";
import injuriesZh from "@/data/injuries.json";
import injuriesEn from "@/data/injuries-en.json";
import emergencyZh from "@/data/emergency.json";
import emergencyEn from "@/data/emergency-en.json";

interface LanguageState {
  locale: Locale;
  t: Translations;
  injuries: typeof injuriesZh;
  emergency: typeof emergencyZh;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

// 检测浏览器语言
function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return "zh";
  const lang = navigator.language.toLowerCase();
  return lang.startsWith("zh") ? "zh" : "en";
}

export const useLanguageStore = create<LanguageState>((set) => ({
  locale: detectBrowserLocale(),
  t: translations[detectBrowserLocale()],
  injuries: detectBrowserLocale() === "zh" ? injuriesZh : injuriesEn,
  emergency: detectBrowserLocale() === "zh" ? emergencyZh : emergencyEn,

  setLocale: (locale) =>
    set({
      locale,
      t: translations[locale],
      injuries: locale === "zh" ? injuriesZh : injuriesEn,
      emergency: locale === "zh" ? emergencyZh : emergencyEn,
    }),

  toggleLocale: () =>
    set((state) => {
      const next = state.locale === "zh" ? "en" : "zh";
      return {
        locale: next,
        t: translations[next],
        injuries: next === "zh" ? injuriesZh : injuriesEn,
        emergency: next === "zh" ? emergencyZh : emergencyEn,
      };
    }),
}));
