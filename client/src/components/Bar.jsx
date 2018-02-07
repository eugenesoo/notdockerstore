import React from 'react';
import SmallLogo from './SmallLogo';

const Bar = () => (
  <div className="bar">
    <div className="bar-content">
      <button className="bar-button">
        <div className="bar-logo">
          <SmallLogo />
          <a className="bar-title">
            Docker EE
          </a>
        </div>
      </button>
      <button className="bar-button">
        <div className="bar-logo">
          <SmallLogo />
          <a className="bar-title">
            Docker CE
          </a>
        </div>
      </button>
      <button className="bar-button">
        <div className="bar-logo">
          <SmallLogo />
          <a className="bar-title">
            Containers
          </a>
        </div>
      </button>
      <button className="bar-button">
        <div className="bar-logo">
          <SmallLogo />
          <a className="bar-title">
            Plugins
          </a>
        </div>
      </button>
    </div>
  </div>
);

export default Bar;
