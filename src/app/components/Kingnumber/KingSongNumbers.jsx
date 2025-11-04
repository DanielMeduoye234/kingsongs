"use client";

import React from "react";
import styles from "./KingSongNumbers.module.css";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function KingSongNumbers() {
  const stats = [
    { id: 1, value: "150K+", label: "Riders Worldwide" },
    { id: 2, value: "320M+", label: "Kilometers Ridden" },
    { id: 3, value: "2M+", label: "KG CO₂ Saved" },
    { id: 4, value: "4.8", label: "Avg. Customer Rating", icon: <FaStar /> },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          KingSong by the Numbers
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Join thousands of riders around the world choosing a cleaner, smarter
          way to move.
        </motion.p>

        <motion.div
          className={styles.statsBox}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <div key={stat.id} className={styles.statItem}>
              <h3 className={styles.value}>
                {stat.value} {stat.icon && <span className={styles.icon}>{stat.icon}</span>}
              </h3>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
