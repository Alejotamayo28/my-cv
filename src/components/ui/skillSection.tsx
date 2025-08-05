import { SkillSectionProps } from "@/types/cv";
import { SkillCard } from "./skillCard";

export const SkillSection: React.FC<SkillSectionProps> = ({ title, icon: Icon, skills }) => (
  <div className="mb-8">
    <div className="flex items-center mb-4">
      <Icon className="h-5 w-5 mr-2 text-slate-600" />
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  </div>
);
