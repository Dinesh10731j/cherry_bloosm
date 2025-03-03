"use client";

import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Cherry_Bloosm_Logo from "../assets/images/cherry_blossom_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-gray-200">
      <div className="container mx-auto flex items-center justify-between p-4 md:px-8 lg:px-12">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Image
            src={Cherry_Bloosm_Logo}
            alt="Cafe Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg font-bold font-[cursive] sm:text-xl md:text-2xl lg:text-3xl"
          >
            Cherry Blossom Cafe
          </motion.h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-6">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            className="hover:text-pink-300"
          >
            Home
          </motion.a>
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.1 }}
            className="hover:text-pink-300"
          >
            Menu
          </motion.a>
          <motion.a
            href="#specials"
            whileHover={{ scale: 1.1 }}
            className="hover:text-pink-300"
          >
            Specials
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.1 }}
            className="hover:text-pink-300"
          >
            About
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="hover:text-pink-300"
          >
            Contact
          </motion.a>
        </nav>
        {/* Mobile Menu Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden"
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-pink-300 z-20"
          >
            <div className="container mx-auto flex flex-col space-y-4 p-4">
              <motion.a
                href="#home"
                whileHover={{ scale: 1.1 }}
                className="hover:text-pink-100"
              >
                Home
              </motion.a>
              <motion.a
                href="#menu"
                whileHover={{ scale: 1.1 }}
                className="hover:text-pink-100"
              >
                Menu
              </motion.a>
              <motion.a
                href="#specials"
                whileHover={{ scale: 1.1 }}
                className="hover:text-pink-100"
              >
                Specials
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.1 }}
                className="hover:text-pink-100"
              >
                About
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1}}
                className="hover:text-pink-100"
              >
                Contact
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
