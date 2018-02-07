import React from 'react';
import Nav from './Nav';
import Main from './Main';
import Bar from './Bar';
import Content from './Content';

const App = () => (
  <div>
    <div className="main">
      <Nav /><Main />
    </div>
    <Bar />
    <Content />
  </div>
);

export default App;
