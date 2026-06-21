import { CheckCircle2 } from "lucide-react";

interface StepListProps {
  steps: string[];
}

export default function StepList({ steps }: StepListProps) {
  return (
    <div className="space-y-0">
      {steps.map((step, index) => (
        <div key={index} className="group flex gap-4 py-4 border-b border-stone-100 last:border-b-0">
          {/* 步骤编号 */}
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 text-teal-700 font-bold text-sm flex items-center justify-center mt-0.5 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
            {index + 1}
          </div>

          {/* 步骤内容 */}
          <div className="flex-1 pt-0.5">
            <p className="text-stone-700 leading-relaxed">{step}</p>
          </div>

          {/* 完成图标（悬停显示） */}
          <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-teal-500 opacity-0 group-hover:opacity-100 mt-1 transition-opacity duration-200" />
        </div>
      ))}
    </div>
  );
}
