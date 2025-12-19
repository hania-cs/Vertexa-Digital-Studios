"use client"
import { useRef, useEffect, useState } from "react"
import "./Projects.css"

function Projects() {
  const scrollRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const projects = [
    {
      title: "Connect Services SARL",
      client: "Company Website",
      year: "2025",
      description:
        "Official website for ConnectServices SARL, designed and developed to establish a strong, credible digital presence. The platform reflects the company’s professionalism through a clean visual language, intuitive information architecture, and performance-focused implementation. Emphasis was placed on clarity, responsiveness, and seamless navigation to communicate trust, efficiency, and reliability. The result is a modern corporate identity translated into a fast, user-centric web experience that positions ConnectServices as a structured, service-driven organization.",
      link: "https://www.connect-services.me/",
      image: "/ver.png",
    },
    {
      title: "Crispy Time",
      client: "Restaurant",
      year: "2025",
      description:
        "A modern, high-impact website concept designed to showcase strong branding, engaging UI, and conversion-focused layout for a food business. The experience emphasizes bold visuals, clear hierarchy, smooth interactions, and full responsiveness to demonstrate how a casual dining brand can be presented with clarity and personality. Performance and usability were prioritized to ensure fast load times and an intuitive customer journey. This project is a design mockup created to showcase our web design and development capabilities; we are not affiliated with the business.",
      link: "https://crispy-time.vercel.app/",
      image: "/crispy.png",
    },
    {
      title: "Tiramisu Choice",
      client: "Dessert Brand ",
      year: "2025",
      description:
        "A clean, responsive landing page crafted for a dessert brand, combining modern visuals with a warm, minimal aesthetic. The design highlights the product through strong imagery, clear messaging, and an intuitive layout that feels both polished and inviting. The result is a simple yet memorable online presence that makes it easy for visitors to understand the brand and engage with the site.",
      link: "https://tiramisuchoice.vercel.app/",
      image: "/tiramisu.png",
    },
    {
      title: "Manuela Frierre Portfolio",
      client: "Psychology Student Portfolio",
      year: "2024",
      description:
        "A clean, responsive personal portfolio site designed to showcase a psychology student's skills and work. The design combines minimal aesthetics with clear messaging and intuitive navigation, creating a polished and engaging experience. Strong visuals, thoughtful layout, and simple structure make it easy for visitors to understand the brand, explore projects, and connect with the creator, resulting in a professional and memorable online presence.",
      link: "https://manuelaportfolio.vercel.app/",
      image: "/portfolio.png",
    },
    {
      title: "Jingle Gings",
      client: "Brazilian Cookie Brand",
      year: "2024",
      description:
        "A clean, responsive web project designed to deliver a friendly, engaging user experience. The design blends modern visual style with intuitive navigation, giving users a smooth flow from landing to content exploration. With clear messaging, balanced layout, and thoughtful UI choices, JingleGings presents a welcoming and professional online presence that reflects strong design sensibilities and usability focus.",
      link: "https://jingle-gings.vercel.app/",
      image: "/jingle.png",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollTop = scrollRef.current.scrollTop
        const scrollHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight
        const progress = scrollTop / scrollHeight
        setScrollProgress(progress)
      }
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

  return (
    <div className="projects">
      <div className="projects-header">
        <div className="projects-header-content">
          <div className="projects-label">[SELECTED WORK]</div>
          <h2 className="projects-title">
            PROJECTS THAT
            <br />
            <span className="highlight">SPEAK LOUDER</span>
          </h2>
        </div>
        <div className="scroll-instruction">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>

      <div className="diagonal-scroll-container" ref={scrollRef}>
        <div className="diagonal-track">
          {projects.map((project, index) => (
            <div key={index} className={`diagonal-project ${index % 2 === 0 ? "left-align" : "right-align"}`}>
              <div className="diagonal-number">{String(index + 1).padStart(2, "0")}</div>

              <div className="diagonal-content">
                <div className="diagonal-image-wrapper">
                  <div className="diagonal-image">
                    <img src={project.image || "/placeholder.svg"} alt={project.title} />
                    <div className="diagonal-overlay"></div>
                  </div>
                </div>

                <div className="diagonal-info">
                  <div className="diagonal-meta">
                    <span className="diagonal-year">{project.year}</span>
                    <span className="diagonal-divider">•</span>
                    <span className="diagonal-client">{project.client}</span>
                  </div>
                  <h3 className="diagonal-title">{project.title}</h3>
                  <p className="diagonal-description">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="diagonal-link">
                    <span>VIEW PROJECT</span>
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </div>

              <div className="diagonal-connector"></div>
            </div>
          ))}
        </div>

        <div className="scroll-progress-bar">
          <div className="scroll-progress-fill" style={{ height: `${scrollProgress * 100}%` }}></div>
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
