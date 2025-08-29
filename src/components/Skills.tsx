"use client";
import React from "react";
import styles from "./Skills.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Git", "GitHub" , "Java" , "C#"  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`${styles.skills} ${isVisible ? styles.show : ""}`}
    >
      <h2>Skills</h2>
      <div className={styles.skillList}>
        {skills.map((skill, i) => (
          <div key={i} className={styles.skillItem}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
