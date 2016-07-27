import React, { PropTypes } from 'react';
import Header from './common/Header';

const App = ({ children }) => (
  <div className="container">
    <Header />
    {children}
  </div>
);

App.propTypes = { children: PropTypes.object };

export default App;
