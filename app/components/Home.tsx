"use client";
import FloatingSphere from "../common/FloatingSphere";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="py-10">
      <div className="flex flex-col gap-6 items-center justify-between lg:flex-row">
        <div className="lg:max-w-2/3">
          <h1
            className="font-bold text-4xl mb-5"
            dir={i18n.language === "fa" ? "rtl" : "ltr"}
          >
            {t("home.greeting")}
          </h1>
          <p
            className="text-xl mb-8  text-text-third"
            dir={i18n.language === "fa" ? "rtl" : "ltr"}
          >
            {t("home.description")}
          </p>
          <Button type="button">{t("home.button")}</Button>
        </div>
        <FloatingSphere />
      </div>
    </div>
  );
};

export default Home;
