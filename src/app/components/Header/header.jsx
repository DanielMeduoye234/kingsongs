"use client";

import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Enhanced Smooth Scroll (handles sticky header + precise anchor targeting)
  const handleScroll = (id) => {
    // Special handling for "Our Collections"
    if (id === "electric-scooters" || id === "first-product") {
      const firstProductContent = document.querySelector(
        "#electric-scooters .slideContent, #electric-scooters .ScrollSection_slideContent__KZlgU"
      );

      if (firstProductContent) {
        const offset = window.innerWidth <= 768 ? -100 : -150; // adjust offset for mobile/desktop
        const y =
          firstProductContent.getBoundingClientRect().top +
          window.pageYOffset +
          offset;

        window.scrollTo({ top: y, behavior: "smooth" });
        setMenuOpen(false);
        return;
      }
    }

    // Default scroll for all other sections
    const section = document.getElementById(id);
    if (section) {
      const offset = window.innerWidth <= 768 ? -100 : -150;
      const y = section.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };

  // ✅ Navigation items with accurate section IDs
  const navItems = [
    { name: "Our Collections", id: "electric-scooters" },
    { name: "Partners", id: "partners" },
    { name: "Why Choose Us", id: "why-choose-us" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Social Reels", id: "social-reels" },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      {/* LEFT: Logo */}
      <div
        className={styles.logo}
        onClick={() => handleScroll("top")}
        style={{ cursor: "pointer" }}
      >
        <Image
          src="/images/logo.png"
          alt="KingSong Canada"
          width={100}
          height={40}
          priority
        />
      </div>

      {/* CENTER: Desktop Navigation */}
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index} onClick={() => handleScroll(item.id)}>
              {item.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* RIGHT: Desktop Icons */}
      <div className={styles.icons}>
        <FaSearch className={styles.icon} />
        <div className={styles.flag}>
          <Image
            src="/images/cana.png"
            alt="Canada Flag"
            width={26}
            height={26}
            priority
          />
        </div>
        <FaUser className={styles.icon} />
        <FaShoppingCart className={styles.icon} />
      </div>

      {/* HAMBURGER — Mobile */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={index} onClick={() => handleScroll(item.id)}>
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
