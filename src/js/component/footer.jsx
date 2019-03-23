import React, { Component } from "react";
import logo from "../../img/logo.png";

export class Footer extends Component {
	render() {
		return (
			<footer className="footer bg-dark mt-auto py-3 text-center">
				<img className="logo" src={logo} />
			</footer>
		);
	}
}
