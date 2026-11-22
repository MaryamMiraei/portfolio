"use client";
import type { ReactNode } from "react";
import Card from "../common/Card";
import TitleSection from "../common/TitleSection";
import { BrainCircuit, Code, Lightbulb, Users } from "lucide-react";
import GithubContributions from "../common/GithubContributions";
import { useTranslation } from "react-i18next";
import { TitleDescription } from "../common/TitleDescription";
import i18n from "@/i18n";

const About = () => {
  const { t } = useTranslation();
  interface IAboutItems {
    id: number;
    icon: ReactNode;
    title: string;
    description: string;
  }

  const aboutItems: IAboutItems[] = [
    {
      id: 1,
      icon: <BrainCircuit />,
      title: t("about.cards.problemSolver.title"),
      description: t("about.cards.problemSolver.description"),
    },
    {
      id: 2,
      icon: <Code />,
      title: t("about.cards.cleanCode.title"),
      description: t("about.cards.cleanCode.description"),
    },
    {
      id: 3,
      icon: <Lightbulb />,
      title: t("about.cards.continuousLearner.title"),
      description: t("about.cards.continuousLearner.description"),
    },
    {
      id: 4,
      icon: <Users />,
      title: t("about.cards.userFocused.title"),
      description: t("about.cards.userFocused.description"),
    },
  ];

  return (
    <div>
      <TitleSection title="About" description="" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div dir={i18n.language === "fa" ? "rtl" : "ltr"}>
          <Card>
            <TitleDescription
              className="p-4"
              titleVariant="primary"
              title={t("about.title")}
              descriptionVariants="primary"
              description={
                t("about.description", {
                  returnObjects: true,
                }) as string[]
              }
            />
          </Card>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          dir={i18n.language === "fa" ? "rtl" : "ltr"}
        >
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
      <div className="my-8">
        <Card>
          <GithubContributions />
        </Card>
      </div>
    </div>
  );
};

export default About;
