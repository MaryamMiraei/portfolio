"use client";
import FloatingSphere from "../common/FloatingSphere";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import Image from "next/image";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-10 px-0 ">
      <div className="flex flex-col gap-6 items-center justify-between lg:flex-row">
        <div className="rounded-full overflow-hidden">
          <Image alt="avatar" src={"/avatar.jpg"} width={1000} height={1000}/>
        </div>
        <div
          className="max-w-[800px]"
          dir={i18n.language === "fa" ? "rtl" : "ltr"}
        >
          <h1 className="font-bold text-4xl mb-5">{t("home.greeting")}</h1>
          <h2 className="font-bold text-xl mb-5">{t("home.title")}</h2>
          <p className="text-lg mb-8  text-text-third">
            {t("home.description")}
          </p>
          <p className="font-bold text-xl mb-5">{t("home.subDescription")}</p>

          <a
            href="/Maryam Miraei Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
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
