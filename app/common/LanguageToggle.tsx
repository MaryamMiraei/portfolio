"use client";

import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import Button from "./Button";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLanguage = i18n.resolvedLanguage === "fa" ? "en" : "fa";

    void i18n.changeLanguage(nextLanguage);

    localStorage.setItem("language", nextLanguage);
  };

  return (
    <Button type="button" variant="third" onClick={toggleLanguage}>
      <Globe size={20} />
      {/* <span>{i18n.resolvedLanguage === "fa" ? "EN" : "FA"}</span> */}
    </Button>
  );
};

export default LanguageToggle;
