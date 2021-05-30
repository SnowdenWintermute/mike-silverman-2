import React from 'react'
const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h1 className="section-title">
        {title}
      </h1>
      <div className="card-holder">
        {children}
      </div>
    </section>
  )
}

export default Section
