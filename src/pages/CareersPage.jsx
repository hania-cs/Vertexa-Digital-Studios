import "./CareersPage.css"

function CareersPage() {
  const openPositions = [
    {
      title: "Sales Person",
      type: "Commission-Based",
      location: "Remote",
      description:
        "We’re seeking a results-driven Salesperson to bring in new clients and drive business growth. This role is entirely commission-based—your earnings depend on successfully closing deals with clients.",
      requirements: [
        "Excellent communication and persuasion skills",
        "Self-motivated and target-driven",
        "Prior sales or client acquisition experience is a plus",
        "Comfortable working on a commission-only basis",
      ],
    },

    {
      title: "Social Media Manager",
      type: "Internship",
      location: "Remote",
      description:
        "We’re looking for a creative and motivated Social Media Intern to support our digital marketing efforts. This is a great opportunity to gain hands-on experience in content creation, social media strategy, and brand engagement.",
      requirements: [
        "Passion for social media and digital marketing",
        "Basic knowledge of design tools (Canva, Figma, or similar)",
        "Strong written communication skills",
        "Self-motivated and eager to learn",
        "Flexible schedule",
      ],
    },
  ]

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="careers-hero-content">
          <span className="careers-tag">[JOIN THE TEAM]</span>
          <h1 className="careers-title">
            BUILD THE
            <br />
            <span className="careers-title-highlight">FUTURE</span>
            <br />
            WITH US.
          </h1>
          <p className="careers-description">
            We're always looking for talented individuals who want to push boundaries and create exceptional digital
            experiences.
          </p>
          <div className="careers-stats">
           
            <div className="careers-stat">
              <div className="careers-stat-number">100%</div>
              <div className="careers-stat-label">REMOTE FRIENDLY</div>
            </div>
           
          </div>
        </div>
      </section>

      <section className="careers-positions">
        <div className="careers-positions-header">
          <h2 className="careers-positions-title">
            <span className="careers-positions-tag">[OPEN POSITIONS]</span>
            <br />
            CURRENT OPENINGS
          </h2>
        </div>

        <div className="careers-positions-list">
          {openPositions.map((position, index) => (
            <div key={index} className="career-card">
              <div className="career-card-header">
                <div className="career-card-top">
                  <h3 className="career-card-title">{position.title}</h3>
                  <div className="career-card-meta">
                    <span className="career-card-type">{position.type}</span>
                    <span className="career-card-location">{position.location}</span>
                  </div>
                </div>
                <p className="career-card-description">{position.description}</p>
              </div>

              <div className="career-card-requirements">
                <h4 className="career-card-requirements-title">REQUIREMENTS:</h4>
                <ul className="career-card-requirements-list">
                  {position.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              <a href="mailto:haniacs05@gmail.com" className="career-card-apply">
                APPLY NOW →
              </a>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  )
}

export default CareersPage
