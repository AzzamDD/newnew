"use client";
import React from "react";
import styles from "./Hero.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="hero"
      ref={ref}
      className={`${styles.hero} ${isVisible ? styles.show : ""}`}
    >
      <div className={styles.text}>
        <h2>Hi, Gua <span>Ajamm</span></h2>
        <p>Students | SMK 8 MALANG</p>
      </div>
    </section>
  );
}
