// src/app/components/Projects.tsx
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website ke-1",
      description: "Website pribadi untuk menampilkan profil.",
      link: "https://rev-port.vercel.app/"
    },
    {
      title: "Portofolio Website ke-2",
      description: "Website pribadi untuk menampilkan profil.",
      link: "https://dotreact.netlify.app/"
    },

  ];

  return (
    <section id="projects" style={{ padding: "40px 20px", background: "#f9f9f9" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Projects</h2>
      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            background: "white",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease"
          }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>{project.title}</h3>
            <p style={{ fontSize: "14px", marginBottom: "10px" }}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>
              PENCET!!
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
