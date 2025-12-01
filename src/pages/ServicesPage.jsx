"use client"

import { useState } from "react"
import "./ServicesPage.css"

function ServicesPage() {
  const [activeService, setActiveService] = useState(null)

  const services = [
    {
      number: "01",
      title: "WEB DEVELOPMENT",
      desc: "Custom websites and web applications built with cutting-edge technologies. React, Vue, Angular, Node.js - we speak all the languages.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "API Integration",
        "Performance Optimization",
      ],
    },

    {
      number: "02",
      title: "UI/UX DESIGN",
      desc: "User-centered design that looks stunning and converts. We craft experiences, not just interfaces.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Design Systems", "Usability Testing"],
    },

    {
      number: "03",
      title: "BRANDING & IDENTITY",
      desc: "Creating a memorable brand with a unique logo, colors, and visual style that stands out for your business.",
      features: ["Logo Design", "Color Palette", "Typography", "Visual Style Guide",],
    },
    {
      number: "04",
      title: "MAINTENANCE & SUPPORT",
      desc: "Ongoing support to keep your digital products running smoothly. 24/7 monitoring and rapid response times.",
      features: [
        "24/7 Monitoring",
        "Bug Fixes & Updates",
        "Performance Tuning",
        "Security Updates",
        "Technical Support",
      ],
    },
  ]

  return (
    <div className="services-page">
      <section className="page-hero">
        <span className="page-tag">[WHAT WE DO]</span>
        <h1 className="page-title">
          SERVICES<span className="title-dot">.</span>
        </h1>
      </section>

      <section className="services-container">
        <div className="services-staggered">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card-staggered ${index % 2 === 0 ? "left" : "right"}`}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              <div className="service-offset-number">{service.number}</div>
              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>

                {activeService === index && (
                  <ul className="service-card-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}

                <div className="service-expand-indicator">{activeService === index ? "COLLAPSE" : "VIEW DETAILS"}</div>
              </div>

              {index < services.length - 1 && <div className="service-connector"></div>}
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">READY TO START?</h2>
          <p className="cta-text">Let's discuss your project and find the perfect solution.</p>
          <a href="/contact" className="cta-button">
            GET IN TOUCH
          </a>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
