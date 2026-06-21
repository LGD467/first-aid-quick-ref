import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import StepList from "@/components/StepList";
import WarningBox from "@/components/WarningBox";
import DoctorTip from "@/components/DoctorTip";
import injuries from "@/data/injuries.json";

export default function InjuryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const injury = injuries.find((item) => item.id === id);

  if (!injury) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
        <div className="text-center px-4">
          <p className="text-6xl mb-4">😵</p>
          <h2 className="text-xl font-bold text-stone-700 mb-2">未找到该伤情信息</h2>
          <p className="text-stone-500 mb-6">请检查链接或返回首页重新选择</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2.5 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

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
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <span className="text-2xl flex-shrink-0">{injury.icon}</span>
            <h1 className="font-bold text-stone-800 text-lg truncate">{injury.title}</h1>
          </div>
        </div>
      </header>

      {/* 内容区 */}
      <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* 处理步骤 */}
        <section className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-stone-100">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center">
              <span className="text-lg">✅</span>
            </div>
            <h2 className="font-bold text-teal-800 text-lg">处理步骤</h2>
          </div>
          <StepList steps={injury.steps} />
        </section>

        {/* 禁忌事项 */}
        <WarningBox warnings={injury.warnings} />

        {/* 就医指征 */}
        <DoctorTip whenToSeeDoctor={injury.whenToSeeDoctor} />

        {/* 免责提示 */}
        <Link
          to="/about"
          className="flex items-center justify-center gap-2 py-4 text-sm text-stone-400 hover:text-red-500 transition-colors"
        >
          <ShieldAlert className="w-4 h-4" />
          <span>查看完整免责声明</span>
        </Link>
      </main>
    </div>
  );
}
