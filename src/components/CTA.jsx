"use client"

import "./CTA.css"

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">
          READY TO
          <br />
          <span className="highlight">ELEVATE YOUR</span>
          <br />
          DIGITAL PRESENCE?
        </h2>
        <p className="cta-description">
          Let's transform your vision into reality. Get in touch with our team to discuss your project.
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="cta-button primary">
            <span>START YOUR PROJECT</span>
            <span className="button-arrow">→</span>
          </a>
          <a 
            href="https://wa.me/+96178771963" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button secondary"
          >
            <span>SCHEDULE CALL</span>
            <span className="button-arrow">→</span>
          </a>
        </div>
        <p className="cta-footer">
          <span className="footer-icon">✓</span> Free consultation <span className="footer-icon">✓</span> No commitments <span className="footer-icon">✓</span> 24/7 Support 
        </p>
      </div>
    </section>
  )
}

export default CTA
