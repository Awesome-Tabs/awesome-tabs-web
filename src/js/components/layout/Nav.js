import React from "react";
// import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
		<div className="navbar">
			<div className="container">
				<div className="logo">
					TabDuo
				</div>
				<div className="mid-section">
					Mid-section
				</div>
				<div className="links">
					Links
				</div>
			</div>
		</div>
    );
  }
}