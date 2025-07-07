"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="gradient-text primary-gradient">BuildFlow</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/demo">Demo</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/demo" className="btn btn-primary px-5 py-2">
            Get Started
          </NavLink>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white p-3 min-h-[44px] min-w-[44px]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-overlay flex flex-col pt-20 px-6 md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col space-y-6 items-center">
                <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink
                  href="/features"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </MobileNavLink>
                <MobileNavLink
                  href="/pricing"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </MobileNavLink>
                <MobileNavLink
                  href="/demo"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Demo
                </MobileNavLink>
                <MobileNavLink
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </MobileNavLink>
                <MobileNavLink
                  href="/demo"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn btn-primary mobile-btn"
                >
                  Get Started
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function NavLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`text-gray-300 hover:text-white transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  className = "",
  children,
}: {
  href: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-xl text-gray-300 hover:text-white transition-colors w-full text-center min-h-[44px] py-3 ${className}`}
    >
      {children}
    </Link>
  );
}
