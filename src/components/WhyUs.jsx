"use client"

import "./WhyUs.css"

function WhyUs() {
  const reasons = [
    {
      number: "01",
      title: "INNOVATION FIRST",
      description: "We don't follow trends, we set them. Every project pushes boundaries with cutting-edge technology.",
    },
    {
      number: "02",
      title: "EXPERTISE YOU CAN TRUST   ",
      description: "We bring the right mix of creativity, technology, and strategy to help your business achieve its goals.",
    },
    {
      number: "03",
      title: "DEDICATED SUPPORT",
      description: "Your success is our obsession. We provide ongoing support and optimization beyond launch.",
    },
    {
      number: "04",
      title: "TRANSPARENT PARTNERSHIP",
      description: "No hidden fees, no surprises. Honest communication every step of the journey.",
    },
    {
      number: "05",
      title: "CUSTOM SOLUTIONS",
      description: "One-size-fits-all doesn't work. We build solutions tailored to your unique goals.",
    },
    {
      number: "06",
      title: "QUALITY OBSESSION",
      description: "Pixel-perfect design, clean code, meticulous attention to detail in everything we do.",
    },
  ]

  return (
    <section className="why-us">
      <div className="why-us-header">
        <h2 className="why-us-title">
          WHY CHOOSE US
        </h2>
      </div>

      <div className="why-us-container">
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-number">{reason.number}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
