"use client"

import "./Testimonials.css"

function Testimonials() {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "CEO, TechStart",
      company: "TechStart Inc.",
      quote:
        "Vertexa didn't just build our platform—they transformed our entire digital presence. The attention to detail and innovation was exceptional.",
      avatar: "AT",
    },
    {
      name: "Maria Rodriguez",
      role: "Product Lead, CloudScale",
      company: "CloudScale Systems",
      quote:
        "Working with this team was a game-changer. They understood our vision and delivered beyond expectations. Highly recommended.",
      avatar: "MR",
    },
    {
      name: "David Chen",
      role: "Founder, InnovateLab",
      company: "InnovateLab",
      quote:
        "From concept to launch in record time. Their technical expertise and creative thinking made all the difference for our project.",
      avatar: "DC",
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director, GrowthCo",
      company: "GrowthCo",
      quote:
        "Not just developers—they're strategic partners. The results speak for themselves with a 300% increase in user engagement.",
      avatar: "SW",
    },
  ]

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <div className="testimonials-label">SOCIAL PROOF</div>
        <h2 className="testimonials-title">
          WHAT OUR
          <br />
          <span className="highlight">CLIENTS SAY</span>
        </h2>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-track">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-quote">
                <span className="quote-mark">"</span>
                <p>{testimonial.quote}</p>
              </div>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
