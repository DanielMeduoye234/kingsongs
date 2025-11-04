"use client";

import React, { useRef, useEffect } from "react";
import styles from "./SocialCarousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    src: "/videos/n11.MP4",
    title: "KingSong N11 Pro Electric Scooter",
    price: "$1,299.00 CAD",
  },
  {
    id: 2,
    src: "/videos/n14.MP4",
    title: "KingSong N14 KSE Electric Scooter",
    price: "$1,099.00 CAD",
  },
  {
    id: 3,
    src: "/videos/n12.MP4",
    title: "KingSong N12 Pro Scooter",
    price: "$1,039.00 CAD",
  },
  {
    id: 4,
    src: "/videos/euc.MP4",
    title: "KingSong EUC OneWheel Style",
    price: "$1,499.00 CAD",
  },
  {
    id: 5,
    src: "/videos/eucc.mp4",
    title: "KingSong EUC Electric Unicycle",
    price: "$1,999.00 CAD",
  },
];

export default function SocialCarousel() {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);

  // ✅ Auto-play all videos when mounted
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video
          .play()
          .catch((err) =>
            console.warn("Autoplay blocked for a video:", err.message)
          );
      }
    });
  }, []);

  return (
    // ✅ Added ID for header navigation
    <motion.section
      id="social-reels"
      className={styles.socialSection}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <h2>AS SEEN ON</h2>
        <p>Trusted by riders, featured by professionals.</p>
      </motion.div>

      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        speed={12000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1.05, centeredSlides: true },
          600: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className={styles.carousel}
      >
        {videos.concat(videos).map((video, i) => (
          <SwiperSlide key={`${video.id}-${i}`} className={styles.slide}>
            <motion.div
              className={styles.videoWrapper}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={video.src}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                className={styles.video}
              />

              <div className={styles.overlay}>
                <div className={styles.info}>
                  <h4>{video.title}</h4>
                  <p>{video.price}</p>
                </div>
                <button className={styles.cartBtn}>
                  <FaShoppingCart />
                </button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
