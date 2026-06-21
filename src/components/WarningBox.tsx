import { AlertOctagon, XCircle } from "lucide-react";

interface WarningBoxProps {
  warnings: string[];
}

export default function WarningBox({ warnings }: WarningBoxProps) {
  if (warnings.length === 0) return null;

  return (
    <div className="rounded-2xl border-l-4 border-red-500 bg-gradient-to-r from-red-50 to-orange-50/50 p-5 md:p-6">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
          <AlertOctagon className="w-5 h-5 text-red-600" />
        </div>
        <h3 className="font-bold text-red-800 text-lg">禁忌事项</h3>
      </div>

      <ul className="space-y-3">
        {warnings.map((warning, index) => (
          <li key={index} className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-red-700 text-sm md:text-base leading-relaxed">{warning}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
