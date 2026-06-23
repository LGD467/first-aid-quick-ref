import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguageStore } from "@/stores/languageStore";

export default function EmergencyCard() {
  const navigate = useNavigate();
  const { t } = useLanguageStore();

  return (
    <div
      onClick={() => navigate("/emergency")}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-red-900 p-6 cursor-pointer group animate-pulse-slow shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-0.5"
    >
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
          <AlertTriangle className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold text-lg tracking-tight">{t.emergency}</h3>
          <p className="text-red-100 text-sm mt-0.5 opacity-90">{t.emergencySubtitle}</p>
        </div>
        <svg
          className="w-5 h-5 text-red-200 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
