import React from 'react';
import Logo from './Logo';

const Nav = () => (
  <div className="nav">
    <a id="homeButton" href="/">
      <Logo />
    </a>
    <div className="nav-buttons">
      <a href="/">Explore</a>
      <a href="/">Publish</a>
      <a href="/">Feedback</a>
      <a href="/">Log In</a>
    </div>
  </div>
);

export default Nav;

