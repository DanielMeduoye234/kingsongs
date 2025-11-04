"use client";

import React from "react";
import styles from "./WhyChoose.module.css";
import { motion } from "framer-motion";
import { FaLightbulb, FaCogs, FaBolt } from "react-icons/fa";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyChoose() {
  const reasons = [
    {
      id: 1,
      icon: <FaLightbulb />,
      title: "Unique Design",
      description:
        "Innovation meets style — every KingSong model blends cutting-edge design with sleek urban aesthetics.",
    },
    {
      id: 2,
      icon: <FaCogs />,
      title: "Quality Products",
      description:
        "Built for durability and performance. Every component is tested to meet the highest engineering standards.",
    },
    {
      id: 3,
      icon: <FaBolt />,
      title: "Performance in Every Class",
      description:
        "Experience unmatched power, balance, and range — redefining what electric mobility can achieve.",
    },
  ];

  return (
    // ✅ Added ID for smooth scroll navigation
    <motion.section
      id="why-choose-us"
      className={styles.whyChoose}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          custom={0}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Why Choose KingSong
        </motion.h2>

        <motion.p
          className={styles.subheading}
          custom={1}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Trusted by riders across Canada — engineered for those who demand
          excellence in design, safety, and performance.
        </motion.p>

        <motion.div
          className={styles.cards}
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              className={styles.card}
              variants={cardItem}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className={styles.icon}
                initial={{ rotate: -15, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {reason.icon}
              </motion.div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
