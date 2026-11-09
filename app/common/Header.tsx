"use client";

import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const Header = () => {
  const { t } = useTranslation();

  const [activeSection, setActiveSection] = useState("home");
  const menuItems = [
    { title: t("header.home"), href: "#home" },
    { title: t("header.about"), href: "#about" },
    { title: t("header.projects"), href: "#projects" },
    { title: t("header.skills"), href: "#skills" },
    { title: t("header.certificate"), href: "#certificate" },
    { title: t("header.contact"), href: "#contact" },
  ];
  return (
    <header className="flex justify-between items-center border-b border-border-first dark:border-border-second dark:bg-black bg-white h-[70px] pr-0 pl-6">
      <div>
        <img
          src="/Glossy-Chrome-M-with-Red-Ribbons.png"
          alt="logo"
          className="size-14"
        />
      </div>
      <div className="flex gap-5">
        <div className="flex gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <Menu />
        </div>
        <nav className="hidden md:flex justify-end items-center gap-6 text-text-first dark:text-text-second px-5 font-medium">
          {menuItems.map((item) => {
            const section = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(section)}
                className={`group relative inline-block py-2 transition-colors duration-300 ${
                  activeSection === section
                    ? "text-text-fourth"
                    : "text-text-first dark:text-text-second hover:text-text-fourth"
                }`}
              >
                <span className="relative inline-block">
                  {item.title}

                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 bg-text-fourth transition-all duration-300 ease-out ${
                      activeSection === section
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
