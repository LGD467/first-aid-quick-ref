import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { InjuryData } from "@/data/injuries.json";

interface CategoryGridProps {
  injuries: InjuryData[];
}

export default function CategoryGrid({ injuries }: CategoryGridProps) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
      {injuries.map((injury) => (
        <button
          key={injury.id}
          onClick={() => navigate(`/injury/${injury.id}`)}
          className="group w-full bg-white rounded-2xl p-4 md:p-5 text-left border border-stone-100 shadow-sm hover:shadow-lg hover:border-red-200 hover:-translate-y-0.5 transition-all duration-250 active:scale-[0.99]"
        >
          {/* 横向布局：图标左 + 内容右 */}
          <div className="flex items-center gap-4">
            {/* 左侧图标 */}
            <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center group-hover:from-red-50 group-hover:to-orange-50 transition-colors duration-250">
              <span className="text-3xl md:text-4xl">{injury.icon}</span>
            </div>

            {/* 右侧文字内容 */}
            <div className="flex-1 min-w-0 py-0.5">
              {/* 标题 */}
              <h3 className="font-bold text-stone-800 text-base md:text-lg leading-snug truncate group-hover:text-red-600 transition-colors duration-200">
                {injury.title}
              </h3>

              {/* 描述 */}
              <p className="text-stone-400 text-xs md:text-sm mt-1 line-clamp-1 leading-relaxed">
                {injury.description}
              </p>

              {/* 查看详情 */}
              <div className="mt-2 flex items-center gap-1 text-red-500/70 text-xs font-medium group-hover:text-red-600 transition-all duration-200">
                <span>查看详情</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
