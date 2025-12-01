"use client"

import "./OurProcess.css"

function OurProcess() {
  const steps = [
    {
      number: "1",
      title: "DISCOVERY",
      description: "Deep dive into your goals, market, and target audience to build the perfect strategy.",
      icon: "🔍",
    },
    {
      number: "2",
      title: "STRATEGY",
      description: "Craft a comprehensive roadmap that aligns with your vision and drives measurable results.",
      icon: "📋",
    },
    {
      number: "3",
      title: "DESIGN",
      description: "Create stunning, user-centric designs that convert visitors into customers.",
      icon: "🎨",
    },
    {
      number: "4",
      title: "DEVELOPMENT",
      description: "Build scalable, performant solutions using the latest technologies and best practices.",
      icon: "⚙️",
    },
    {
      number: "5",
      title: "TESTING",
      description: "Rigorous quality assurance ensuring every pixel and function works flawlessly.",
      icon: "✓",
    },
    {
      number: "6",
      title: "LAUNCH & SCALE",
      description: "Deploy with confidence and optimize continuously for growth and success.",
      icon: "🚀",
    },
  ]

  return (
    <section className="our-process">
      <div className="process-header">
        <h2 className="process-title">
          OUR PROCESS
        </h2>
        <p className="process-subtitle">A proven methodology that delivers exceptional results, every time.</p>
      </div>

      <div className="process-timeline">
        <div className="process-container">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-connector">{index < steps.length - 1 && <div className="connector-line"></div>}</div>
              <div className="step-content">
                <div className="step-badge">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProcess
