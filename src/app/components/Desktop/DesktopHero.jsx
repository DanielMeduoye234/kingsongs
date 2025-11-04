"use client";

import React, { useState, useEffect } from "react";
import styles from "./DesktopHero.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function DesktopHero() {
  const images = [
    "/images/hero-product11.png",
    "/images/hero-porduct222.png",
    "/images/hero-product33.png",
    "/images/hero-product44.png",
    "/images/hero-product5.png",
    "/images/hero-product6.png",
  ];

  const backgroundImage = "/images/desk.png";
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // ✅ Smooth scroll handler
  const scrollToFirstProduct = () => {
    // Target the first product in your "electric-scooters" section
    const firstProduct = document.querySelector(
      "#electric-scooters .ScrollSection_slideContent__KZlgU"
    );

    // Fallback: if className is hashed differently, use a more general selector
    const fallback = document.querySelector("#electric-scooters .slideContent");

    const target = firstProduct || fallback;

    if (target) {
      // adjust offset for sticky header height (if any)
      const headerOffset = window.innerWidth <= 768 ? 80 : 120;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      className={styles.desktopHero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      aria-label="Featured scooters"
    >
      <div className={styles.overlay} />

      <div className={styles.contentWrapper}>
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className={styles.badge}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Popular
          </motion.span>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            QUALITY
            <br />
            MEETS PERFORMANCE
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience the next generation of all-terrain scooters — precision
            engineered for performance, style, and unmatched comfort.
          </motion.p>

          {/* ✅ Button scrolls to first product */}
          <motion.button
            className={styles.cta}
            onClick={scrollToFirstProduct}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(238,136,84,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Our Collection
          </motion.button>
        </motion.div>

        {/* RIGHT: IMAGE ROTATION */}
        <div className={styles.imageArea}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={styles.imageWrapper}
              initial={{ opacity: 0, x: 80, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.96 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.03, rotateY: 3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={styles.heroImageInner}
              >
                <Image
                  src={images[current]}
                  alt={`Product ${current + 1}`}
                  width={780}
                  height={520}
                  priority
                  className={styles.heroImage}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.imageCounter} aria-hidden>
            <span className={styles.counterDot} />
            <span className={styles.counterText}>
              {current + 1}
              <span className={styles.counterSlash}>/</span>
              {images.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
