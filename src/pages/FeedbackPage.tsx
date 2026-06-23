import { useState } from "react";
import { ArrowLeft, Mail, MessageSquare, Lightbulb, Bug, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguageStore } from "@/stores/languageStore";

type FeedbackType = "suggestion" | "bug" | "general";

export default function FeedbackPage() {
  const navigate = useNavigate();
  const { t } = useLanguageStore();
  const [feedbackType, setFeedbackType] = useState<FeedbackType>("suggestion");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const feedbackTypes: { value: FeedbackType; icon: React.ReactNode; labelKey: keyof typeof t; descKey: keyof typeof t }[] = [
    {
      value: "suggestion",
      icon: <Lightbulb className="w-5 h-5" />,
      labelKey: "feedbackTypeSuggestion" as keyof typeof t,
      descKey: "feedbackTypeSuggestionDesc" as keyof typeof t,
    },
    {
      value: "bug",
      icon: <Bug className="w-5 h-5" />,
      labelKey: "feedbackTypeBug" as keyof typeof t,
      descKey: "feedbackTypeBugDesc" as keyof typeof t,
    },
    {
      value: "general",
      icon: <MessageSquare className="w-5 h-5" />,
      labelKey: "feedbackTypeGeneral" as keyof typeof t,
      descKey: "feedbackTypeGeneralDesc" as keyof typeof t,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabels: Record<FeedbackType, string> = {
      suggestion: t.feedbackTypeSuggestion,
      bug: t.feedbackTypeBug,
      general: t.feedbackTypeGeneral,
    };
    const body = [
      `${t.feedbackType}: ${typeLabels[feedbackType]}`,
      "",
      message,
      "",
      "---",
      t.feedbackSentFrom,
    ].join("\n");

    window.location.href = `mailto:tunan467@163.com?subject=${encodeURIComponent(subject || typeLabels[feedbackType])}&body=${encodeURIComponent(body)}`;
  };

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
          <h1 className="font-bold text-stone-800 text-lg">{t.feedbackTitle}</h1>
          <div className="ml-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* 说明区域 */}
        <section className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 mb-2">
            <Mail className="w-7 h-7 text-blue-500" />
          </div>
          <h2 className="text-xl font-bold text-stone-800">{t.feedbackSubtitle}</h2>
          <p className="text-stone-500 text-sm max-w-md mx-auto leading-relaxed">
            {t.feedbackDesc}
          </p>
        </section>

        {/* 反馈类型选择 */}
        <section>
          <h3 className="font-bold text-stone-700 text-sm mb-3">{t.feedbackSelectType}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {feedbackTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setFeedbackType(type.value)}
                className={`flex flex-col items-start gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                  feedbackType === type.value
                    ? "border-blue-500 bg-blue-50 shadow-sm"
                    : "border-stone-100 bg-white hover:border-stone-300"
                }`}
              >
                <span className={feedbackType === type.value ? "text-blue-600" : "text-stone-400"}>
                  {type.icon}
                </span>
                <span className={`font-medium text-sm ${feedbackType === type.value ? "text-blue-700" : "text-stone-700"}`}>
                  {t[type.labelKey]}
                </span>
                <span className="text-xs text-stone-400 leading-relaxed">{t[type.descKey]}</span>
              </button>
            ))}
          </div>
        </section>

        {/* 反馈表单 */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 主题 */}
          <div>
            <label className="block font-medium text-stone-700 text-sm mb-2">{t.feedbackSubject}</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={t.feedbackSubjectPlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm placeholder:text-stone-300"
            />
          </div>

          {/* 内容 */}
          <div>
            <label className="block font-medium text-stone-700 text-sm mb-2">{t.feedbackContent}</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.feedbackContentPlaceholder}
              rows={6}
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm resize-y placeholder:text-stone-300 leading-relaxed"
            />
          </div>

          {/* 提交按钮 */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors duration-200 active:scale-[0.99] shadow-lg shadow-blue-500/20"
          >
            <Send className="w-4.5 h-4.5" />
            {t.feedbackSubmit}
          </button>
        </form>

        {/* 直接联系 */}
        <section className="rounded-2xl bg-gradient-to-r from-stone-50 to-slate-50 p-6 border border-stone-100 text-center space-y-3">
          <p className="text-stone-600 text-sm">{t.feedbackDirectContact}</p>
          <a
            href="mailto:tunan467@163.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-200 rounded-full text-stone-700 font-medium text-sm hover:border-blue-300 hover:text-blue-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
            tunan467@163.com
          </a>
          <p className="text-xs text-stone-400 pt-1">{t.feedbackResponseTime}</p>
        </section>
      </main>
    </div>
  );
}
