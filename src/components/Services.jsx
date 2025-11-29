import "./Services.css"
import { Link } from "react-router-dom"

function Services() {
  const services = [
    {
      number: "01",
      title: "WEB DEVELOPMENT",
      description: "Custom web applications built with modern tech stacks. Performance-obsessed, scalable, secure.",
    },
    {
      number: "02",
      title: "UI/UX DESIGN",
      description: "Interface design that converts. Data-driven decisions, user-tested, pixel-perfect execution.",
    },
    {
      number: "03",
      title: "E-COMMERCE",
      description: "High-converting online stores. Optimized checkout flows, inventory systems, payment integrations.",
    },
      {
      number: "04",
      title: "BRANDING & IDENTITY",
      description: "Creating a memorable brand with a unique logo, colors, and visual style that stands out for your business.",
    },
       {
      number: "05",
      title: "MAINTENANCE & SUPPORT",
      description: "Ongoing support to keep your digital products running smoothly. 24/7 monitoring and rapid response times.",
    },
  ]

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <div className="services-label">[WHAT WE DO]</div>
          <h2 className="services-title">SERVICES</h2>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <Link 
              to="/services" 
              key={index} 
              className="service-item"
            >
              <div className="service-number">{service.number}</div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-arrow">→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
