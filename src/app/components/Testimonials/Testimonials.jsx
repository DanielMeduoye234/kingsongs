"use client";

import React from "react";
import styles from "./Testimonials.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Alex M.",
    comment:
      "KingSong scooters are absolutely top-tier — powerful, stylish, and built to last. Worth every penny.",
    avatar: "/images/avatar1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophie L.",
    comment:
      "I use my N14 KSE for my daily commute, and it’s been flawless. Smooth rides and great battery life!",
    avatar: "/images/avatar2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Daniel W.",
    comment:
      "Excellent build quality and customer support. KingSong really understands what riders need.",
    avatar: "/images/avatar3.png",
    rating: 4,
  },
  {
    id: 4,
    name: "Priya C.",
    comment:
      "The design is stunning, and it feels futuristic. It’s definitely a head-turner on the streets.",
    avatar: "/images/avatar4.png",
    rating: 5,
  },
  {
    id: 5,
    name: "Chris T.",
    comment:
      "Incredible performance and speed! I’ve tested many scooters, but nothing feels as premium as this.",
    avatar: "/images/avatar5.png",
    rating: 5,
  },
  {
    id: 6,
    name: "Liam R.",
    comment:
      "Lightweight, reliable, and super fun to ride. I love how easy it is to fold and carry around.",
    avatar: "/images/avatar6.png",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    // ✅ Added ID for smooth scroll navigation
    <motion.section
      id="testimonials"
      className={styles.testimonials}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What Our Riders Say
        </motion.h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.slider}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                className={styles.card}
                whileHover={{
                  y: -6,
                  boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.avatar}>
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={60}
                    height={60}
                    className={styles.avatarImg}
                  />
                </div>
                <p className={styles.comment}>“{t.comment}”</p>
                <h4 className={styles.name}>{t.name}</h4>
                <div className={styles.stars}>
                  {"★".repeat(t.rating)}
                  {"☆".repeat(5 - t.rating)}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
