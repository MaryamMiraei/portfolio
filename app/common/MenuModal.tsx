"use client";

import { useTranslation } from "react-i18next";
import { menuItems } from "../data/MenuItems";
import Card from "./Card";



const MenuModal = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute top-full right-0 z-50 mt-3 w-52">
      <Card className="flex flex-col gap-2 p-4">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="py-2 text-text-first transition-colors duration-300 hover:text-text-fourth dark:text-text-second"
          >
            {t(`header.${item.title}`)}
          </a>
        ))}
      </Card>
    </div>
  );
};

export default MenuModal;
