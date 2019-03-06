import React from "react";

const Card = props => (
  <section className="uk-card uk-card-default uk-width-1-2@m">
    {props.children}
  </section>
);

export default Card;
