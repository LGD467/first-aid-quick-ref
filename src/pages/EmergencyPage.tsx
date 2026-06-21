import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import emergencyData from "@/data/emergency.json";

export default function EmergencyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-stone-950">
      {/* 头部导航 */}
      <header className="sticky top-0 z-10 bg-red-950/80 backdrop-blur-lg border-b border-red-800/50">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-xl bg-red-800/50 flex items-center justify-center hover:bg-red-700/50 transition-colors"
          >
            <ArrowLeft className="w-4.5 h-4.5 text-red-200" />
          </button>
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🚨</span>
            <h1 className="font-bold text-red-100 text-lg">极危情况速查</h1>
          </div>
        </div>
      </header>

      {/* 警示横幅 */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 py-3 px-4 text-center">
        <p className="text-white font-bold text-sm tracking-wide">
          ⚠️ 以下为危及生命的情况，请在施救的同时立即拨打 120
        </p>
      </div>

      {/* 紧急场景列表 */}
      <main className="max-w-3xl mx-auto px-4 py-6 space-y-5">
        {emergencyData.map((item) => (
          <article
            key={item.id}
            className={`rounded-2xl p-5 md:p-6 ${
              item.severity === "critical"
                ? "bg-gradient-to-br from-red-900/60 to-red-950/60 border border-red-700/30"
                : "bg-gradient-to-br from-orange-900/40 to-red-950/40 border border-orange-700/20"
            } backdrop-blur-sm`}
          >
            {/* 标题区 */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
              <span className="text-4xl">{item.icon}</span>
              <div>
                <h2 className="font-bold text-white text-xl md:text-2xl">{item.title}</h2>
                <p className="text-red-200 text-sm mt-0.5">{item.summary}</p>
              </div>
            </div>

            {/* 步骤列表 */}
            <ol className="space-y-3 mb-5">
              {item.steps.map((step, index) => (
                <li key={index} className="flex gap-3.5">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500 text-white font-bold text-sm flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-red-100 leading-relaxed text-base md:text-lg">{step}</span>
                </li>
              ))}
            </ol>

            {/* 特别警告 */}
            <div className="rounded-xl bg-yellow-500/10 border border-yellow-500/30 p-4">
              <div className="flex items-start gap-2.5">
                <span className="text-yellow-400 text-lg flex-shrink-0">⚠️</span>
                <p className="text-yellow-200 text-sm leading-relaxed">{item.warning}</p>
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* 底部提醒 */}
      <footer className="py-8 px-4 text-center">
        <p className="text-red-300/50 text-xs">
          本页面内容仅供急救参考 · 紧急情况请第一时间呼叫专业救援
        </p>
      </footer>
    </div>
  );
}
