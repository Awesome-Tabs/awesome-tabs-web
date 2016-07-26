import React, { PropTypes } from 'react';
import Header from './common/Header';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
	    <div className="container">
	      <Header />
	      {this.props.children}
	    </div>
  	);
  }
}

App.propTypes = { children: PropTypes.object };

export default App;
