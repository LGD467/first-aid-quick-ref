import SearchBar from "@/components/SearchBar";
import EmergencyCard from "@/components/EmergencyCard";
import CategoryGrid from "@/components/CategoryGrid";
import injuries from "@/data/injuries.json";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-stone-50">
      {/* 头部区域 */}
      <header className="pt-10 pb-6 px-4 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2.5 mb-3">
          <span className="text-4xl">🏥</span>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            外伤急救速查
          </h1>
        </div>
        <p className="text-stone-500 text-base md:text-lg">关键时刻的正确指引</p>
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
            <h2 className="font-bold text-stone-800 text-lg md:text-xl">常见伤情</h2>
            <span className="text-xs text-stone-400 font-medium">{injuries.length} 种伤情类型</span>
          </div>
          <CategoryGrid injuries={injuries} />
        </section>
      </main>

      {/* 底部免责入口 */}
      <footer className="border-t border-stone-100 py-6 px-4 text-center">
        <p className="text-xs text-stone-400 leading-relaxed max-w-md mx-auto">
          本工具仅供参考，不能替代专业医疗建议。紧急情况请立即拨打{" "}
          <span className="font-bold text-red-500">120</span> 急救电话。
        </p>
        <a
          href="/about"
          className="inline-block mt-2 text-xs text-stone-400 hover:text-red-500 transition-colors duration-200"
        >
          了解更多与免责声明 →
        </a>
      </footer>
    </div>
  );
}
