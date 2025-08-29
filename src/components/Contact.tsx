"use client";
import React from "react";
import styles from "./Contact.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref}
      className={`${styles.contact} ${isVisible ? styles.show : ""}`}
    >
      <h2>Contact Me</h2>
      <p>Email: <a href="ajammdodot@gmail.com">ajammdodot@gmail.com</a></p>
      <p>Instagram: <a href="https://www.instagram.com/szamm0_?igsh=MWpmamNjenJtY3V2eA==">@szamm0_</a></p>
      <p>TikTok: <a href="http://tiktok.com/@ajammwirr">@ajammwirr</a></p>
    </section>
  );
}
