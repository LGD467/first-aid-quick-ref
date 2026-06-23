import { Globe } from "lucide-react";
import { useLanguageStore } from "@/stores/languageStore";

export default function LanguageSwitcher() {
  const { locale, toggleLocale } = useLanguageStore();

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs font-medium transition-colors duration-200 active:scale-95"
      title={locale === "zh" ? "Switch to English" : "切换到中文"}
    >
      <Globe className="w-3.5 h-3.5" />
      <span>{locale === "zh" ? "EN" : "中文"}</span>
    </button>
  );
}
