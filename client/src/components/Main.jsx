import React from 'react';

const Main = () => (
  <div className="hero">
    <div className="hero-content">
      <div className="hero-title">Not The Docker Store</div>
      <div className="hero-subtext">Fail To Find Trusted and Enterprise Ready Containers, Plugins, and Docker Editions</div>
      <div className="hero-input">
        <div className="hero-inputwrapper">
          <input className="hero-inputfield" placeholder="Search for great content (e.g. mysql)" autoComplete="off" />
        </div>
        <i id="hero-inputicon" className="fas fa-search" />
      </div>
    </div>
  </div>
);

export default Main;
