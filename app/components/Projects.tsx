"use client";
import TitleSection from "../common/TitleSection";
import Card from "../common/Card";
import { ExternalLink } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import ImageSlider from "../common/ImageSlider";
import MotionButton from "../common/MotionButton";
import { TitleDescription } from "../common/TitleDescription";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  interface IProjectsItems {
    id: string;
    imgs: string[];
    title: string;
    description: string;
    technologies: string[];
    liveDemoLink: string;
    gitHubLink: string;
  }
  const projectsItems: IProjectsItems[] = [
    {
      id: crypto.randomUUID(),
      imgs: ["/QEM1.png", "/QEM2.png", "/QEM3.png", "/QEM4.png", "/QEM5.png"],
      title: t("projects.ems.title"),
      description: t("projects.ems.description"),
      technologies: t("projects.ems.technologies", {
        returnObjects: true,
      }) as string[],
      liveDemoLink:
        "https://quick-esm-employee-management-system.m-miraei94.workers.dev/",
      gitHubLink:
        "https://github.com/MaryamMiraei/Full-Stack-Employee-Management-System",
    },
  ];
  return (
    <div>
      <TitleSection title="Projects" description="" />
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5 mb-8">
        {projectsItems.map((item) => (
          <Card key={item.id} className="hover:-translate-y-2 overflow-hidden">
            <ImageSlider images={item.imgs} title={item.title} />

            <TitleDescription
              title={item.title}
              description={item.description}
              className="p-4"
            />
            <div className="px-4 pb-6 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full border border-border-first text-text-third"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="px-4 pt-0 pb-6 flex flex-wrap  gap-4 ">
              {item.liveDemoLink && (
                <div className="flex items-center gap-2 cursor-pointer transition-colors duration-300 hover:text-text-fourth">
                  <ExternalLink size={20} />
                  <a href={item.liveDemoLink} target="_blank">
                    Live Demo
                  </a>
                </div>
              )}
              {item.gitHubLink && (
                <div className="flex items-center gap-2 cursor-pointer transition-colors duration-300 hover:text-text-fourth">
                  <GrGithub size={20} />
                  <a href={item.gitHubLink} target="_blank">
                    GitHub
                  </a>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
      <MotionButton
        title="View More Projects"
        link="https://github.com/MaryamMiraei"
        icon={<GrGithub size={20} />}
      />
    </div>
  );
};

export default Projects;
