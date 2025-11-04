"use client";

import React from "react";
import styles from "./partnersScroller.module.css";
import Image from "next/image";

export default function PartnersScroller() {
  const partners = [
    "/images/partner1.png",
    "/images/partner2.png",
    "/images/partner3.png",
    "/images/partner4.png",
    "/images/partner6.png",
    "/images/partner7.png",
    "/images/partner8.png",
  ];

  return (
    // ✅ Added section ID for smooth scroll linking
    <section id="partners" className={styles.scrollerSection}>
      <div className={styles.scrollerWrapper}>
        {/* Left Gradient Overlay */}
        <div className={`${styles.fadeOverlay} ${styles.left}`}></div>

        {/* Infinite Scroll Track */}
        <div className={styles.scrollerTrack}>
          {[...partners, ...partners].map((src, index) => (
            <div key={index} className={styles.logoItem}>
              <Image
                src={src}
                alt={`Partner logo ${index + 1}`}
                width={150}
                height={100}
                className={styles.logo}
              />
            </div>
          ))}
        </div>

        {/* Right Gradient Overlay */}
        <div className={`${styles.fadeOverlay} ${styles.right}`}></div>
      </div>
    </section>
  );
}
