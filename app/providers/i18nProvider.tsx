"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

interface ProvidersProps {
  children: React.ReactNode;
}

const I18nProvider = ({ children }: ProvidersProps) => {
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "fa" || savedLanguage === "en") {
      void i18n.changeLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const updateLanguage = (language: string) => {
      document.documentElement.lang = language;

      document.documentElement.style.setProperty(
        "--text-direction",
        language === "fa" ? "rtl" : "ltr",
      );
    };

    updateLanguage(i18n.resolvedLanguage ?? "en");

    i18n.on("languageChanged", updateLanguage);

    return () => {
      i18n.off("languageChanged", updateLanguage);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
