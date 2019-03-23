import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark">
				<Link to="/">
					<img className="logo float-left" src={logo} />
				</Link>

				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary text-center">
							<small>Login</small>
						</button>
					</Link>
				</div>
			</nav>
		);
	}
}
