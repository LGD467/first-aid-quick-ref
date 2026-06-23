import { ArrowLeft, FileText, Github, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguageStore } from "@/stores/languageStore";

export default function AboutPage() {
  const navigate = useNavigate();
  const { t } = useLanguageStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-stone-50">
      {/* 头部导航 */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-lg border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center hover:bg-stone-200 transition-colors"
          >
            <ArrowLeft className="w-4.5 h-4.5 text-stone-600" />
          </button>
          <h1 className="font-bold text-stone-800 text-lg">{t.aboutTitle}</h1>
          <div className="ml-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* 产品介绍 */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🏥</span>
            <div>
              <h2 className="font-bold text-stone-800 text-xl">{t.appName}</h2>
              <p className="text-stone-400 text-sm">{t.version}</p>
            </div>
          </div>
          <p className="text-stone-600 leading-relaxed">{t.aboutDesc}</p>
        </section>

        {/* 数据来源 */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center gap-2.5 mb-4">
            <FileText className="w-5 h-5 text-teal-600" />
            <h3 className="font-bold text-stone-800 text-lg">{t.dataSource}</h3>
          </div>
          <ul className="space-y-2.5 text-stone-600 text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-teal-500 mt-1">•</span>
              <span>{t.dataSource1}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 mt-1">•</span>
              <span>{t.dataSource2}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 mt-1">•</span>
              <span>{t.dataSource3}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 mt-1">•</span>
              <span>{t.dataSource4}</span>
            </li>
          </ul>
        </section>

        {/* 完整免责声明 */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
          <div className="flex items-center gap-2.5 mb-4">
            <Heart className="w-5 h-5 text-red-500" />
            <h3 className="font-bold text-red-800 text-lg">{t.disclaimerTitle}</h3>
          </div>
          <div className="space-y-3 text-red-900/80 text-sm leading-relaxed">
            <p>
              <strong>1.</strong> {t.d1}
            </p>
            <p>
              <strong>2.</strong> {t.d2}
            </p>
            <p>
              <strong>3.</strong> {t.d3}
            </p>
            <p>
              <strong>4.</strong> {t.d4}
            </p>
            <p>
              <strong>5.</strong> {t.d5}
            </p>
            <p>
              <strong>6.</strong> {t.d6}
            </p>
          </div>
        </section>

        {/* 技术信息 */}
        <section className="text-center py-6">
          <div className="flex items-center justify-center gap-2 text-stone-400 text-sm">
            <Github className="w-4 h-4" />
            <span>{t.techInfo}</span>
          </div>
          <p className="text-stone-300 text-xs mt-2">Made with care for safety</p>
        </section>
      </main>
    </div>
  );
}
