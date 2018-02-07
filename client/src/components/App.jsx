import React from 'react';
import Nav from './Nav';
import Main from './Main';
import Bar from './Bar';

const App = () => (
  <div>
    <div className="main">
      <Nav /><Main />
    </div>
    <Bar />
  </div>
);

export default App;
