import { SkillCardProps } from "@/types/cv";

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => ( <div className="group relative bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
    <div className="flex justify-between items-start mb-2">
      <div className="font-semibold text-slate-800 text-sm">{skill.name}</div>
      <div className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full">
        {skill.level}
      </div>
    </div>
    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-300 ${skill.level === "Avanzado"
          ? "bg-gradient-to-r from-emerald-500 to-emerald-400"
          : skill.level === "Intermedio"
            ? "bg-gradient-to-r from-blue-500 to-blue-400"
            : "bg-gradient-to-r from-amber-500 to-amber-400"
          }`}
        style={{
          width: skill.level === "Avanzado" ? "88%" :
            skill.level === "Intermedio" ? "65%" : "35%"
        }}
      />
    </div>
  </div>
);
