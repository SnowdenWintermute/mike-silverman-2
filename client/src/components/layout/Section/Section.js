import React from "react";

const Section = ({ title, children, id }) => {
  return (
    <section className="section" id={id}>
      <h1 className="section-title">{title}</h1>
      <div className="card-holder">{children}</div>
    </section>
  );
};

export default Section;
