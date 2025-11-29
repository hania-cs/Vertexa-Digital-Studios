import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          <img src="/image.png" alt="Vertexa" className="logo-image" />
        </Link>

        <nav className="nav">
          <Link to="/about" className="nav-link">
            ABOUT
          </Link>

          <Link to="/services" className="nav-link">
            SERVICES
          </Link>

          <Link to="/projects" className="nav-link">
            PROJECTS
          </Link>

          <Link to="/careers" className="nav-link">
            CAREERS
          </Link>

          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>

          <div className="nav-divider"></div>

          <Link to="/contact" className="nav-cta">
            START PROJECT
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
