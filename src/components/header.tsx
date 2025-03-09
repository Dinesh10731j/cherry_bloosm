import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Cherry_Bloosm_Logo from "../assets/images/cherry_blossom_logo.png";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-300 ${scrolled ? "fixed top-0 left-0 w-full bg-pink-300 shadow-lg z-10" : ""} text-white`}
    >
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
            className="text-lg font-bold font-[cursive] sm:text-xl md:text-2xl lg:text-3xl -z-"
          >
            Cherry Blossom Cafe
          </motion.h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-6 font-[cursive] font-bold">
          <Link
            href="/"
           
            className="hover:text-pink-500"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="hover:text-pink-500"
          >
            Menu
          </Link>
          <Link
            href="/specials"
            className="hover:text-pink-500"
          >
            Specials
          </Link>
          <Link
            href="/about"
            className="hover:text-pink-500"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-pink-500"
          >
            Contact
          </Link>
        </nav>
        {/* Mobile Menu Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden"
        >
          <Menu className="w-6 h-6 cursor-pointer" />
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
              <Link
                href="/"
                className="hover:text-pink-500"
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="hover:text-pink-500"
              >
                Menu
              </Link>
              <Link
                href="/specials"
                className="hover:text-pink-500"
              >
                Specials
              </Link>
              <Link
                href="/about"
                className="hover:text-pink-500"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-pink-500"
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
