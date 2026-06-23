import SearchBar from "@/components/SearchBar";
import EmergencyCard from "@/components/EmergencyCard";
import CategoryGrid from "@/components/CategoryGrid";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguageStore } from "@/stores/languageStore";

export default function HomePage() {
  const { t, injuries } = useLanguageStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-stone-50">
      {/* 头部区域 */}
      <header className="pt-10 pb-6 px-4 text-center animate-fade-in">
        <div className="flex items-center justify-between max-w-3xl mx-auto mb-2">
          <div />
          <LanguageSwitcher />
        </div>
        <div className="inline-flex items-center gap-2.5 mb-3">
          <span className="text-4xl">🏥</span>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            {t.appName}
          </h1>
        </div>
        <p className="text-stone-500 text-base md:text-lg">{t.appSubtitle}</p>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-12 space-y-8">
        {/* 搜索框 */}
        <section className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <SearchBar />
        </section>

        {/* 紧急提示卡 */}
        <section className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <EmergencyCard />
        </section>

        {/* 分类导航 */}
        <section className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-stone-800 text-lg md:text-xl">{t.categories}</h2>
            <span className="text-xs text-stone-400 font-medium">
              {injuries.length} {t.categoryCount}
            </span>
          </div>
          <CategoryGrid injuries={injuries} />
        </section>
      </main>

      {/* 底部免责入口 */}
      <footer className="border-t border-stone-100 py-6 px-4 text-center">
        <p className="text-xs text-stone-400 leading-relaxed max-w-md mx-auto">
          {t.footerDisclaimer}
          <span className="font-bold text-red-500">120</span>
        </p>
        <a
          href="/about"
          className="inline-block mt-2 text-xs text-stone-400 hover:text-red-500 transition-colors duration-200"
        >
          {t.footerDisclaimerLink}
        </a>
      </footer>
    </div>
  );
}
