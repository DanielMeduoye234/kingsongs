"use client";

import React from "react";
import styles from "../Hero/hero.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const scooters = [
  {
    id: 1,
    name: "E1 KSE",
    description:
      "Compact performance meets refined engineering. The E1 KSE combines portability with power, featuring precise controls and an ultra-slim frame.",
    image: "/images/ese.jpg",
  },
  {
    id: 2,
    name: "N14 KSE",
    description:
      "Take command of every journey with the N14 KSE. Its dual suspension system, lightweight build, and superior traction ensure a smoother, more stable ride.",
    image: "/images/n144.png",
  },
  {
    id: 3,
    name: "N15 PRO",
    description:
      "The N15 PRO redefines performance. Equipped with a high-torque motor and advanced regenerative braking, it delivers unmatched control and acceleration.",
    image: "/images/n15.webp",
  },
  {
    id: 4,
    name: "N12 PRO",
    description:
      "Engineered for versatility and durability, the N12 PRO thrives on both urban streets and open roads.",
    image: "/images/n121.png",
  },
  {
    id: 5,
    name: "N11 KSE",
    description:
      "A masterpiece of design and technology, the N11 KSE delivers smooth power and unmatched agility.",
    image: "/images/n11.png",
  },
  {
    id: 6,
    name: "Electric Bike",
    description:
      "Ride farther, faster, and smarter. The KingSong Electric Bike merges advanced pedal-assist technology with ergonomic design for a ride that’s both efficient and exhilarating.",
    image: "/images/sco.png",
  },
  {
    id: 7,
    name: "EUC",
    description:
      "The future of personal mobility. The EUC offers self-balancing control powered by intelligent gyroscope technology, allowing you to glide effortlessly through any environment with confidence and precision.",
    image: "/images/euccc.png",
  },
];

// Framer Motion variants
const textContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  // ✅ Smart scroll handler that targets the first product in electric-scooters
  const scrollToFirstProduct = () => {
    const firstProduct = document.querySelector(
      "#electric-scooters .ScrollSection_slideContent__KZlgU"
    );

    const fallback = document.querySelector("#electric-scooters .slideContent");
    const target = firstProduct || fallback;

    if (target) {
      const headerOffset = window.innerWidth <= 768 ? 90 : 120;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="top" className={styles.hero}>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className={styles.swiperContainer}
      >
        {scooters.map((scooter) => (
          <SwiperSlide key={scooter.id}>
            <div className={styles.slide}>
              {/* TEXT FIRST (Model name + Description + CTA for mobile) */}
              <motion.div
                className={styles.textBlock}
                variants={textContainer}
                initial="hidden"
                animate="visible"
              >
                {/* ✅ Model name */}
                <motion.h1 className={styles.title} variants={textItem}>
                  {scooter.name}
                </motion.h1>

                {/* ✅ Image (centered below name) */}
                <motion.div
                  className={styles.imageContainer}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={styles.imageWrapper}
                  >
                    <Image
                      src={scooter.image || "/images/placeholder.png"}
                      alt={scooter.name}
                      width={600}
                      height={600}
                      priority
                      className={styles.heroImage}
                    />
                  </motion.div>
                </motion.div>

                {/* ✅ Description */}
                <motion.p className={styles.description} variants={textItem}>
                  {scooter.description}
                </motion.p>

                {/* ✅ CTA scrolls to first product */}
                <motion.button
                  className={styles.cta}
                  variants={textItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToFirstProduct}
                >
                  Explore KingSong Collection
                </motion.button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
