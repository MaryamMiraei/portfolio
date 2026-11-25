"use client";

import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useEffect, useRef, useState } from "react";
import { menuItems } from "../data/MenuItems";
import { useTranslation } from "react-i18next";
import MenuModal from "./MenuModal";
import Image from "next/image";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll Spy
  useEffect(() => {
    const sections = menuItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const handleScroll = () => {
      const marker = window.innerHeight * 0.35;

      let currentSection = sections[0];

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top <= marker) {
          currentSection = section;
        }
      });

      // Detect the last section at the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        currentSection = sections[sections.length - 1];
      }

      setActiveSection(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="flex justify-between items-center border-b border-border-first dark:border-border-second dark:bg-black bg-white h-[70px] px-6">
      <div>
        <Image
          src="/Glossy-Chrome-M-with-Red-Ribbons.png"
          alt="logo"
          width={60}
          height={60}
        />
      </div>

      <div className="flex gap-5">
        <div className="flex gap-3">
          <LanguageToggle />
          <ThemeToggle />

          <div className="relative" ref={menuRef}>
            <Menu onClose={() => setMenuModalOpen((prev) => !prev)} />

            {menuModalOpen && <MenuModal />}
          </div>
        </div>

        <nav className="hidden md:flex justify-end items-center gap-6 text-text-first dark:text-text-second px-5 font-medium">
          {menuItems.map((item) => {
            const section = item.href.replace("#", "");
            const isActive = activeSection === section;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(section)}
                className={`group relative inline-block py-2 transition-colors duration-300 ${
                  isActive
                    ? "text-text-fourth"
                    : "text-text-first dark:text-text-second hover:text-text-fourth"
                }`}
              >
                <span className="relative inline-block">
                  {t(`header.${item.title}`)}

                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 bg-text-fourth transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
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
