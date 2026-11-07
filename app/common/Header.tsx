import { Globe, Moon, Sun } from "lucide-react";
import Button from "./Button";
import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";

const menuItems = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b border-border-first dark:border-border-second dark:bg-black bg-white h-[60px]">
      <div></div>
      <div className="flex gap-3">
        <Button type="button" variant="secondary">
          <Globe />
        </Button>
        <ThemeToggle />
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <nav className="hidden md:flex justify-end items-center gap-4 text-text-first dark:text-text-second px-8 font-medium">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group relative inline-block py-2 text-text-first dark:text-text-second hover:text-text-fourth"
          >
            <span className="relative inline-block">
              {item.title}

              {/* Animated underline */}
              <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-text-fourth transition-all duration-300 ease-out group-hover:w-full" />
            </span>

            {/* Animated text color */}
            {/* <span className="absolute inset-0 flex items-center justify-center bg-linear-to-r from-red-700 via-red-700 to-red-700 bg-clip-text text-transparent [clip-path:inset(0_50%_0_50%)] transition-[clip-path] duration-300 ease-out group-hover:[clip-path:inset(0_0%_0_0%)]"> */}
              {/* {item.title} */}
            {/* </span> */}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
