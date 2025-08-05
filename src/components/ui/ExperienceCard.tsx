import { ExperienceCardProps } from "@/types/cv";
import { ExternalLink, MapPin } from "lucide-react";

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => (
  <div className="group relative bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-2xl" />

    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h3>
        <div className="text-slate-600 font-medium mb-2">
          {exp.company}
        </div>
        <div className="flex items-center text-sm text-slate-500 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          {exp.location}
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm font-semibold px-3 py-1.5 rounded-full border border-blue-200">
        {exp.period}
      </div>
    </div>

    {exp.tags && exp.tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-4">
        {exp.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md transition-colors duration-200">
            {tag}
          </span>
        ))}
      </div>
    )}

    <ul className="space-y-2.5">
      {exp.achievements.map((achievement, i) => (
        <li key={i} className="flex items-start text-slate-700 text-sm leading-relaxed">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
          {achievement}
        </li>
      ))}
    </ul>

    <div className="flex gap-3 mt-4 pt-4 border-t border-slate-100">
      {exp.repoLink && (
        <a
          href={exp.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 group"
        >
          Código
        </a>
      )}
      {exp.linkedinLink && (
        <a
          href={exp.linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 group"
        >
          <ExternalLink className="h-4 w-4 mr-1.5 group-hover:scale-110 transition-transform" />
          LinkedIn
        </a>
      )}
    </div>
  </div>
);
