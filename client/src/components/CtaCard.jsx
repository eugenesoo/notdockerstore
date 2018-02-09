import React from 'react';

const CtaCard = props => (
  <div className="ctacard">
    <div className="ctacard-title">
      {props.title}
    </div>
    <div className="ctacard-description">
      {props.desc}
    </div>
    <div className="ctacard-link">
      {props.link}
    </div>
  </div>
);

export default CtaCard;
