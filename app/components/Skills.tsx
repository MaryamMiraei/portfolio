import { ChartNoAxesCombined, MonitorSmartphone } from "lucide-react";
import Card from "../common/Card";
import TitleSection from "../common/TitleSection";
import { icons } from "../data/Icons";

const Skills = () => {
  return (
    <div>
      <TitleSection title="Skills" description="" />

      <div className="grid grid-cols-1 gap-5">
        <Card className="p-5">
          <div className="flex gap-2 items-center font-bold mb-6">
            <MonitorSmartphone />
            <p>Frontend</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {icons.map((item) => {
              const Icon = item.Icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-2 rounded-full border-border-second shadow-custom-first dark:shadow-custom-second bg-white dark:bg-border-second px-3 py-2"
                >
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
