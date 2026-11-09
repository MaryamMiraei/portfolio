import { MonitorSmartphone } from "lucide-react";
import Card from "../common/Card";
import TitleSection from "../common/TitleSection";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const skillsItems = [
  { Icon: SiReact, color: "#61DAFB", title: "React" },
  { Icon: SiNextdotjs, color: "#000000", title: "Next.js" },
  { Icon: SiTypescript, color: "#3178C6", title: "TypeScript" },
  { Icon: SiJavascript, color: "#F7DF1E", title: "JavaScript" },
  { Icon: SiTailwindcss, color: "#06B6D4", title: "Tailwind CSS" },
  { Icon: SiGit, color: "#F05032", title: "Git" },
];

const Skills = () => {
  return (
    <div>
      <TitleSection title="Skills" description="" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Card className="p-5">
          <div className="flex gap-2 items-center font-bold mb-6">
            <MonitorSmartphone />
            <p>Frontend</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skillsItems.map((item) => {
              const Icon = item.Icon;

              return (
                <div key={item.title} className="flex items-center gap-2 rounded-full border-border-second shadow-custom-first dark:shadow-custom-second bg-white dark:bg-border-second px-3 py-2">
                  <Icon size={22} color={item.color} />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
