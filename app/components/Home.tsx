"use client";
import FloatingSphere from "../common/FloatingSphere";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="py-10 px-0 md:px-14 lg:px-16">
      <div className="flex flex-col gap-6 items-center justify-between lg:flex-row">
        <div className="max-w-[800px]">
          <h1
            className="font-bold text-4xl mb-5"
            dir={i18n.language === "fa" ? "rtl" : "ltr"}
          >
            {t("home.greeting")}
          </h1>
          <p
            className="text-lg mb-8  text-text-third"
            dir={i18n.language === "fa" ? "rtl" : "ltr"}
          >
            {t("home.description")}
          </p>
          <a href="/test_CV.pdf" target="_blank" rel="noopener noreferrer">
            <Button type="button">{t("home.button")}</Button>
          </a>
        </div>
        <div>
          <FloatingSphere />
        </div>
      </div>
    </div>
  );
};

export default Home;
