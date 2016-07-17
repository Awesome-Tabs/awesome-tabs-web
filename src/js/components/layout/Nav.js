import React from "react";
// import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="btcf">
        <span>NAVBAR This be</span>
        <a href="/">Home</a>
      </nav>
    );
  }
}
