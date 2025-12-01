import "./Header.css"
import { Link } from "react-router-dom"
import { useState } from "react"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/image.png" alt="Vertexa" className="logo-image" />
        </Link>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
            ABOUT
          </Link>
          <Link to="/services" className="nav-link" onClick={closeMobileMenu}>
            SERVICES
          </Link>
          <Link to="/projects" className="nav-link" onClick={closeMobileMenu}>
            PROJECTS
          </Link>
          <Link to="/careers" className="nav-link" onClick={closeMobileMenu}>
            CAREERS
          </Link>
          <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
            CONTACT
          </Link>
          <div className="nav-divider"></div>
          <Link to="/contact" className="nav-cta" onClick={closeMobileMenu}>
            START PROJECT
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header