"use client"

import "./Packages.css"
import { useNavigate } from "react-router-dom"

function Packages() {
  const navigate = useNavigate()

const packages = [
    {
      name: "STARTER",
      price: "$150",
      description: "Perfect for small businesses and startups",
      features: [
        "1–3 page website",
        "Mobile Responsive",
        "WhatsApp Button",
        "Basic Contact Form",
        "Social media links",
        "Basic-on page SEO",
        "2 revisions",
        "Free launch support (1 week)",
        "5-7 days delivery",
      ],
      cta: "GET STARTED",
      popular: false,
    },
    {
      name: "GROWTH",
      price: "$300",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "4–6 pages website",
        "Custom UI/UX redesign",
        "Copywriting assistance",
        "Blog or updates section",
        "Better SEO structure",
        "WhatsApp order/inquiry integration",
        "Improved speed optimization",
        "Three months free maintenance",
        "4 revisions",
        "2-week delivery",
      ],
      cta: "CHOOSE PLAN",
      popular: true,
    },
    {
      name: "ENTERPRISE",
      price: "$550",
      description: "Tailored solutions for complex requirements",
      features: [
        "7–10 pages",
        "E-commerce store",
        "Payment integration (international or local)",
        "Product uploads",
        "Advanced SEO setup",
        "Security optimization",
        "5–7 revisions",
        "Full training",
        "3/4-week delivery",
        "Free website maintenance",
      ],
      cta: "CONTACT US",
      popular: false,
    },
  ]

  const addOns = [
    {
      name: "Website Maintenance",
      price: "$10/month",
      description: "Backups, edits, updates, monitoring.",
      note: "Only for Starter package",
      availability: "starter-only",
    },
    {
      name: "Hosting + Domain Setup",
      price: "$30",
      billing: "one-time",
      description: "Mandatory separate fee for hosting and domain configuration.",
      availability: "mandatory",
    },
    {
      name: "Branding",
      price: "$50–$150",
      description: "Logo + Colors + Fonts",
      availability: "optional",
    },
    {
      name: "SEO Upgrade",
      price: "$50–$150",
      description: "Keyword optimization + ranking improvements",
      availability: "optional",
    },
  ]


  const handleContactClick = () => {
    navigate("/contact")
  }

  return (
    <div className="packages-section">
      <div className="packages-header">
        <span className="packages-label">[PRICING PLANS]</span>
        <h1 className="packages-title">
          PACKAGES<span className="title-dot">.</span>
        </h1>
        <p className="packages-subtitle">Choose the perfect plan for your project</p>
      </div>

      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div key={index} className={`package-card ${pkg.popular ? "featured" : ""}`}>
            {pkg.popular && <div className="popular-badge">MOST POPULAR</div>}

            <div className="package-header">
              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-price">{pkg.price}</div>
              <p className="package-description">{pkg.description}</p>
            </div>

            <div className="package-features">
              <ul>
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="package-cta" onClick={handleContactClick}>
              {pkg.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="addons-section">
        <div className="addons-header">
          <span className="addons-label">[ADD-ONS]</span>
          <h2 className="addons-title">
            ENHANCE YOUR SITE<span className="title-dot">.</span>
          </h2>
          <p className="addons-subtitle">Optional services to make your project even better</p>
        </div>

        <div className="addons-grid">
          {addOns.map((addon, index) => (
            <div key={index} className={`addon-card ${addon.availability}`}>
              <div className="addon-header">
                <h3 className="addon-name">{addon.name}</h3>
                {addon.availability === "mandatory" && <span className="mandatory-badge">REQUIRED</span>}
                {addon.availability === "starter-only" && <span className="starter-badge">STARTER ONLY</span>}
              </div>
              <div className="addon-price">{addon.price}</div>
              <p className="addon-description">{addon.description}</p>
              {addon.note && <p className="addon-note">{addon.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Packages
