"use client";
import React from "react";
import styles from "./Footer.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer ref={ref} className={`${styles.footer} ${isVisible ? styles.show : ""}`}>
      <p>© 2025 Ajamm - DODOT</p>
    </footer>
  );
}
