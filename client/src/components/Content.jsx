import React from 'react';
import CtaCard from './CtaCard';

const Content = () => (
  <div className="content">
    <div className="content-pane">
      <div className="content-headline">
        GET DOCKER
        <hr className="content-headlineline" />
      </div>
      <h2 className="content-title">
        Get started with Docker
      </h2>
      <div className="content-description">
        Docker is the world’s leading software container platform available for developers, ops and businesses to build, ship and run any app on any infrastructure.
      </div>
      <div className="content-cta">
        <CtaCard
          title="Community Edition (CE)"
          desc="A free Docker platform for developers and 'do it yourself' ops teams to get started with Docker."
          link="Get Docker CE"
        />
        <CtaCard
          title="Enterprise Edition (EE)"
          desc="A subscription with support and certification for IT teams running critical apps in production."
          link="Get Docker EE"
        />
      </div>
    </div>
    <div className="content-pane">
      <img className="content-image" alt="Laptop Store browse experience" src="/images/img1.png" width="910" />
    </div>
  </div>
);

export default Content;
