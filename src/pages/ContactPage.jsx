import "./ContactPage.css"

function ContactPage() {
  return (
    <div className="contact-page">
      <section className="page-hero">
        <span className="page-tag">[GET IN TOUCH]</span>
        <h1 className="page-title">
          CONTACT<span className="title-dot">.</span>
        </h1>
      </section>

      <section className="contact-main">
        <div className="contact-grid-page">
          <div className="contact-info-section">
            <h2 className="contact-heading">GET IN TOUCH</h2>
            <p className="contact-text">
              Ready to bring your vision to life? Drop us a message and we'll get back to you within 24 hours.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <h3 className="method-label">EMAIL</h3>
                <a href="mailto:haniacs05@gmail.com" className="method-value">
                  haniacs05@gmail.com
                </a>
              </div>

              <div className="contact-method">
                <h3 className="method-label">PHONE</h3>
                <a href="tel:+96178771963" className="method-value">
                  +(961) 78-771963
                </a>
              </div>

              <div className="contact-method">
                <h3 className="method-label">LOCATION</h3>
                <p className="method-value">
                  Rashaya, Lebanon
                </p>
              </div>
            </div>

            <div className="response-box-page">
              <div className="response-number">24/7</div>
              <div className="response-label">RESPONSE TIME</div>
            </div>
          </div>

          <div className="contact-socials-section">
            <h2 className="contact-heading">FOLLOW US</h2>
            <p className="contact-text">Stay updated with our latest projects and insights.</p>

            <div className="social-links-large">
               <a href="https://www.instagram.com/vertexa.digital.studios/" className="social-link-large" target="_blank">
                <span className="social-name">INSTAGRAM</span>
                <span className="social-arrow">→</span>
              </a>
              <a href="#linkedin" className="social-link-large">
                <span className="social-name">LINKEDIN</span>
                <span className="social-arrow">→</span>
              </a>
              <a href="#github" className="social-link-large">
                <span className="social-name">GITHUB</span>
                <span className="social-arrow">→</span>
              </a>
            
            </div>
          </div>
        </div>
      </section>

  
    </div>
  )
}

export default ContactPage
