"use client";

import FloatingSphere from "../common/FloatingSphere";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import Image from "next/image";

const Home = () => {
  const { t } = useTranslation();

  const isFa = i18n.language === "fa";

  return (
    <section className="w-full pt-10 pb-8 px-5 sm:px-8 lg:px-6 xl:px-0">
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1
          md:grid-cols-[220px_minmax(0,1fr)]
          xl:grid-cols-[300px_minmax(0,1fr)_220px]
          items-center
          gap-8 lg:gap-10
        "
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <div
            className="
            relative
            w-48 h-48
            sm:w-56 sm:h-56
            lg:w-64 lg:h-64
            xl:w-[300px] xl:h-[300px]
            rounded-full overflow-hidden shrink-0
          "
          >
            <Image
              alt="Maryam Miraei"
              src="/avatar.jpg"
              fill
              priority
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1280px) 256px, 300px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Introduction */}
        <div
          dir={isFa ? "rtl" : "ltr"}
          className={`
            w-full max-w-[800px] mx-auto
            text-center md:text-start
          `}
        >
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] mb-5 leading-tight">
            {t("home.greeting")}
          </h1>

          <h2 className="font-bold text-xl sm:text-2xl mb-5">
            {t("home.title")}
          </h2>

          <p className="text-base sm:text-lg lg:text-xl mb-8 text-text-third leading-relaxed">
            {t("home.description")}
          </p>

          <p className="font-bold text-lg sm:text-xl mb-5">
            {t("home.subDescription")}
          </p>

          <a
            href="/Maryam Miraei Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button type="button">{t("home.button")}</Button>
          </a>
        </div>

        {/* Floating Sphere */}
        <div
          className="
          w-full
          md:col-span-2
          xl:col-span-1
          flex justify-center items-center
          min-w-0
        "
        >
          <FloatingSphere />
        </div>
      </div>
    </section>
  );
};

export default Home;
