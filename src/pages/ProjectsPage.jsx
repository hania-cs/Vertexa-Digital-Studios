import "./ProjectsPage.css"

function ProjectsPage() {
  const projects = [
     {
      title: "Connect Services SARL",
      client: "Company Website",
      year: "2025",
      description:
        "Official website for ConnectServices SARL, designed and developed to establish a strong, credible digital presence. The platform reflects the company’s professionalism through a clean visual language, intuitive information architecture, and performance-focused implementation. Emphasis was placed on clarity, responsiveness, and seamless navigation to communicate trust, efficiency, and reliability. The result is a modern corporate identity translated into a fast, user-centric web experience that positions ConnectServices as a structured, service-driven organization.",
      link: "https://www.connect-services.me/",
      image: "/connect.png",
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
      category: "DESSERT BRAND",
      description:
        "A clean, responsive landing page crafted for a dessert brand, combining modern visuals with a warm, minimal aesthetic. The design highlights the product through strong imagery, clear messaging, and an intuitive layout that feels both polished and inviting.",
      tech: ["React"],
      year: "2025",
      image: "/tiramisu.png",
      link: "https://tiramisuchoice.vercel.app/",
    },
    {
      title: "Manuela Frierre Portfolio",
      category: "Personal Portfolio",
      description:
        "A clean, responsive personal portfolio site designed to showcase a psychology student's skills and work. Strong visuals, thoughtful layout, and simple structure make it easy for visitors to understand the brand, explore projects, and connect with the creator, resulting in a professional and memorable online presence.",
      tech: ["React"],
      year: "2025",
      image: "/portfolio.png",
      link: "https://manuelaportfolio.vercel.app/",
    },
    {
      title: "Jingle Gings",
      category: "SMALL COOKIE BUSINESS",
      description:
        "A clean, responsive web project designed to deliver a friendly, engaging user experience. The design blends modern visual style with intuitive navigation, giving users a smooth flow from landing to content exploration. With clear messaging, balanced layout, and thoughtful UI choices, JingleGings presents a welcoming and professional online presence that reflects strong design sensibilities and usability focus.",
      link: "https://jingle-gings.vercel.app/",
      tech: ["React"],
      year: "2024",
      image: "/jingle.png",
    },
  ]

  return (
    <div className="projects-page">
      <section className="page-hero">
        <span className="page-tag">[OUR WORK]</span>
        <h1 className="page-title">
          PROJECTS<span className="title-dot">.</span>
        </h1>
      </section>

      <section className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-number">0{index + 1}</div>
            <div className="project-image-container">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <div className="project-year">{project.year}</div>
              </div>
            </div>
            <div className="project-info">
              <div className="project-category">{project.category}</div>
              <h2 className="project-title-page">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-page">
                <span>VIEW PROJECT</span>
                <span className="link-arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">NEXT PROJECT?</h2>
          <p className="cta-text">Let's create something amazing together.</p>
          <a href="/contact" className="cta-button">
            START A PROJECT
          </a>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
