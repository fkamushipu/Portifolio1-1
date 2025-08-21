import SectionHeader from "../SectionHeader";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaDatabase 
} from "react-icons/fa";
import { SiNextdotjs} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-6xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-6xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-6xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-700 dark:text-gray-200 text-6xl" /> },
    { name: "VS Code", icon: <VscVscode  className="text-blue-400 text-6xl" /> },
    { name: "MySQL", icon: <FaDatabase className="text-emerald-600 text-6xl" /> },
  ];

  return (
    <div className="bg-[#0F0F2D] text-white font-sans p-20">
      <SectionHeader 
        title="My" 
        highlight="Skills" 
        subtitle=" Here are my skills "
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-6 bg-[#1F1F3D] rounded-md shadow-md hover:scale-105 transition transition-900"
          >
            {skill.icon}
            <p className="mt-3 pt-6 text-sm border-t border-gray-700 w-full text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
