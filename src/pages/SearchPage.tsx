import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Search as SearchIcon, ArrowLeft } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = useSearch(query);
  const [inputValue, setInputValue] = useState(query);
  const navigate = useNavigate();

  // 同步URL参数到输入框
  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-stone-50">
      {/* 头部搜索栏 */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-lg border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center hover:bg-stone-200 transition-colors flex-shrink-0"
          >
            <ArrowLeft className="w-4.5 h-4.5 text-stone-600" />
          </button>
          <form onSubmit={handleSubmit} className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="搜索伤情或症状..."
              autoFocus
              className="w-full px-4 py-2.5 pr-10 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/10 transition-all text-base placeholder:text-stone-400"
            />
            <SearchIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-stone-400" />
          </form>
        </div>
      </header>

      {/* 搜索结果 */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        {query.length > 0 && query.length < 2 && (
          <p className="text-center text-stone-400 py-12 text-sm">请输入至少2个字符进行搜索</p>
        )}

        {query.length >= 2 && (
          <>
            {results.length > 0 ? (
              <div className="space-y-3">
                <p className="text-sm text-stone-400 mb-4">
                  找到 <span className="font-bold text-stone-600">{results.length}</span> 条相关结果
                </p>
                {results.map((result) => (
                  <Link
                    key={result.item.id}
                    to={`/injury/${result.item.id}`}
                    className="block bg-white rounded-2xl p-5 border border-stone-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="text-3xl flex-shrink-0 mt-0.5">{result.item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-stone-800 group-hover:text-red-600 transition-colors">
                          {result.item.title}
                        </h3>
                        <p className="text-stone-500 text-sm mt-1 line-clamp-2">{result.item.description}</p>
                        {/* 匹配关键词高亮提示 */}
                        {result.matches && (
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {(result.matches as Array<{ key: string }>).slice(0, 3).map((match, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-md text-xs font-medium"
                              >
                                匹配: {match.key === "title" ? "标题" : match.key === "keywords" ? "关键词" : match.key === "description" ? "描述" : "步骤"}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <svg
                        className="w-5 h-5 text-stone-300 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-5xl mb-4">🔍</p>
                <h3 className="text-lg font-bold text-stone-600 mb-2">未找到相关结果</h3>
                <p className="text-stone-400 text-sm">
                  试试其他关键词，如「烫伤」「出血」「狗咬」等
                </p>
              </div>
            )}
          </>
        )}

        {!query && (
          <div className="text-center py-16 text-stone-400">
            <SearchIcon className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>输入关键词搜索伤情或症状</p>
          </div>
        )}
      </main>
    </div>
  );
}
