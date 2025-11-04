"use client";

import styles from "../Footer/footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* ============================= */}
        {/* TOP GRID */}
        {/* ============================= */}
        <div className={styles.grid}>
          {/* PRODUCTS */}
          <div className={styles.column}>
            <h3>Products</h3>
            <ul>
              <li><Link href="/new">New In</Link></li>
              <li><Link href="/bestsellers">Best Sellers</Link></li>
              <li><Link href="/scooters">All Scooters</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className={styles.column}>
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className={styles.column}>
            <h3>Contact Us</h3>
            <p><FaPhoneAlt /> Tel: +1 (888) 660-3483<br />(Mon–Fri 9:00 AM–6:00 PM CST)</p>
            <p><FaEnvelope /> service_us@kingsong.ca</p>
            <p>
              Website Live Chat<br />
              (Mon–Fri 8:00 AM–4:00 PM PST)
            </p>
          </div>
        </div>

        {/* ============================= */}
        {/* MIDDLE BADGES */}
        {/* ============================= */}
        <div className={styles.badges}>
          <div className={styles.country}>
            <Image src="/images/ca.svg" alt="Canada" width={30} height={30} />
          </div>

         

          <div className={styles.payments}>
            <Image src="/images/payment.png" alt="Payment Options" width={550} height={30} />
          </div>
        </div>

        {/* ============================= */}
        {/* BOTTOM LINE */}
        {/* ============================= */}
        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} KingSong Canada. Powered by Shopify.
          </p>
          <div className={styles.links}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/refund">Refund Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/shipping">Shipping Policy</Link>
            <Link href="/contact">Contact Information</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
