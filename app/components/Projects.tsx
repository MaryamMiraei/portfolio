import TitleSection from "../common/TitleSection";
import Card from "../common/Card";
import TitleDescription from "../common/TitleDescription";
import { ExternalLink } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import ImageSlider from "../common/ImageSlider";
import MotionButton from "../common/MotionButton";

interface IProjectsItems {
  id: string;
  imgs: string[];
  title: string;
  description: string;
  liveDemoLink?: string;
  gitHubLink?: string;
}
const projectsItems: IProjectsItems[] = [
  {
    id: crypto.randomUUID(),
    imgs: ["/test.png", "/m-logo.png"],
    title: "test",
    description:
      "A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.",
    liveDemoLink: "https://github.com/MaryamMiraei",
    gitHubLink: "https://github.com/MaryamMiraei",
  },
  {
    id: crypto.randomUUID(),
    imgs: ["/test.png"],
    title: "test",
    description:
      "A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.",
    liveDemoLink: "https://github.com/MaryamMiraei",
    gitHubLink: "https://github.com/MaryamMiraei",
  },
  {
    id: crypto.randomUUID(),
    imgs: ["/test.png"],
    title: "test",
    description:
      "A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.",
    liveDemoLink: "",
    gitHubLink: "https://github.com/MaryamMiraei",
  },
  {
    id: crypto.randomUUID(),
    imgs: ["/test.png"],
    title: "test",
    description:
      "A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.",
    liveDemoLink: "",
    gitHubLink: "https://github.com/MaryamMiraei",
  },
  {
    id: crypto.randomUUID(),
    imgs: ["/test.png"],
    title: "test",
    description:
      "A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.",
    liveDemoLink: "",
    gitHubLink: "https://github.com/MaryamMiraei",
  },
];

const Projects = () => {
  return (
    <div>
      <TitleSection title="Projects" description="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
        {projectsItems.map((item) => (
          <Card key={item.id} className="hover:-translate-y-2 overflow-hidden">
            <ImageSlider images={item.imgs} title={item.title} />

            <TitleDescription
              title={item.title}
              description={item.description}
              className="p-4"
            />
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
