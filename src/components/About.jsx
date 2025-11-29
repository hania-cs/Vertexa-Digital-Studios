import "./About.css"

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-left">
            <div className="about-label">[WHO WE ARE]</div>
            <h2 className="about-title">
              WE DON'T
              <br />
              FOLLOW
              <br />
              TRENDS<span className="about-period">.</span>
            </h2>
            <p className="about-tagline">WE SET THEM</p>
          </div>

          <div className="about-right">
            <p className="about-text">
              Vertexa Digital Studios isn't your typical agency. We're a collective of builders, designers, and
              problem-solvers who refuse to compromise on quality.
            </p>
            <p className="about-text">
              Founded on the principle that great digital products require both technical excellence and creative
              fearlessness. Every project we touch becomes a benchmark.
            </p>

            <div className="about-stats">
          
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
