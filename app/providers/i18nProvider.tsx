"use client";

import { useEffect, useState, type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

interface ProvidersProps {
  children: ReactNode;
}

const I18nProvider = ({ children }: ProvidersProps) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeLanguage = async () => {
      const savedLanguage = localStorage.getItem("language");

      const language =
        savedLanguage === "fa" || savedLanguage === "en" ? savedLanguage : "en";

      await i18n.changeLanguage(language);

      document.documentElement.lang = language;

      document.documentElement.style.setProperty(
        "--text-direction",
        language === "fa" ? "rtl" : "ltr",
      );

      setIsReady(true);
    };

    void initializeLanguage();

    const updateLanguage = (language: string) => {
      document.documentElement.lang = language;

      document.documentElement.style.setProperty(
        "--text-direction",
        language === "fa" ? "rtl" : "ltr",
      );
    };

    i18n.on("languageChanged", updateLanguage);

    return () => {
      i18n.off("languageChanged", updateLanguage);
    };
  }, []);

  if (!isReady) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
