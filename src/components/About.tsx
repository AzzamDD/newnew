"use client";
import React from "react";
import styles from "./About.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";


export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`${styles.about} ${isVisible ? styles.show : ""}`}
    >
      <h2>About Me</h2>

      <img src="/ayam.jpg" alt="My Photo" />

      <p>
        Saya biasa dipanggil Ajamm,seorang pelajar dari SMK 8 MALANG dari jurusan RPL kelas 11.
        Hobi saya bermain game dan tidur. Game yang sedang saya mainkan sekarang
        adalah <b>Magic Chess Go Go</b>.
      </p>
    </section>
  );
}
