import type { ReactNode } from "react";
import Card from "../common/Card";
import TitleSection from "../common/TitleSection";
import { ChartColumn, Code, Lightbulb, Rocket } from "lucide-react";
import TitleDescription from "../common/TitleDescription";

const About = () => {
  interface IAboutItems {
    id: number;
    icon: ReactNode;
    title: string;
    description: string;
  }

  const aboutItems: IAboutItems[] = [
    {
      id: 1,
      icon: <Rocket />,
      title: "Problem Solver",
      description:
        "I approach complex challenges with analytical thinking and break them down into manageable solutions.",
    },
    {
      id: 2,
      icon: <Code />,
      title: "Problem Solver",
      description:
        "I approach complex challenges with analytical thinking and break them down into manageable solutions.",
    },
    {
      id: 3,
      icon: <Lightbulb />,
      title: "Problem Solver",
      description:
        "I approach complex challenges with analytical thinking and break them down into manageable solutions.",
    },
    {
      id: 4,
      icon: <ChartColumn />,
      title: "Problem Solver",
      description:
        "I approach complex challenges with analytical thinking and break them down into manageable solutions.",
    },
  ];
  return (
    <div>
      <TitleSection title="About" description="" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card>
          <TitleDescription
            className="p-4"
            titleVariant="primary"
            title="My Journey"
            descriptionVariants="primary"
            description={`Hi, I'm a Software Engineering enthusiast living in Bangalore. I enjoy turning creative ideas into working solutions in my spare time. 

          I've been exploring tech for about 2 years, with interests spanning across different development areas. I'm fascinated by intuitive digital experiences that just feel right. 
          
          When I'm not working on code professionally, you'll find me reading about emerging technologies, contributing to open-source projects, and constantly picking up new skills and hobbies.`}
          />
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {aboutItems.map((item) => (
            <Card className="group" key={item.id}>
              <div className="border border-border-first w-fit p-2 rounded-full ring group-hover:ring-text-fourth  group-hover:shadow-[0_4px_10px_rgba(115,6,6,0.25)] group-hover:border-text-fourth m-4 mb-0">
                {item.icon}
              </div>
              <TitleDescription
                className="p-4"
                title={item.title}
                description={item.description}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
