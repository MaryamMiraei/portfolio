"use client";

import TitleSection from "../common/TitleSection";
import Card from "../common/Card";
import { TitleDescription } from "../common/TitleDescription";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";

interface IExperienceItem {
  position: string;
  company: string;
  date: string;
  description: string[];
}

const WorkExperience = () => {
  const { t } = useTranslation();

  const experiences = t("experience.items", {
    returnObjects: true,
  }) as IExperienceItem[];

  return (
    <div>
      <TitleSection title={t("experience.title")} description="" />

      <div
        dir={i18n.language === "fa" ? "rtl" : "ltr"}
        className="flex flex-col gap-6"
      >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {experiences.map((item, index) => (
            <Card key={`${item.position}-${index}`} className="p-4">
              <TitleDescription
                title={item.position}
                titleVariant="primary"
                descriptionVariants="primary"
                description={item.description}
              />

              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-text-third">
                {item.company && <span>{item.company}</span>}

                {item.company && item.date && <span>|</span>}

                <span>{item.date}</span>
              </div>
            </Card>
        ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
