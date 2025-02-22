"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { Home, Images, Info, Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

interface linkData {
  href: string;
  name: string;
  icon: ReactNode;
}

const links: linkData[] = [
  {
    href: "/",
    name: "Beranda",
    icon: <Home />,
  },
  {
    href: "/about",
    name: "Tentang Kami",
    icon: <Info />,
  },
  {
    href: "/galery",
    name: "Galeri",
    icon: <Images />, 
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="sticky flex items-center justify-between py-4 px-10 md:px-36 xl:px-72 z-50 bg-white dark:bg-gray-900 transition duration-300">
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="https://placehold.co/40x40/webp"
            alt="LOGO"
            width={40}
            height={40}
          />
        </Link>

        <div className="hidden md:flex space-x-6">
          {links.map((d, i) => (
            <Link
              key={i}
              href={d.href}
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              {d.name}
            </Link>
          ))}
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 right-4 z-50 border-gray-200 dark:border-gray-700"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-gray-200" />
            ) : (
              <Moon className="h-4 w-4 text-gray-700" />
            )}
          </Button>
        </div>

        <div className="md:hidden relative" ref={dropdownRef}>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition duration-150"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className={`fixed grid grid-cols-5 top-16 right-5 w-60 bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 py-2 z-50 transition-all"
                ${
                  isOpen
                    ? "opacity-100 scale-100 animate-fadeIn"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
          >
            <div className="w-full h-full col-span-4">
              {links.map((d, i) => (
                <Link
                  key={i}
                  href={d.href}
                  className="flex flex-row gap-4 px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-t-lg"
                >
                  {d.icon}
                  <p>{d.name}</p>
                </Link>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="col-span-1 px-5 border-gray-200 dark:border-gray-700"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-gray-200" />
              ) : (
                <Moon className="h-4 w-4 text-gray-700" />
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;