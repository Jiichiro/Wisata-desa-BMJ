"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from 'motion/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
      <nav className="flex items-center justify-between py-4 px-10 md:px-36 xl:px-72">
        <Link href="/" className="flex items-center space-x-4">
          <Image src="https://placehold.co/40x40/webp" alt="LOGO" width={40} height={40} />
        </Link>

        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/" className="hover:underline underline-offset-4">Home</Link>
          <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          <Link href="/galery" className="hover:underline underline-offset-4">Galery</Link>
          <Link href="/accommodation" className="hover:underline underline-offset-4">Find accommodation</Link>
          <Link href="/trip" className="hover:underline underline-offset-4">Plan your trip</Link>
        </div>

        <div className="md:hidden relative" ref={dropdownRef}>
          <button onClick={toggleMenu} className="text-gray-500 hover:text-white transition duration-150">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {
          isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20}}
              animate={{ opacity: 1, x: 0}}
              exit={{ opacity: 0, x: 20 }}
              transition={{duration: .2}}
              className={
                `fixed top-16 right-5 w-60 bg-white bg-opacity-95 shadow-xl rounded-lg border border-gray-200 py-2 z-50 transition-all"
                ${isOpen ? "opacity-100 scale-100 animate-fadeIn" : "opacity-0 scale-95 pointer-events-none"}`
              }
            >
              <Link href="/" className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded-t-lg">Home</Link>
              <Link href="/about" className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded-t-lg">About</Link>
              <Link href="/gallery" className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Gallery</Link>
              <Link href="/accommodation" className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Find accommodation</Link>
              <Link href="/trip" className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded-b-lg">Plan your trip</Link>
            </motion.div>
          )
        }
      </AnimatePresence>
    </>
  );
};

export default Navbar;
