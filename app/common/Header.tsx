"use client";

import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useEffect, useRef, useState } from "react";
import { menuItems } from "../data/MenuItems";
import { useTranslation } from "react-i18next";
import MenuModal from "./MenuModal";
const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);
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

  return (
    <header className="flex justify-between items-center border-b border-border-first dark:border-border-second dark:bg-black bg-white h-[70px] px-6">
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
          <div className="relative" ref={menuRef}>
            <Menu onClose={() => setMenuModalOpen((prev) => !prev)} />
            {menuModalOpen && <MenuModal />}
          </div>
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
                  {t(`header.${item.title}`)}

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
        {/*  */}
      </div>
    </header>
  );
};

export default Header;
