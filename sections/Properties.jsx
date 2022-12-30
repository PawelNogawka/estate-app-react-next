import React from "react";
import Property from "../components/Property";
const Properties = ({ title, properties }) => {
  return (
    <section className="properties section-padding">
      <h2 className="section__heading">{title}</h2>
      <div className="properties__container">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
    </section>
  );
};

export default Properties;
