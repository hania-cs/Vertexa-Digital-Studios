"use client"

import { useRef, useEffect, useState } from "react"
import "./Projects.css"

function Projects() {
  const scrollRef = useRef(null)
  const projectsRef = useRef([])
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollRef.current
      if (!scrollContainer) return

      const scrollProgress = scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth)

      projectsRef.current.forEach((project, index) => {
        if (!project) return
        const projectCenter = project.offsetLeft + project.offsetWidth / 2
        const containerCenter = scrollContainer.scrollLeft + scrollContainer.clientWidth / 2
        const distance = Math.abs(projectCenter - containerCenter)
        const maxDistance = scrollContainer.clientWidth / 2
        const scale = Math.max(0.8, 1 - (distance / maxDistance) * 0.2)
        const opacity = Math.max(0.4, 1 - (distance / maxDistance) * 0.6)

        project.style.transform = `scale(${scale})`
        project.style.opacity = opacity
      })
    }

    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      handleScroll()
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
    scrollRef.current.style.cursor = "grabbing"
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    scrollRef.current.style.cursor = "grab"
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    scrollRef.current.style.cursor = "grab"
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const projects = [
    {
      title: "Tiramisu Choice",
      client: "Dessert Brand ",
      year: "2025",
      description:
        "A clean, responsive landing page crafted for a dessert brand, combining modern visuals with a warm, minimal aesthetic. The design highlights the product through strong imagery, clear messaging, and an intuitive layout that feels both polished and inviting. The result is a simple yet memorable online presence that makes it easy for visitors to understand the brand and engage with the site.",
      link: "https://tiramisuchoice.vercel.app/",
    },
    {
      title: "Manuela Frierre Portfolio",
      client: "Psychology Student Portfolio",
      year: "2024",
      description: "A clean, responsive personal portfolio site designed to showcase a psychology student's skills and work. The design combines minimal aesthetics with clear messaging and intuitive navigation, creating a polished and engaging experience. Strong visuals, thoughtful layout, and simple structure make it easy for visitors to understand the brand, explore projects, and connect with the creator, resulting in a professional and memorable online presence.",
      link: "https://manuelaportfolio.vercel.app/",
    },
    {
      title: "Jingle Gings",
      client: "Brazilian Cookie Brand",
      year: "2024",
      description:
        "A clean, responsive web project designed to deliver a friendly, engaging user experience. The design blends modern visual style with intuitive navigation, giving users a smooth flow from landing to content exploration. With clear messaging, balanced layout, and thoughtful UI choices, JingleGings presents a welcoming and professional online presence that reflects strong design sensibilities and usability focus.",
      link: "https://jingle-gings.vercel.app/",
    },
    
  ]

  return (
    <div className="projects">
      <div className="projects-header">
        <div className="projects-header-content">
          <div className="projects-label">SELECTED WORK</div>
          <h2 className="projects-title">
            PROJECTS THAT
            <br />
            <span className="highlight">SPEAK LOUDER</span>
          </h2>
        </div>
        <div className="scroll-instruction">
          <span>DRAG TO EXPLORE</span>
          <div className="scroll-arrow">→</div>
        </div>
      </div>

      <div
        className="projects-scroll"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="projects-track">
          {projects.map((project, index) => (
            <div key={index} className="project-card" ref={(el) => (projectsRef.current[index] = el)}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay"></div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-client">{project.client}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.tech && project.tech.length > 0 && (
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>VIEW PROJECT</span>
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="projects-footer">
        <a href="/projects" className="view-all-button">
          <span>VIEW ALL PROJECTS</span>
          <span className="button-arrow">→</span>
        </a>
      </div>
    </div>
  )
}

export default Projects
