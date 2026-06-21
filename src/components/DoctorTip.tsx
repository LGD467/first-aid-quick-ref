import { AlertTriangle, Hospital } from "lucide-react";

interface DoctorTipProps {
  whenToSeeDoctor: string[];
}

export default function DoctorTip({ whenToSeeDoctor }: DoctorTipProps) {
  if (whenToSeeDoctor.length === 0) return null;

  return (
    <div className="rounded-2xl border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-amber-50/50 p-5 md:p-6">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
          <Hospital className="w-5 h-5 text-orange-600" />
        </div>
        <h3 className="font-bold text-orange-800 text-lg">必须就医的指征</h3>
      </div>

      <ul className="space-y-3">
        {whenToSeeDoctor.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <span className="text-orange-800 text-sm md:text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
