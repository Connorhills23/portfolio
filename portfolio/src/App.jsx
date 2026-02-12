// src/App.js
import React, { useState } from "react";
import { FaSun, FaMoon, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./App.css";

const projects = [
  {
    name: "Rush-Clicker",
    description:
      "A Cool Mouse Game To Test Your Self And See How Fast You Are.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Connorhills23/Rush-Clicker",
    live: "https://connorhills23.github.io/Rush-Clicker/",
    image: "/images/rushclicker.png",
  },
  {
    name: "Idle-Golf-Game",
    description: "Just A Simple Idle ClickGame.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Connorhills23/Idle-Golf-Game",
    live: "https://connorhills23.github.io/Idle-Golf-Game/",
    image: "/images/idle-golf.png",
  },
  {
    name: "Custom-Audio-Player",
    description: "Custom-Audio-Player MineCraft Themed.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Connorhills23/custom-audio-player",
    live: "https://connorhills23.github.io/custom-audio-player/",
    image: "/images/custom-audio.png",
  },
  {
    name: "Cyber-Glitch-Timer",
    description: "Cool 10-minute Cyber-Glitch-Timer. ",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Connorhills23/Cyber-Glitch-Timer",
    live: "https://connorhills23.github.io/Cyber-Glitch-Timer/",
    image: "/images/cyber-glitch.png",
  },
  {
    name: "Rim-Clicker-Game",
    description:
      "This Is Based Of A Cookie Clicker Game So I Made A Wheel Rim Clicker .",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Connorhills23/Rim-Clicker-Game",
    live: "https://connorhills23.github.io/Rim-Clicker-Game/",
    image: "/images/rim-clicker.png",
  },
  {
    name: "Gallery-Using-React",
    description: "Gallery Using React .",
    tech: ["JSX", "HTML", "CSS", "REACT"],
    github:
      "https://github.com/Connorhills23/Week-06-Build-an-Accessible-Gallery-using-React",
    live: "https://week-06-gallery-fdh5.onrender.com",
    image: "/images/gallery-react.png",
  },
  {
    name: "VEGETATION-STATION",
    description: "VEGETATION STATION To Keep A Eye On Your Veg .",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Connorhills23/veg",
    live: "https://connorhills23.github.io/veg/login.html",
    image: "/images/veg-app.png",
  },
  {
    name: "Spiderman-Timer",
    description: "Cool 10-minute Spiderman-Timer .",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Connorhills23/spiderman-timer",
    live: "https://connorhills23.github.io/spiderman-timer/",
    image: "/images/spiderman.png",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <header>
        <h1>My Projects</h1>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      {/* Personal Description Section */}
      <section className="description">
        <p>
          Hi! I’m connor, a passionate developer creating modern web
          applications. I love building interactive projects with React, , and
          other cutting-edge technologies.
        </p>
      </section>

      <main>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2>{project.name}</h2>

              {/* Image */}
              {project.image && (
                <div className="image-wrapper">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />
                </div>
              )}

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
