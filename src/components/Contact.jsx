import "./Contact.css"

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-label">[GET IN TOUCH]</div>
          <h2 className="contact-title">
            LET'S TALK<span className="contact-period">.</span>
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-main">
            <p className="contact-text">
              Got a project in mind? Need technical guidance? Looking for a development partner?
            </p>
            <p className="contact-text-large">Drop us a line. We respond fast.</p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="info-label">EMAIL</div>
                <a href="mailto:hello@vertexa.digital" className="info-value">
                  hello@vertexa.digital
                </a>
              </div>

              <div className="contact-info-item">
                <div className="info-label">PHONE</div>
                <a href="tel:+96178771963" className="info-value">
                  (+961) 78-771963
                </a>
              </div>

              <div className="contact-info-item">
                <div className="info-label">LOCATION</div>
                <div className="info-value">
                 Rashaya, Lebanon
                </div>
              </div>
            </div>
          </div>

          <div className="contact-side">
            <div className="contact-box">
              <div className="box-inner">
                <div className="box-stat">24/7</div>
                <div className="box-text">RESPONSE TIME</div>
              </div>
            </div>

            <div className="contact-social">
              <div className="social-label">FOLLOW US</div>
              <div className="social-links">
                <a href="#" className="social-link">
                  TWITTER
                </a>
                <a href="#" className="social-link">
                  LINKEDIN
                </a>
                <a href="#" className="social-link">
                  GITHUB
                </a>
                <a href="#" className="social-link">
                  DRIBBBLE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
