import "./AboutPage.css"
import WhyUs from "../components/WhyUs"
import OurProcess from "../components/OurProcess"

function AboutPage() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <span className="page-tag">[WHO WE ARE]</span>
        <h1 className="page-title">
          ABOUT<span className="title-dot">.</span>
        </h1>
      </section>

      <section className="story-section">
        <div className="story-container">
          <div className="story-content-wrapper">
            <div className="story-text-block">
              <h2 className="section-heading">THE STORY</h2>
              <p className="story-paragraph">
                Founded in 2025, Vertexa Digital Studios was born from a simple belief: digital experiences should be
                exceptional, not ordinary.
              </p>
              <p className="story-paragraph">
                We're a team of designers, developers, and strategists who don't just follow trends, we set them. Every
                project is an opportunity to push boundaries and create something remarkable.
              </p>
              <p className="story-paragraph">
                Whether you're an individual, startup or an enterprise, we're here to help you elevate your digital
                presence with innovative solutions and creative excellence.
              </p>
            </div>

            <div className="story-stats-wrapper">
              <div className="stat-box-about">
                <div className="stat-number-about">Expertise & Creativity</div>
                <div className="stat-label-about">A team skilled in design, development, and strategy.</div>
              </div>
              <div className="stat-box-about">
                <div className="stat-number-about">Tailored Solutions</div>
                <div className="stat-label-about">Every project is built to meet your unique goals.</div>
              </div>
              <div className="stat-box-about">
                <div className="stat-number-about">Client-Focused Approach</div>
                <div className="stat-label-about">Transparent communication and dedication every step of the way.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission-card">
            <div className="mission-inner">
              <span className="mission-vision-tag">OUR MISSION</span>
              <h2 className="mission-vision-title">Elevate Digital Excellence</h2>
              <p className="mission-vision-text">
                To craft exceptional digital experiences that empower businesses to connect, engage, and grow, combining
                creativity, strategy, and cutting-edge technology in every project.
              </p>
            </div>
          </div>

          <div className="vision-card">
            <div className="vision-inner">
              <span className="mission-vision-tag">OUR VISION</span>
              <h2 className="mission-vision-title">Future of Digital</h2>
              <p className="mission-vision-text">
                To be a leading force in digital innovation, setting trends rather than following them, and helping
                brands worldwide thrive in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2 className="section-heading-center">OUR VALUES</h2>
        <div className="values-container">
          <div className="value-card value-card-1">
            <h3 className="value-title">INNOVATION FIRST</h3>
            <p className="value-desc">
              We don't settle for "good enough." Every project is an opportunity to innovate and push the boundaries of
              what's possible.
            </p>
          </div>
          <div className="value-card value-card-2">
            <h3 className="value-title">QUALITY OBSESSED</h3>
            <p className="value-desc">
              Clean code, pixel-perfect design, and meticulous attention to detail. We obsess over quality so you don't
              have to.
            </p>
          </div>
          <div className="value-card value-card-3">
            <h3 className="value-title">CLIENT FOCUSED</h3>
            <p className="value-desc">
              Your success is our success. We become partners in your journey, not just vendors delivering a product.
            </p>
          </div>
          <div className="value-card value-card-4">
            <h3 className="value-title">TRANSPARENT</h3>
            <p className="value-desc">
              No hidden fees, no surprises. We believe in honest communication and keeping you in the loop every step of
              the way.
            </p>
          </div>
        </div>
      </section>

      <section className="careers-culture">
        <div className="careers-culture-content">
          <h2 className="careers-culture-title">OUR CULTURE</h2>
          <div className="culture-items-container">
            <div className="culture-item culture-item-1">
              <h3 className="culture-item-title">REMOTE FIRST</h3>
              <p className="culture-item-text">Work from anywhere. We believe in flexibility and trust.</p>
            </div>
            <div className="culture-item culture-item-2">
              <h3 className="culture-item-title">LEARNING & GROWTH</h3>
              <p className="culture-item-text">Continuous learning budget and mentorship programs.</p>
            </div>
            <div className="culture-item culture-item-3">
              <h3 className="culture-item-title">CUTTING-EDGE TECH</h3>
              <p className="culture-item-text">Work with the latest tools and technologies.</p>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />

      <OurProcess />
    </div>
  )
}

export default AboutPage
