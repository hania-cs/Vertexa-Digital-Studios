import "./Hero.css"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="hero">
      <div className="code-float code-float-1">
        <span className="code-comment">// building the future</span>
      </div>

      <div className="hero-container">
        <div className="hero-top"></div>

        <div className="hero-main">
          <div className="hero-title-section">
            <h1 className="hero-title">
              <span className="title-line-1">WE DON'T</span>
              <span className="title-line-2">BUILD WEBSITES</span>
              <span className="title-line-3">
                WE BUILD <span className="title-highlight">EXPERIENCES</span>
              </span>
            </h1>

            <div className="terminal-block">
              <div className="terminal-header">
                <span className="terminal-dot"></span>
                <span className="terminal-dot"></span>
                <span className="terminal-dot"></span>
                <span className="terminal-title">~/vertexa</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span> npm run innovation
                </div>
                <div className="terminal-output">
                  <span className="output-success">✓</span> Building pixel-perfect products...
                </div>
              </div>
            </div>
          </div>

          <div className="hero-content-wrap">
            <div className="hero-description">
              <p className="hero-text">Raw code. Bold ideas. Zero compromises.</p>
              <p className="hero-subtext">
                We craft digital products that don't just work— <br />
                they dominate. No templates. No shortcuts.
              </p>
            </div>

            <div className="code-snippet-box">
              <div className="snippet-line">
                <span className="snippet-number">01</span>
                <span className="snippet-code">
                  <span className="code-keyword">function</span>{" "}
                  <span className="code-function">buildFuture</span>() {"{"}
                </span>
              </div>
              <div className="snippet-line">
                <span className="snippet-number">02</span>
                <span className="snippet-code snippet-indent">
                  <span className="code-keyword">return</span>{" "}
                  <span className="code-string">'innovation'</span>;
                </span>
              </div>
              <div className="snippet-line">
                <span className="snippet-number">03</span>
                <span className="snippet-code">{"}"}</span>
              </div>
            </div>

            <div className="hero-cta">
              <Link to="/projects" className="hero-btn-primary">
                VIEW PROJECTS
                <span className="btn-arrow">→</span>
              </Link>

              <a href="/contact" className="hero-link">
                GET IN TOUCH <span className="link-underline"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-metrics">
          <div className="metric-box metric-2">
            <div className="metric-value">24/7</div>
            <div className="metric-label">SUPPORT</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
