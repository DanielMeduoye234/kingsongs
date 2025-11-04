"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./ScrollSection.module.css";
import {
  FaTachometerAlt,
  FaBolt,
  FaRoad,
  FaTools,
  FaDollarSign,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

const scooters = [
  {
    id: 1,
    title: "KingSong N12 PRO",
    description:
      "Designed for adventure. The N12 PRO combines aerodynamic design, endurance, and performance for long-distance mastery.",
    speed: "50 km/h",
    range: "80 km",
    motor: "1000W",
    extra1: "Turn Signals",
    extra2: "Apple “Find My”",
    extra3: "Dual Suspension",
    price: "$Xxx.xx",
    image: "/images/n12.jpg",
  },
  {
    id: 2,
    title: "KingSong E1 KSE",
    description:
      "Compact and agile, the E1 KSE is your ultimate partner for city commuting — sleek, powerful, and built for everyday performance.",
    speed: "25 km/h",
    range: "25 km",
    motor: "350W",
    extra1: "Turn Signals",
    extra2: "Front Shocks",
    price: "$Xxx.xx",
    image: "/images/e1.jpg",
  },
  {
    id: 3,
    title: "KingSong N14 KSE",
    description:
      "The N14 KSE redefines stability with cutting-edge traction control, ensuring confidence and precision in every ride.",
    speed: "35 km/h",
    range: "40 km",
    motor: "500W",
    extra1: "Turn Signals",
    extra2: "Apple “Find My”",
    extra3: "Dual Suspension",
    price: "$Xxx.xx",
    image: "/images/n144.webp",
  },
];

export default function ScrollSection() {
  const ref = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const totalSlides = scooters.length;
  const scrollHeightVh = totalSlides * 150; // smoother, slower transitions
  const containerStyle = { height: `${scrollHeightVh}vh` };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const step = 1 / totalSlides;
  const fadeBuffer = isMobile ? 0.45 : 0.35; // adjust for mobile/desktop timing

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  return (
    // Main Section
    <section id="electric-scooters" ref={ref} className={styles.section}>
      <div className={styles.innerScroll} style={containerStyle}>
        {scooters.map((item, i) => {
          const start = i * step;
          const end = start + step;

          // opacity transition
          const opacity = useTransform(
            scrollYProgress,
            [start - step * fadeBuffer, start, end, end + step * fadeBuffer],
            [0, 1, 1, 0]
          );

          // parallax animations
          const yText = useTransform(scrollYProgress, [start, end], ["8vh", "-8vh"]);
          const yImage = useTransform(scrollYProgress, [start, end], ["12vh", "-12vh"]);

          const scale = useTransform(
            scrollYProgress,
            [start - step * 0.2, start, end, end + step * 0.2],
            [0.97, 1, 1, 0.97]
          );

          return (
            <motion.div
              key={item.id}
              id={i === 0 ? "first-product" : undefined} // ✅ first product ID
              className={styles.slide}
              style={{
                opacity,
                scale,
                zIndex: totalSlides - i,
                pointerEvents: "auto",
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <div className={styles.slideContent}>
                {/* LEFT: TEXT CARD */}
                <motion.div
                  className={styles.textColumn}
                  style={{ y: yText }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <h1 className={styles.title}>{item.title}</h1>
                  <p className={styles.description}>{item.description}</p>

                  <div className={styles.specGrid}>
                    <div className={styles.specCard}>
                      <FaTachometerAlt className={styles.icon} />
                      <div>
                        <span>Speed</span>
                        <strong>{item.speed}</strong>
                      </div>
                    </div>

                    <div className={styles.specCard}>
                      <FaRoad className={styles.icon} />
                      <div>
                        <span>Range</span>
                        <strong>{item.range}</strong>
                      </div>
                    </div>

                    <div className={styles.specCard}>
                      <FaBolt className={styles.icon} />
                      <div>
                        <span>Motor</span>
                        <strong>{item.motor}</strong>
                      </div>
                    </div>

                    {item.extra1 && (
                      <div className={styles.specCard}>
                        <FaTools className={styles.icon} />
                        <div>
                          <span>Feature</span>
                          <strong>{item.extra1}</strong>
                        </div>
                      </div>
                    )}
                    {item.extra2 && (
                      <div className={styles.specCard}>
                        <FaTools className={styles.icon} />
                        <div>
                          <span>Feature</span>
                          <strong>{item.extra2}</strong>
                        </div>
                      </div>
                    )}
                    {item.extra3 && (
                      <div className={styles.specCard}>
                        <FaTools className={styles.icon} />
                        <div>
                          <span>Feature</span>
                          <strong>{item.extra3}</strong>
                        </div>
                      </div>
                    )}

                    <div className={styles.specCard}>
                      <FaDollarSign className={styles.icon} />
                      <div>
                        <span>Price</span>
                        <strong>{item.price}</strong>
                      </div>
                    </div>
                  </div>

                  <button
                    className={styles.cta}
                    onClick={() => handleBuyNow(item)}
                    type="button"
                  >
                    Buy Now
                  </button>
                </motion.div>

                {/* RIGHT: IMAGE */}
                <motion.div
                  className={styles.imageColumn}
                  style={{ y: yImage }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className={styles.imageWrap}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={900}
                      priority
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {showPopup && selectedProduct && (
          <motion.div
            className={styles.popupOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.popupCard}
              initial={{ scale: 0.96, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <button className={styles.closeBtn} onClick={() => setShowPopup(false)}>
                <FaTimes />
              </button>

              <div className={styles.popupLogo}>
                <Image
                  src="/images/logo.png"
                  alt="KingSong Logo"
                  width={120}
                  height={40}
                />
              </div>

              <h2 className={styles.popupTitle}>
                Interested in {selectedProduct.title}?
              </h2>

              <div className={styles.contactOptions}>
                <a href="tel:+1 (613) 890-1759" className={styles.contact}>
                  <FaPhoneAlt />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/+16138901759"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contact}
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
                <a href="mailto:info@kingsongcanada.com" className={styles.contact}>
                  <FaEnvelope />
                  <span>Email Us</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
